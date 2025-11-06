(async () => {
  const API = 'http://localhost:5000/api';
  const admin = { email: 'admin@example.com', password: 'admin123' };
  try {
    console.log('Logging in as admin...');
    let res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(admin)
    });
    const login = await res.json();
    if (!login.token) throw new Error('Login failed: ' + JSON.stringify(login));
    const token = login.token;
    console.log('OK. Token length:', token.length);

    // Create product
    console.log('Creating product...');
    res = await fetch(`${API}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ name: 'SMOKE_JS_PRODUCT', price: 555, stock: 3, description: 'smoke test', image: 'images/default.jpg' })
    });
    const created = await res.json();
    if (!created._id) throw new Error('Create failed: ' + JSON.stringify(created));
    console.log('Created product id:', created._id);

    // Update product
    console.log('Updating product price...');
    res = await fetch(`${API}/products/${created._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ price: 666 })
    });
    const updated = await res.json();
    console.log('Updated price:', updated.price);

    // Delete the product
    console.log('Deleting product...');
    res = await fetch(`${API}/products/${created._id}`, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token }
    });
    const del = await res.json();
    console.log('Delete response:', del.message || del);

    // Use an existing product to add to cart and checkout
    console.log('Fetching product list...');
    res = await fetch(`${API}/products`);
    const products = await res.json();
    if (!products.length) throw new Error('No products to test cart with');
    const pid = products[0]._id;
    console.log('Using product id for cart:', pid, 'name:', products[0].name);

    // Add to cart
    console.log('Adding to cart...');
    res = await fetch(`${API}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ productId: pid })
    });
    const cart = await res.json();
    console.log('Cart items count:', (cart.items || []).length);

    // Checkout
    console.log('Checking out...');
    res = await fetch(`${API}/orders/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }
    });
    const order = await res.json();
    console.log('Checkout response:', order.message || order);

    console.log('SMOKE TESTS COMPLETED SUCCESSFULLY');
    process.exit(0);
  } catch (err) {
    console.error('SMOKE TEST ERROR:', err.message || err);
    process.exit(1);
  }
})();
