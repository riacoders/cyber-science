import { useEffect, useState } from 'react'
import BlogCard from '../components/blog.card'
import { getBlogs } from '../service/blog.service'

interface IBlog {
	title: string
	description: string
	author: {
		name: string
		avatar: { url: string }
		bio: string
		blogs: IBlog[]
		id: string
	}
	category: {
		name: string
		slug: string
		blogs: IBlog[]
	}
	tag: {
		name: string
		slug: string
		blogs: IBlog[]
	}
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
}

function Blogs() {
	const [blogs, setBlogs] = useState<IBlog[]>([])

	useEffect(() => {
		async function fetchBlogs() {
			const data = await getBlogs()
			setBlogs(data)
		}
		fetchBlogs()
	}, [])
	return (
		<div className='bg-[#030113] w-full sm:px-10 sm:py-5 px-5 py-3 overflow-hidden'>
			<div className='flex flex-col gap-10 sm:p-20 relative min-h-[500px] w-full'>
				<div className='w-full relative'>
					<div className='absolute z-10 flex flex-col gap-2 items-center w-full sm:mt-10 mt-20'>
						<h1 className='text-5xl font-extrabold text-white text-center'>
							Blog
						</h1>
						<p className='text-muted-foreground text-lg mt-4  text-center'>
							All news
						</p>
					</div>
				</div>
				<div className='container mx-auto w-full mt-20 sm:mb-0 mb-5'>
					<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
						{blogs.map(blog => (
							<BlogCard key={blog.slug} {...blog} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs
