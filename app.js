

const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Ruta para obtener productos
app.get('/api/products', (req, res) => {
  const limit = parseInt(req.query.limit) || undefined;
  // Aquí deberías obtener los productos de tu base de datos
  const products = []; // Ejemplo de lista de productos
  res.json(products.slice(0, limit));
});

// Ruta para crear un nuevo producto
app.post('/api/products', (req, res) => {
  const { id, title, description, code, price, status, stock, category } = req.body;
  if (!id || !title || !description || !code || !price || !status || !stock || !category) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  // Aquí deberías guardar el producto en tu base de datos
  const newProduct = { id, title, description, code, price, status, stock, category };
  res.status(201).json({ message: 'Producto creado con éxito', product: newProduct });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
