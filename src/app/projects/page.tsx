import Card from '@/components/Card'
import React from 'react'

const projectsYou = [
	{
		title: 'Bank Web Application',
		description:
			'Responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!',
		imageUrl: '/images/bank.png',
		projectUrl: 'https://bankapp-three.vercel.app/',
	},
	{
		title: 'GPT OpenAI Web Application',
		description: 'Fully functioning modern and responsive React website.',
		imageUrl: '/images/gpt3.png',
		projectUrl: 'https://gpt3-mu-silk.vercel.app/',
	},
]

const Page: React.FC = () => {
	return (
		<>
			<div className="flex items-center justify-center mt-20">
				<h1 className="text-3xl font-bold text-monochrome-700">
					PROJECTS by YouTube
				</h1>
			</div>
			<div className="flex justify-center mx-auto mt-20">
				<div className="flex flex-wrap">
					{projectsYou.map((project, index) => (
						<Card
							key={index}
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							projectUrl={project.projectUrl}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Page
