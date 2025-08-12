import { Mail, Phone } from 'lucide-react'
import ContactForm from '../components/contact-form'

function Contact() {
	return (
		<div className='bg-[#030113] w-full sm:px-10 sm:py-5 px-5 py-3 overflow-hidden'>
			<div className='w-full mt-24'>
				<div className=' flex flex-col gap-2 items-center w-full '>
					<h1 className='sm:text-5xl text-3xl font-extrabold text-white text-center'>
						Contacts
					</h1>
					<p className='text-muted-foreground sm:text-lg text-sm sm:mt-4  text-center'>
						A digital agency, also known as a digital marketing agency or a
						digital marketing firm, is a specialized company that provides a
						range of services to help businesses establish.
					</p>
				</div>
			</div>

			<div className='container mx-auto w-full sm:my-10 my-5 text-white'>
				<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<p className='mt-2 text-muted-foreground'></p>
						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>info@riacoders.uz</p>
						</div>
						<div className='mt-2 flex items-center gap-3'>
							<Phone className='size-4' />
							<p className='text-sm'>+998 (90) 618-12-16</p>
						</div>
					</div>
					<div>
						<ContactForm />
					</div>
				</div>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10073.850080618062!2d69.20846290208587!3d41.35292867783571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1747363539308!5m2!1sru!2s'
				width='100%'
				height='450'
				style={{ border: '0' }}
				loading='lazy'
				className='sm:h-[450px] h-80'
			></iframe>
		</div>
	)
}

export default Contact
