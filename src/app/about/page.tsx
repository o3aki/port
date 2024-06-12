import IconCard from '@/components/IconCard'
import Image from 'next/image'
import React from 'react'

import { AiOutlineJavaScript } from 'react-icons/ai'
import { DiMysql, DiPostgresql } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt, FaGithubAlt, FaHtml5 } from 'react-icons/fa6'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiPrisma, SiVitepress } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'

const About: React.FC = () => {
	const icons = [FaHtml5, FaCss3Alt, AiOutlineJavaScript, FaReact]

	const icons2 = [
		TbBrandTypescript,
		RiNextjsLine,
		RiTailwindCssFill,
		FaGithubAlt,
	]

	const icons3 = [SiPrisma, SiVitepress, DiMysql, DiPostgresql]

	return (
		<div className="flex items-center justify-center md:mx-10 lg:mx-20">
			<div className="flex flex-col lg:flex-row lg:justify-between lg:gap-14 w-full max-w-screen-xl">
				<div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-1/2">
					<div className="flex flex-col w-full">
						<div className="flex flex-col items-center justify-center bg-monochrome-400 rounded-2xl shadow-monochrome-500 shadow-md">
							<Image
								src="/images/avatar.png"
								alt="Avatar"
								width={162}
								height={300}
								className="rounded-full mt-10 shadow-md shadow-monochrome-500"
							/>
							<p className="mt-4 text-xl">Arthur Daniyarov</p>
							<p className="mb-10 mt-4 text-md text-monochrome-50 ">ABOUT ME</p>
						</div>
						<div className="flex items-center justify-center mt-10">
							<div className="flex items-center justify-center">
								<h1 className="text-2xl text-monochrome-600">SKILLS</h1>
							</div>
						</div>
						<div className="flex flex-col justify-center mt-4 gap-4 w-full">
							<div className="flex flex-row items-center justify-center gap-4">
								<IconCard icons={icons} className="w-14 h-14 " />
							</div>
							<div className="flex flex-row items-center justify-center gap-4">
								<IconCard icons={icons2} className="w-14 h-14" />
							</div>
							<div className="flex flex-row items-center justify-center gap-4">
								<IconCard icons={icons3} className="w-14 h-14" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
					<div className="flex items-center justify-center bg-monochrome-600 w-[600px] h-[782px] rounded-2xl shadow-monochrome-800 shadow-md">
						<p className="text-md text-pretty text-monochrome-50 leading-loose p-10 lg:m-8">
							Hello! My name is Arthur, a 36-year-old IT enthusiast based in
							Saint Petersburg. My passion for technology dates back to the days
							when most websites were built on WordPress, although at the time I
							didn&apos;t fully commit to an IT career.
							<br /> <br /> Over the years, I&apos;ve amassed a broad range of
							development experience. I&apos;ve developed mobile applications
							for both iOS and Android, built websites, and written and deployed
							blockchain contracts (without liquidity). My database expertise
							includes working with MySQL, MongoDB, and PostgreSQL, utilizing
							Prisma ORM. Additionally, I have experience in setting up and
							deploying applications on remote servers. <br /> <br />
							Recently, I&apos;ve decided to fully immerse myself in
							development. I&apos;m actively updating my GitHub with new
							projects and working on a portfolio website. I&apos;m currently
							seeking a junior frontend developer position to leverage my skills
							and knowledge, and to continue growing professionally in this
							field.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
