import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { name, email, message } = req.body

		console.log('Received form data:', { name, email, message })

		// Log environment variables (do not do this in production!)
		console.log('Yandex user:', process.env.YANDEX_USER)
		console.log('Yandex pass:', process.env.YANDEX_PASS)

		const transporter = nodemailer.createTransport({
			service: 'yandex',
			host: 'smtp.yandex.ru',
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: process.env.YANDEX_USER,
				pass: process.env.YANDEX_PASS,
			},
		})

		try {
			const info = await transporter.sendMail({
				from: `"Contact Form" <${process.env.YANDEX_USER}>`,
				to: 'oz@manck.ru',
				subject: 'Новый запрос с сайта',
				text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
				html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
			})

			console.log('Email sent:', info.messageId)
			res.status(200).json({ message: 'Email sent successfully!' })
		} catch (error) {
			console.error('Error sending email:', error)
			res.status(500).json({ message: 'Error sending email', error: error })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}

export default handler
