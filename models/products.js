import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格格式不正確'],
    required: [true, '商品價格不能為空']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  // 是否上架
  sell: {
    type: Boolean,
    default: false
  },
  // 商品的分類(靜態固定那幾類)
  category: {
    type: String,
    //  enum 值只能是陣列裡的類別
    enum: {
      values: ['豚骨', '醬油', '雞白湯', '叉燒'],
      message: '商品分類不存在'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)