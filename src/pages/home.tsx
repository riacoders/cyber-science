import { FaSlack } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiFillAndroid } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillSpotify } from 'react-icons/ai'
import ServiceCard from '../components/service.card'
import ProjectCard from '../components/project.card'

function Home() {
	return (
		<div className='bg-[#030113] w-full sm:px-10 sm:py-5 p-3 overflow-hidden'>
			<div className='w-full h-screen relative flex items-center justify-center'>
				<div className='flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center'>
					<span className='sm:text-lg text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f3a1a9] to-white text-center'>
						Our mission: Quality and modern education
					</span>
					<h1 className='md:text-[80px] sm:text-6xl text-5xl font-extrabold text-center text-white sm:leading-20'>
						Your digital{' '}
						<span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#f3a1a9] via-[#cd7dec] to-[#7519e1]'>
							strategy partner
						</span>
					</h1>
					<p className='sm:text-lg text-sm font-semibold text-white text-center'>
						Our Digital agency offers a wide array of services, tailored to the
						unique needs of each client.
					</p>
					<Link
						to={'/portfolio'}
						className='sm:px-14 sm:py-5 px-10 py-3 bg-white rounded-full text-black flex items-center justify-center border-none outline-none font-extrabold delay-150 duration-200 hover:bg-[#7519e1] hover:text-white cursor-pointer'
					>
						Discuss a Project
					</Link>
					<div className='flex items-center gap-10 mt-10'>
						<Link to='#' className='sm:text-[52px] text-4xl text-gray-400'>
							<FaSlack />
						</Link>
						<Link to='#' className='sm:text-[52px] text-4xl text-gray-400'>
							<AiFillAndroid />
						</Link>
						<Link to='#' className='sm:text-[52px] text-4xl text-gray-400'>
							<AiFillGithub />
						</Link>
						<Link to='#' className='sm:text-[52px] text-4xl text-gray-400'>
							<AiFillSpotify />
						</Link>
					</div>
				</div>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 aspect-square rounded-full bg-[#48126c] blur-[100px] shadow-purple-900'></div>
			</div>
			<div className='w-full rounded-xl sm:p-20 p-5 bg-gradient-to-r from-[#f8a7a6] to-[#7519e1] flex flex-col gap-5 items-center'>
				<img
					src='./assets/programmer.png'
					alt='back'
					className='md:h-[500px] sm:h-96 h-64'
				/>
				<div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
					<div className=''>
						<h1 className='sm:text-[48px] text-2xl text-white font-extrabold sm:leading-14'>
							Your Digital Success Starts Here
						</h1>
						<button className='sm:px-14 sm:py-5 px-10 py-3 mt-5 sm:m-0 m-auto bg-white rounded-full text-black flex items-center justify-center border-none outline-none font-extrabold delay-150 duration-200 hover:bg-[#7519e1] hover:text-white cursor-pointer '>
							About Company
						</button>
					</div>
					<div className='flex flex-col gap-5'>
						<p className='sm:text-lg text-sm font-semibold text-white'>
							This is the main factor that sets us apart from our competition
							and allows us to deliver a specialist business consultancy
							service.
						</p>

						<p className='sm:text-lg text-sm font-semibold text-white'>
							Through our years of experience, we’ve also learned that while
							each channel has its own set of advantages, they all work best
							when strategically paired with other channels.
						</p>
					</div>
				</div>
			</div>
			<div className='grid sm:grid-cols-3 grid-cols-1 gap-10 sm:p-20 mt-5 sm:mt-0 relative sm:min-h-[500px]'>
				<div className='w-full relative'>
					<div className='absolute z-10 sm:p-0 px-3'>
						<h1 className='sm:text-5xl text-3xl font-extrabold text-white'>
							Digital Services Tailored to You
						</h1>
						<p className='text-muted-foreground sm:text-lg text-sm mt-4 mb-10'>
							A digital agency, also known as a digital marketing agency or a
							digital marketing firm, is a specialized company that provides a
							range of services to help businesses establish.
						</p>
						<Link
							to={'/services'}
							className='bg-[#231C54] delay-150 duration-200 hover:bg-[#7519e1] cursor-pointer text-white sm:px-14 sm:py-5 px-10 py-3  rounded-full mt-20 font-extrabold m-auto'
						>
							View All Services
						</Link>
					</div>
				</div>
				<div className='sm:col-span-2 grid sm:grid-cols-3 grid-cols-1 gap-5 sm:mt-0 mt-72'>
					<div className='sm:p-5'>
						<ServiceCard
							image='./assets/cloud-server.png'
							title='Backend - Python'
						/>
					</div>
					<div>
						<ServiceCard
							image='./assets/internet.png'
							title='Frontend - ReactJS'
						/>
					</div>
					<div className='sm:p-5'>
						<ServiceCard
							image='./assets/assistant.png'
							title='Telegram Bot - Python'
						/>
					</div>
					<div>
						<ServiceCard
							image='./assets/user-interface.png'
							title='Mobile App - React Native'
						/>
					</div>
					<div className='sm:p-5'>
						<ServiceCard image='./assets/web-design.png' title='UI/UX design' />
					</div>
					<div>
						<ServiceCard image='./assets/mern.png' title='Mern Stack App' />
					</div>
				</div>
				<div className='absolute sm:top-1/2 top-24 left-1/4 -translate-x-1/2 -translate-y-1/2 sm:h-96 h-64 aspect-square rounded-full bg-[#48126c] blur-[100px] shadow-purple-900'></div>
			</div>
			<div className='flex flex-col gap-10 sm:p-20 pt-5 relative min-h-[500px] w-full'>
				<div className='w-full relative'>
					<div className='absolute z-10 flex flex-col gap-2 items-center w-full sm:px-0 px-3'>
						<h1 className='sm:text-5xl text-3xl font-extrabold text-white text-center'>
							Projects
						</h1>
						<p className='text-muted-foreground sm:text-lg text-sm mt-4 sm:mb-10 mb-5 text-center'>
							They delve into market research and audience insights, helping
							clients refine their digital strategies.
						</p>
						<Link
							to={'/portfolio'}
							className='bg-[#231C54] delay-150 duration-200 hover:bg-[#7519e1] cursor-pointer text-white sm:px-14 sm:py-5 px-10 py-3  rounded-full font-extrabold'
						>
							View All Projects
						</Link>
					</div>
				</div>
				<div className='flex md:gap-x-5 md:gap-y-5 justify-center flex-wrap gap-3 mt-52'>
					<ProjectCard
						name={'E-Commerce Platform'}
						description='A modern e-commerce platform built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.'
						type='Web Site'
						image={
							'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
						}
						link={'#'}
					/>

					<ProjectCard
						name={'Portfolio Website'}
						description='A modern, interactive portfolio website with 3D elements, dark theme, and responsive design.'
						type='Web Site'
						image={
							'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
						}
						link={'https://codefy.uz'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
