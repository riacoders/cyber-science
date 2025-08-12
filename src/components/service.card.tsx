interface IProps {
	image: string
	title: string
}

function ServiceCard({ image, title }: IProps) {
	return (
		<div className='flex flex-col p-10 rounded-xl bg-[#231C54] hover:bg-gradient-to-r from-[#F6A4A8] to-[#7D1FE4] gap-5 items-center h-full'>
			<img src={image} alt='image' className='h-28 m-auto' />
			<h1 className='text-2xl font-extrabold text-white text-center'>
				{title}
			</h1>
		</div>
	)
}

export default ServiceCard
