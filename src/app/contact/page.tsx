'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithubAlt, FaTelegram } from 'react-icons/fa6'

const Page = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const response = await fetch('/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				console.log('Email sent successfully!')
				// Optionally, you can clear the form or show a success message
				setFormData({ name: '', email: '', message: '' })
			} else {
				console.error('Failed to send email')
			}
		} catch (error) {
			console.error('Error sending email:', error)
		}
		console.log(formData)
	}

	return (
		<>
			<div className="flex items-center justify-center mt-36">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center justify-center bg-monochrome-400 w-14 h-14 rounded-xl">
						<Link href="https://t.me/O3AKII">
							<FaTelegram className="w-8 h-8" />
						</Link>
					</div>
					<div className="flex items-center justify-center bg-monochrome-400 w-14 h-14 rounded-xl">
						<Link href="https://github.com/o3aki">
							<FaGithubAlt className="w-8 h-8" />
						</Link>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<div className=" flex items-center w-[1280px] justify-center py-12 px-4 sm:px-6 lg:px-8">
					<Head>
						<title>Contact Me - Web Development Portfolio</title>
					</Head>
					<div className="max-w-md w-full space-y-8 p-10 bg-monochrome-400 rounded-3xl shadow-lg shadow-monochrome-500">
						<h2 className="text-center text-3xl font-extrabold text-monochrome-200">
							Contact Me
						</h2>
						<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
							<div className="rounded-xl shadow-lg shadow-monochrome-500 -space-y-px">
								<div>
									<label htmlFor="name" className="sr-only">
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										required
										className="appearance-none rounded-none relative bg-monochrome-200 block w-full px-3 py-2  placeholder-monochrome-400 text-monochrome-700 rounded-t-lg focus:outline-none focus:ring-monochrome-300 focus:border-monochrome-300 focus:z-10 sm:text-sm"
										placeholder="Name"
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
								<div className="border-2 border-monochrome-400"></div>
								<div>
									<label htmlFor="email" className="sr-only">
										Email address
									</label>
									<input
										id="email"
										name="email"
										type="email"
										required
										className="appearance-none rounded-none relative bg-monochrome-200 block w-full px-3 py-2  placeholder-monochrome-400 text-monochrome-700 focus:outline-none focus:ring-monochrome-300 focus:border-monochrome-300 focus:z-10 sm:text-sm"
										placeholder="Email address"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className="border-2 border-monochrome-400"></div>
								<div>
									<label htmlFor="message" className="sr-only">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										required
										className="appearance-none rounded-none relative bg-monochrome-200 block w-full px-3 py-2  placeholder-monochrome-400 text-monochrome-700 rounded-b-md focus:outline-none focus:ring-monochrome-300 focus:z-10 sm:text-sm"
										placeholder="Message"
										value={formData.message}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-monochrome-700 bg-monochrome-100 hover:bg-monochrome-700 hover:text-monochrome-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-monochrome-500"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
