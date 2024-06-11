import Card from '@/components/Card'
import React from 'react'

const projectsYou = [
	{
		title: 'Bank Web Application',
		description:
			'Responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!',
		imageUrl: '/images/bank.png',
		projectUrl: 'https://bankapp-three.vercel.app/',
		gitUrl: 'https://github.com/o3aki/bank_aposhe',
	},
	{
		title: 'GPT OpenAI Web Application',
		description: 'Fully functioning modern and responsive React website.',
		imageUrl: '/images/gpt3.png',
		projectUrl: 'https://gpt3-mu-silk.vercel.app/',
		gitUrl: 'https://github.com/o3aki/gpt3_o3aki',
	},
	{
		title: 'CouCou a Twitter clone',
		description: 'Fully functioning modern and responsive Twitter clone.',
		imageUrl: '/images/cou.png',
		projectUrl: 'https://cou-three.vercel.app/',
		gitUrl: 'https://github.com/o3aki/cou',
	},
]

const projects = [
	{
		title: 'Bank Web Application',
		description:
			'Responsive Web Portfolio consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, and more!',
		imageUrl: '/images/portfolio.jpg',
		projectUrl: 'https://arthurdaniyarov.ru',
		gitUrl: 'https://github.com/o3aki/port',
	},
]

const Page: React.FC = () => {
	return (
		<>
			<div className="flex items-center justify-center mt-14">
				<h1 className="text-3xl font-bold text-monochrome-700">My Projects</h1>
			</div>
			<div className="flex items-center justify-center ">
				<div className="flex justify-center w-[1280px] mt-10">
					<div className="flex flex-wrap gap-4 justify-center">
						{projects.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								description={project.description}
								imageUrl={project.imageUrl}
								projectUrl={project.projectUrl}
								gitUrl={project.gitUrl}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center mt-10">
				<h1 className="text-3xl font-bold text-monochrome-700">
					Projects by lessons
				</h1>
			</div>
			<div className="flex items-center justify-center ">
				<div className="flex justify-center w-[1280px] mt-10">
					<div className="flex flex-wrap gap-4 justify-center">
						{projectsYou.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								description={project.description}
								imageUrl={project.imageUrl}
								projectUrl={project.projectUrl}
								gitUrl={project.gitUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
