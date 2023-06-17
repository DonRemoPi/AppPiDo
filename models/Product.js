import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  typeProduct: { type: String, required: true },
  nameProduct: { type: String, required: true },
  priceR: { type: Number, required: true, default: 0 },
  priceM: { type: Number, required: true, default: 0 },
  priceG: { type: Number, required: true, default: 0 },
  ingredientes: [{ type: String }],
  cardImage: { type: String },
}, {
  timestamps: true,
});


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);


export default Product;
