import ServicePageCard from '../components/service-page.card'

function Services() {
	return (
		<div className='bg-[#030113] w-full sm:px-10 sm:py-5 px-5 py-3 overflow-hidden'>
			<div className='flex flex-col gap-10 sm:p-20 relative min-h-[500px] w-full sm:mt-0 mt-10'>
				<div className='w-full relative'>
					<div className='absolute z-10 flex flex-col gap-2 items-center w-full mt-10'>
						<h1 className='sm:text-5xl text-3xl font-extrabold text-white text-center'>
							Services
						</h1>
						<p className='text-muted-foreground sm:text-lg text-sm mt-4  text-center'>
							A digital agency, also known as a digital marketing agency or a
							digital marketing firm, is a specialized company that provides a
							range of services to help businesses establish.
						</p>
					</div>
				</div>
				<div className='flex md:gap-x-5 md:gap-y-5 justify-center flex-wrap gap-3 mt-52 sm:pt-0 pt-5'>
					<ServicePageCard
						title={'Telegram Bot(Python)'}
						description={'Telegram bots'}
						icon={'./assets/bot.png'}
						image={'./assets/money.png'}
						price={'$300'}
					/>
					<ServicePageCard
						title={'Telegram Bot(NodeJS)'}
						description={'Telegram bots'}
						icon={'./assets/bot.png'}
						image={'./assets/money.png'}
						price={'$400'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Services
