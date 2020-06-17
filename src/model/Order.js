import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: String,
    total: Number,
    cartItems: [
      {
        name: String,
        price: Number,
        count: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model('Order', OrderSchema);
