import { VscRobot } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

interface PricingTypes {
	_id?: string
	title: string
	description: string
	price: string
	image: string
	createdAt?: string
	updatedAt?: string
	icon: string
}

function ServicePageCard({
	title,
	description,
	image,
	icon,
	price,
}: PricingTypes) {
	return (
		<Link
			to={'#'}
			className='relative rounded-3xl p-1 flex items-center justify-center overflow-hidden md:w-96 w-full h-[300px] border border-solid border-[#ffffff25] hover:border-[#8551f2] delay-150 duration-200'
		>
			<div className='w-full h-full rounded-3xl relative backdrop-blur-md'>
				<span className='absolute top-0 right-0 z-10 border border-solid border-[#ffffff25] border-b-2 py-2 px-5 rounded-3xl flex items-center text-white'>
					<img src={image} alt='icon' width={25} height={20} />
					{price} dan
				</span>
				<span className='absolute top-0 left-0 z-10 border border-solid border-[#ffffff25] border-b-2 p-2 rounded-full aspect-square flex items-center justify-center'>
					<VscRobot size={32} className='text-blue-500' />
				</span>
				<div className='absolute top-0 left-0 z-20 w-full h-full p-4 rounded-3xl flex flex-col justify-end'>
					<img
						src={icon}
						alt='icon'
						width={200}
						height={250}
						className='object-cover absolute bottom-20 right-0 -z-10 -rotate-45 translate-x-20 translate-y-10'
					/>
					<h2 className='text-2xl font-semibold text-white'>{title}</h2>
					<p className='text-sm text-muted-foreground'>{description}</p>
				</div>
			</div>
		</Link>
	)
}

export default ServicePageCard
