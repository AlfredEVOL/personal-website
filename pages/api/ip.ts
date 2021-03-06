// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ip: string | string[] | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ip : (req.headers['x-real-ip']? req.headers['x-real-ip'] :req.socket.remoteAddress ) })
}
