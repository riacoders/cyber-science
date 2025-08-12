import { Link } from 'react-router-dom'
import StarShower from './star-shower'

export interface ProjectTypes {
	_id?: string
	name: string
	description: string
	type: string
	image: string
	link: string
	createdAt?: string
	updatedAt?: string
}

function ProjectCard({ name, description, type, image, link }: ProjectTypes) {
	return (
		<Link
			to={link}
			className='group p-1 rounded-xl md:w-96 md:h-[350px] w-full border border-solid border-[#ffffff20] backdrop-blur-xs relative overflow-hidden flex items-center justify-center'
		>
			<div className='absolute top-0 left-0 z-10 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-in-out flex flex-col gap-3 bg-gradient-to-tr from-red-400 via-transparent to-blue-400 backdrop-blur-xs p-4'>
				<h1 className='text-xl font-semibold text-black'>{name}</h1>
				<span className='text-base text-red-600'>{type}</span>
				<p className='text-sm text-black'>{description}</p>
				<div className='absolute bottom-0 left-0 w-full h-full z-[11]'>
					<StarShower height={350} count={100} size={2} width={1000} />
				</div>
			</div>

			<div className='flex items-center justify-center w-full h-full rounded-lg overflow-hidden'>
				<img
					src={image}
					alt='image'
					width={400}
					height={350}
					className='object-cover w-full h-full rounded-lg'
					loading='lazy'
				/>
			</div>

			<div className='absolute top-0 -right-2 bg-blue-500 blur-md w-32 h-32 -z-10'></div>
			<div className='absolute bottom-0 -left-2 bg-red-500 blur-md w-32 h-32 -z-10'></div>
		</Link>
	)
}

export default ProjectCard
