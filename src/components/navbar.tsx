import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='fixed top-0 left-0 z-50 flex items-center justify-center py-5 w-full	'>
			<div className='p-3 rounded-full bg-white flex items-center justify-between'>
				<Link to={'/'} className='flex items-center gap-3'>
					<img src='./assets/security.png' alt='logo' className='h-8' />
					<h1 className='text-xl font-semibold'>CYBERSCIENCE</h1>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
