// Page.tsx
import ProjectSection from '@/components/ProjectSection'
import React from 'react'
import { Project } from './types' // Import the type

const lessonProjects: Project[] = [
	{
		title: 'Bank Web Application',
		description:
			'Responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!',
		imageUrl: '/images/bank.png',
		projectUrl: 'https://bankapp-three.vercel.app/',
		gitUrl: 'https://github.com/o3aki/bank_aposhe',
		width: 600,
		height: 400,
	},
	{
		title: 'GPT OpenAI Web Application',
		description: 'Fully functioning modern and responsive React website.',
		imageUrl: '/images/gpt3.png',
		projectUrl: 'https://gpt3-mu-silk.vercel.app/',
		gitUrl: 'https://github.com/o3aki/gpt3_o3aki',
		width: 600,
		height: 400,
	},
	{
		title: 'CouCou a Twitter clone',
		description: 'Fully functioning modern and responsive Twitter clone.',
		imageUrl: '/images/cou.png',
		projectUrl: 'https://cou-three.vercel.app/',
		gitUrl: 'https://github.com/o3aki/cou',
		width: 600,
		height: 400,
	},
]

const projects: Project[] = [
	{
		title: 'Portfolio Web Application',
		description:
			'Responsive Web Portfolio consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, and more!',
		imageUrl: '/images/portfolio.png',
		projectUrl: 'https://arthurdaniyarov.ru',
		gitUrl: 'https://github.com/o3aki/port',
		width: 600,
		height: 400,
	},
]

const Page: React.FC = () => {
	return (
		<>
			<ProjectSection title="My Projects" projects={projects} />
			<ProjectSection title="Projects by lessons" projects={lessonProjects} />
		</>
	)
}

export default Page
