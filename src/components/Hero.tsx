import Image from 'next/image'
import heroSvg from '../../public/images/hero.svg' // Adjust the path as needed

const Hero = () => {
	return (
		<div className="absolute bottom-0 flex justify-center w-full">
			<div className="w-[1280px] max-w-3xl bg-cover">
				<Image
					src={heroSvg}
					alt="Hero"
					layout="responsive"
					className="w-full h-auto"
				/>
			</div>
		</div>
	)
}

export default Hero
