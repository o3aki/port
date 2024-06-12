import Image from 'next/image'
import heroSvg from '../../public/images/hero.png' // Adjust the path as needed

const Hero = () => {
	return (
		<>
			<div className="flex items-center w-[1280px] justify-center mt-3 ">
				<div className="">
					<Image src={heroSvg} alt="Hero" width={726} height={200} />
				</div>
				<div></div>
			</div>
		</>
	)
}

export default Hero
