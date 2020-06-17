import { Router } from 'express';
import Product from '../model/Product';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({
      msg: 'Products found',
      data: products,
      success: true,
    });
  } catch (err) {
    return res.json({
      msg: err,
      success: false,
    });
  }
});

router.post('/', async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    return res.json({
      msg: 'New Product added!',
      data: newProduct,
      success: true,
    });
  } catch (err) {
    return res.json({
      msg: err,
      success: false,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const getProduct = await Product.findById({
      _id: id,
    });
    res.json({
      msg: 'Successfully found product!',
      data: getProduct,
      success: true,
    });
  } catch (err) {
    res.json({
      msg: err,
      success: false,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      { upsert: true, new: true },
    ).exec();
    res.json({
      msg: 'Successfully Updated Product',
      data: updateProduct,
      success: 'true',
    });
  } catch (err) {
    res.json({
      msg: err,
      success: false,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await Product.deleteOne({
      _id: id,
    });
    return res.json({
      msg: 'Product Deleted',
      data: deleteProduct,
      success: true,
    });
  } catch (err) {
    return res.json({
      msg: err,
      success: false,
    });
  }
});

export default router;
