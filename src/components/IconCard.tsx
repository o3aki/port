import React from 'react'
import type { IconType } from 'react-icons'

interface IconCardProps {
	icons: IconType[]
	className?: string
}

const IconCard: React.FC<IconCardProps> = ({ icons, className }) => {
	return (
		<div className="p-4">
			<div className="flex flex-row items-center justify-center gap-6">
				{icons.map((Icon, index) => (
					<div
						key={index}
						className="flex items-center justify-center w-20 h-20 bg-monochrome-300 rounded-lg text-monochrome-700"
					>
						<Icon className={className} />
					</div>
				))}
			</div>
		</div>
	)
}

export default IconCard
