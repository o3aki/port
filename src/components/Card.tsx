import React from 'react'

import { FaReact } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'

interface CardProps {
	title: string
	description: string
	imageUrl: string
	projectUrl: string
}

const Card: React.FC<CardProps> = ({
	title,
	imageUrl,
	projectUrl,
	description,
}) => {
	return (
		<div className="max-w-sm flex flex-col rounded-3xl bg-monochrome-400 overflow-hidden shadow-lg shadow-monochrome-500 m-4 transition-transform transform md:hover:scale-105">
			<img
				className="w-full filter grayscale transition duration-500 ease-in-out hover:filter-none"
				src={imageUrl}
				alt={title}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-lg text-monochrome-800 mb-2">
					{title}
				</div>
				<p className="text-monochrome-50 text-base">{description}</p>
			</div>
			<div className="flex justify-between px-4 pt-4 pb-4 mt-auto">
				<div className="flex items-center space-x-2 px-2 py-2">
					<FaReact
						className="text-monochrome-700 hover:animate-pulse"
						size={24}
					/>
					<RiNextjsLine
						className="text-monochrome-700 hover:animate-pulse"
						size={24}
					/>
					<TbBrandTypescript
						className="text-monochrome-700 hover:animate-pulse"
						size={24}
					/>
					<RiTailwindCssFill
						className="text-monochrome-700 hover:animate-pulse"
						size={24}
					/>
				</div>
				<a
					href={projectUrl}
					className="inline-block bg-monochrome-200 hover:bg-monochrome-700 hover:text-monochrome-50 text-monochrome-700 font-bold py-2 px-4 rounded-lg"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Project
				</a>
			</div>
		</div>
	)
}

export default Card
