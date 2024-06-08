import Image from 'next/image'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { DiMysql, DiPostgresql } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt, FaGithubAlt, FaHtml5 } from 'react-icons/fa6'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb, SiPrisma, SiVitepress } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'

const About = () => {
	return (
		<>
			<div className="flex items-center justify-center mt-14">
				<div className="flex items-center justify-center bg-monochrome-200 w-[1280px] h-14 rounded-2xl shadow-monochrome-400 shadow-md">
					<h1 className="text-2xl text-monochrome-600">ABOUT ME</h1>
				</div>
			</div>
			<div className="flex items-center justify-center mt-14">
				<div className="flex items-center justify-between w-[1280px]">
					<div className="items-center justify-start">
						<div className="flex items-center justify-center bg-monochrome-400 w-[600px] h-100 rounded-2xl shadow-monochrome-500 shadow-md">
							<Image
								src="/images/avatar.jpg"
								alt="Avatar"
								width={162}
								height={300}
								className="rounded-full mt-14 mb-14 shadow-md shadow-monochrome-500"
							/>
						</div>
					</div>
					<div className="items-center justify-end">
						<div className="flex items-center justify-center bg-monochrome-300 w-[600px] h-100 rounded-2xl shadow-monochrome-500 shadow-md">
							<div>
								<p className="text-xl text-monochrome-600 leading-relaxed m-14 mb-14">
									Hi, I'm <strong>Arthur Daniyarov</strong>, a passionate web
									developer with a knack for creating dynamic and responsive web
									applications. I have a junior background in modern web
									technologies and love to bring ideas to life in the browser.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center mt-14">
				<div className="flex items-center justify-center bg-monochrome-200 w-[1280px] h-14 rounded-2xl shadow-monochrome-400 shadow-md">
					<h1 className="text-2xl text-monochrome-600">SKILLS</h1>
				</div>
			</div>
			<div className="flex items-center justify-center mt-14">
				<div className="flex items-center justify-center bg-monochrome-200 w-[1280px] h-56 rounded-2xl shadow-monochrome-400 shadow-md gap-4">
					<FaHtml5 className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<FaCss3Alt className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<AiOutlineJavaScript className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<FaReact className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<RiNextjsLine className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<SiVitepress className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<TbBrandTypescript className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<RiTailwindCssFill className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<SiPrisma className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<SiMongodb className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<DiMysql className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<DiPostgresql className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
					<FaGithubAlt className="w-14 h-14 px-1 py-1 rounded-full shadow-monochrome-500 shadow-sm" />
				</div>
			</div>
		</>
	)
}

export default About
