import { ProjectSectionProps } from '@/app/projects/types' // Import the type
import React from 'react'
import Card from './Card'

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => (
	<>
		<div className="flex items-center justify-center mt-14">
			<h1 className="text-3xl font-bold text-monochrome-700">{title}</h1>
		</div>
		<div className="flex items-center justify-center">
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
							width={project.width}
							height={project.height}
						/>
					))}
				</div>
			</div>
		</div>
	</>
)

export default ProjectSection
