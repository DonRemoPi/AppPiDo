export const getAllProductsCat = async () => {

  await db.connect();
  const categories = await Product.find().lean()
  await db.disconnect();

  return categories

}