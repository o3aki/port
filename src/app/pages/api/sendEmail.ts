import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body

		// Create a Nodemailer transporter using Yandex SMTP
		const transporter = nodemailer.createTransport({
			host: 'smtp.yandex.com',
			port: 465,
			secure: true, // Use SSL
			auth: {
				user: process.env.YANDEX_USER,
				pass: process.env.YANDEX_PASS,
			},
		})

		try {
			await transporter.sendMail({
				from: process.env.YANDEX_USER,
				to: 'oz@manck.ru',
				subject: `Contact form submission from ${name}`,
				text: message,
				html: `<p>You have a new contact form submission</p>
               <p><strong>Name: </strong> ${name}</p>
               <p><strong>Email: </strong> ${email}</p>
               <p><strong>Message: </strong> ${message}</p>`,
			})

			res.status(200).json({ message: 'Email sent successfully' })
		} catch (error) {
			res.status(500).json({ message: 'Failed to send email', error })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
