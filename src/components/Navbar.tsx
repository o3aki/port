'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="flex items-center justify-between bg-monochrome-400 w-full h-14 rounded-b-2xl shadow-monochrome-500 shadow-lg border-b-transparent relative">
			<div className="flex justify-start gap-8 ml-10 md:ml-10">
				<Link href="/">Arthur D</Link>
			</div>
			<div className="md:hidden flex items-center mr-10">
				<button onClick={toggleMenu} className="focus:outline-none">
					<span className="block w-6 h-0.5 bg-white mb-1"></span>
					<span className="block w-6 h-0.5 bg-white mb-1"></span>
					<span className="block w-6 h-0.5 bg-white"></span>
				</button>
			</div>
			<div
				className={`md:flex justify-end gap-8 mr-8 md:mr-20 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-monochrome-400 md:bg-transparent rounded-b-2xl`}
			>
				<nav>
					<ul className="flex flex-col md:flex-row items-center gap-8">
						<li>
							<Link
								className={`link ${pathname === '/' ? 'active' : ''}`}
								href="/"
								style={{ color: pathname === '/' ? '#fafafa' : 'inherit' }}
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/projects' ? 'active' : ''}`}
								href="/projects"
								style={{
									color: pathname === '/projects' ? '#fafafa' : 'inherit',
								}}
								onClick={() => setIsOpen(false)}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/contact' ? 'active' : ''}`}
								href="/contact"
								style={{
									color: pathname === '/contact' ? '#fafafa' : 'inherit',
								}}
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/about' ? 'active' : ''}`}
								href="/about"
								style={{ color: pathname === '/about' ? '#fafafa' : 'inherit' }}
								onClick={() => setIsOpen(false)}
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
