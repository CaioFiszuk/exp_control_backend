const express = require('express');
const cors = require("cors");
const app = express();
const productsRoutes = require('./routes/products');

app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes);

app.use((err, req, res, next) => {
   console.log("err:" + err)

  res.status(err.statusCode).send({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`O servidor está rodando em ${PORT}`));