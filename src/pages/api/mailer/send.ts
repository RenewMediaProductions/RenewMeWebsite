import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from 'shared/configs/App';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(400).json({ message: 'Not found.' });

  const body = req.body;

  sgMail.setApiKey(SENDGRID_API_KEY as string);

  try {
    await sgMail.send({
      to: body.to,
      from: 'support@myrenewme.com',
      subject: body.subject,
      html: body.html,
    });

    res.status(200).json({ message: 'Email has been sent.' });
  } catch (error) {
    res.status(400).json({ message: 'Email has not been sent.' });
  }
}
