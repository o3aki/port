export interface Project {
	title: string
	description: string
	imageUrl: string
	projectUrl: string
	gitUrl: string
	width: number
	height: number
}

export interface CardProps extends Project {}

export interface ProjectSectionProps {
	title: string
	projects: Project[]
}
