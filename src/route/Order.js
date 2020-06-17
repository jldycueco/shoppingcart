import { Router } from 'express';
import Order from '../model/Order';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json({
      msg: 'New Order added!',
      data: orders,
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
  if (!req.body) {
    return res.json({
      msg: 'Input is required',
      success: false,
    });
  }

  const order = new Order(req.body);

  try {
    const newOrder = await order.save();
    return res.json({
      msg: 'New Order added!',
      data: newOrder,
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
    const getOrder = await Order.findById({
      _id: id,
    });
    res.json({
      msg: 'Successfully found Order!',
      data: getOrder,
      success: true,
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
    const deleteOrder = await Order.deleteOne({
      _id: id,
    });
    return res.json({
      msg: 'Order Deleted',
      data: deleteOrder,
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
