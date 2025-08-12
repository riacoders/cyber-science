import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { Separator } from './ui/separator'

function Footer() {
	return (
		<div className='w-full sm:p-10 bg-[#030113] '>
			<div className='pt-12 max-md:px-4 bg-[#8551f2] text-white rounded-3xl sm:rounded-b-3xl rounded-b-none'>
				<div className='container mx-auto max-w-7xl pb-12'>
					<div className='grid grid-cols-1 sm:gap-12 gap-4 md:grid-cols-4'>
						<div className='flex flex-col space-y-3 md:col-span-2'>
							<Link to={'/'} className='flex items-center gap-3 px-1'>
								<img src='./assets/security.png' alt='logo' className='h-8' />
								<h1 className='text-xl font-semibold'>CYBERGROUP</h1>
							</Link>
							<p>IT services and courses</p>
						</div>
						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold sm:text-3xl text-xl'>Sahifalar</h1>
							<div className='flex flex-col space-y-3 sm:pt-6'>
								{navLinks.map(item => (
									<Link
										key={item.route}
										to={`/${item.route}`}
										className='font-medium transition-all hover:underline'
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold sm:text-3xl text-xl'>Contacts</h1>
							<div className='flex flex-col space-y-3 sm:pt-6'>
								<div className='flex items-center space-x-3'>
									<PhoneCall size={20} />
									<div className='flex flex-col space-y-1'>
										<a
											href='tel:+998906181216'
											className='text-sm hover:font-semibold duration-150 delay-200 hover:underline'
										>
											+998 (90) 618-12-16
										</a>
										<Separator className='dark:bg-gray-500' />
										<a
											href='tel:+998770332426'
											className='text-sm hover:font-semibold duration-150 delay-200 hover:underline'
										>
											+998 (77) 033-24-26
										</a>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<Mail size={20} />
									<a
										href='mailto:riauz24032003@gmail.com'
										className='text-sm hover:font-semibold duration-150 delay-200 hover:underline'
									>
										info@cyberscience.uz
									</a>
								</div>
								<div className='flex items-center space-x-3'>
									<MapPin size={20} />
									<span className='text-sm'>Navoiy, Navbahor 24 street</span>
								</div>
							</div>
						</div>
					</div>
					<div className='pt-12'>
						<Separator className='mb-3 dark:bg-gray-500' />
						<p>&copy; {new Date().getFullYear()}. All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
