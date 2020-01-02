const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderList: [{ orderGoods: { type: mongoose.Schema.Types.ObjectId, ref: 'Goods' } }],
  orderName: String,
});

module.exports = mongoose.model('Order', orderSchema);
