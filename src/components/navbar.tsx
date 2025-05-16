import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from 'lucide-react'

function Navbar() {
	const location = useLocation()
	console.log(location.pathname)
	return (
		<div className='fixed top-0 left-0 z-50 flex items-center justify-center py-5 w-full	'>
			<div className='p-1.5 rounded-full bg-white flex items-center justify-between gap-5'>
				<Link to={'/'} className='flex items-center gap-3 px-1'>
					<img src='./assets/security.png' alt='logo' className='h-8' />
					<h1 className='sm:text-xl text-base font-semibold'>CYBERGROUP</h1>
				</Link>
				<div className='sm:flex items-center gap-3 hidden'>
					<Link
						to={'/blogs'}
						className={cn(
							location.pathname === '/blogs' && 'text-[#8551f2] font-semibold'
						)}
					>
						Blog
					</Link>
					<Link
						to={'/portfolio'}
						className={cn(
							location.pathname === '/portfolio' &&
								'text-[#8551f2] font-semibold'
						)}
					>
						Portfolio
					</Link>
					<Link
						to={'/services'}
						className={cn(
							location.pathname === '/services' &&
								'text-[#8551f2] font-semibold'
						)}
					>
						Services
					</Link>
				</div>
				<div className='sm:hidden block'>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Menu />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<Link
									to={'/blogs'}
									className={cn(
										location.pathname === '/blogs' &&
											'text-[#8551f2] font-semibold'
									)}
								>
									Blog
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									to={'/portfolio'}
									className={cn(
										location.pathname === '/portfolio' &&
											'text-[#8551f2] font-semibold'
									)}
								>
									Portfolio
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									to={'/services'}
									className={cn(
										location.pathname === '/services' &&
											'text-[#8551f2] font-semibold'
									)}
								>
									Services
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className='flex items-center justify-center'>
					<Link
						className='px-4 py-2 rounded-full bg-[#8551f2] text-white'
						to={'/contact'}
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
