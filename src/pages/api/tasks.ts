import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
  res.status(200).json(response.data);
}
