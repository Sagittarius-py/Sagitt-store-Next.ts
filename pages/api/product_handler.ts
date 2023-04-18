import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';
import { connectToDatabase } from '@/utils/mongo';

const product_handler = nextConnect();


product_handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  

  const data = await db.collection('product_collection').find().limit(10).toArray();


  res.json(data);
});

export default product_handler;