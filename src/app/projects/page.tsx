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
					Projects by YouTube
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
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
