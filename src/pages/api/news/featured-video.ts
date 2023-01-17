import { newsService } from 'modules/News/services';
import { HttpResponseType, HTTP_RESPONSES } from 'shared/constants/Http';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data: records, error } = await newsService.getFeaturedVideo();
    if (error) return res.json({ ...HTTP_RESPONSES[HttpResponseType.ServerError], error });
    return res.json({ ...HTTP_RESPONSES[HttpResponseType.Success], records });
  }

  res.send(null);
}
