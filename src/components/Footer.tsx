import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
	return (
		<div className="flex items-center justify-center mt-14">
			<footer className="bg-monochrome-800 text-monochrome-50 px-8 py-8 w-[1280px] rounded-t-3xl">
				<div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
					<div className="mb-4 md:mb-0">
						<h2 className="text-xl font-bold">Arthur Daniyarov</h2>
						<p className="text-xs mt-2 text-monochrome-400">
							© {new Date().getFullYear()} All rights reserved.
						</p>
					</div>
					<div className="flex space-x-4 mb-4 md:mb-0">
						<a
							href="https://github.com/o3aki"
							className="text-pink-400 hover:text-monochrome-300 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={20} />
						</a>
						<a
							href="https://www.linkedin.com/in/o3aki"
							className="text-pink-400 hover:text-monochrome-300 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href="https://twitter.com/o3aki"
							className="text-pink-400 hover:text-monochrome-300 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter size={20} />
						</a>
					</div>
					<div className="text-sm">
						<a
							href="/privacy"
							className="hover:text-monochrome-300 text-monochrome-400 transition-colors mx-2"
						>
							Privacy Policy
						</a>
						<a
							href="/terms"
							className="hover:text-monochrome-300 text-monochrome-400 transition-colors mx-2"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
