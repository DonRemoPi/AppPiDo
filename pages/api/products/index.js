import { db, SHOP_CONSTANTS } from '@/database';
import { Product } from '@/models';


export default function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return getProducts(req, res)
    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const getProducts = async (req, res) => {

  const { typeProduct = 'all' } = req.query


  let condition = {};

  if (typeProduct !== 'all' && SHOP_CONSTANTS.validTypes.includes(`${typeProduct}`)) {
    condition = { typeProduct };
  }

  await db.connect();
  const products = await Product.find(condition)
    .select('typeProduct nameProduct priceR priceM priceG ingredientes cardImage _id')
    .lean();
  await db.disconnect();

  return res.status(200).json(products);
}


