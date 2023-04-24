import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';
import { connectToDatabase } from '@/utils/mongo';
const ObjectId = require("mongodb").ObjectID;

const getOnePrcodyct_handler = nextConnect();


getOnePrcodyct_handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  
  const { productId } = req.query;
  
  if(productId){
    const data = await db.collection('product_collection').findOne({_id: ObjectId(productId)});
    res.json(data);
  }
  
});

export default getOnePrcodyct_handler;