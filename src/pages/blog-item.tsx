import { useEffect, useState } from 'react'
import { getDetailedBlog } from '../service/blog.service'
import { CalendarDays, Minus } from 'lucide-react'
import { format } from 'date-fns'
import ShareBtns from '../components/share-btns'
import { Separator } from '../components/ui/separator'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'

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

function BlogItem() {
	const [blog, setBlog] = useState<IBlog>()

	const { params } = useParams()

	useEffect(() => {
		async function fetchBlogs() {
			const data = await getDetailedBlog(params!)
			setBlog(data)
		}
		fetchBlogs()
	}, [])

	return (
		<div className='container mx-auto max-w-5xl pt-[15vh]'>
			<h1 className='font-space-grotesk text-4xl font-bold md:text-5xl lg:text-6xl'>
				{blog?.title}
			</h1>

			<div className='mt-4 flex flex-wrap items-center gap-4 max-md:justify-center'>
				<div className='flex items-center gap-2'>
					<img
						src={blog?.author.avatar.url}
						alt='author'
						width={30}
						height={30}
						className='rounded-sm object-cover'
					/>
					<p>by {blog?.author.name}</p>
				</div>

				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='size-5' />
					<p>{format(new Date(blog?.createdAt!), 'MMM dd, yyyy')}</p>
				</div>
			</div>

			<img
				src={blog?.image.url}
				alt='alt'
				width={`1120`}
				height={`595`}
				className='mt-4 rounded-md'
			/>

			<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<ShareBtns />
					</div>
				</div>
				<div className='prose max-w-none flex-1 dark:prose-invert'>
					{blog?.description}
					<Separator className='mt-4' />
					{parse(blog?.content.html!)}
				</div>
			</div>

			<Separator className='my-3' />

			<div className='mt-6 flex items-center gap-6 max-md:flex-col'>
				<img
					src={blog?.author.avatar.url}
					alt='author'
					width='155'
					height='155'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex flex-1 flex-col space-y-4'>
					<h2 className='font-space-grotesk text-3xl font-bold'>
						{blog?.author.name}
					</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog?.author.bio}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BlogItem
