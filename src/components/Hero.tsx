import Image from 'next/image'
import heroSvg from '../../public/images/hero.svg' // Adjust the path as needed

const Hero = () => {
	return (
		<div className="absolute bottom-0 flex justify-center">
			<div className="">
				<Image src={heroSvg} alt="Hero" width={800} height={200} />
			</div>
		</div>
	)
}

export default Hero
