import mongoose from 'mongoose'

// 訂單
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    // ref代表這個欄位的資料是users來的
    ref: 'users'
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products',
          required: [true, '缺少商品 ID']
        },
        quantity: {
          type: Number,
          required: [true, '缺少商品數量']
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('orders', orderSchema)
