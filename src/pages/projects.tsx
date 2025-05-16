import ProjectCard from '../components/project.card'

function Projects() {
	return (
		<div className='bg-[#030113] w-full sm:px-10 sm:py-5 px-5 py-3 overflow-hidden'>
			<div className='flex flex-col gap-10 sm:p-20 relative min-h-[500px] w-full'>
				<div className='w-full relative'>
					<div className='absolute z-10 flex flex-col gap-2 items-center w-full sm:mt-10 mt-20'>
						<h1 className='sm:text-5xl text-3xl font-extrabold text-white text-center'>
							Portfolio
						</h1>
						<p className='text-muted-foreground sm:text-lg text-sm mt-4  text-center'>
							They delve into market research and audience insights, helping
							clients refine their digital strategies.
						</p>
					</div>
				</div>
				<div className='flex md:gap-x-5 md:gap-y-5 justify-center flex-wrap gap-3 mt-52 sm:mb-0 mb-5'>
					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>

					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>
					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>
					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>
					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>
					<ProjectCard
						name={'Telegram Bot'}
						description='NodeJS Telegram Bot'
						type='Telegram Bot'
						image={'./assets/image1.png'}
						link={'#'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
