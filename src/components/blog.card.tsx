import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getReadingTime } from '../lib/utils'
import { Badge } from './ui/badge'

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

function BlogCard(blog: IBlog) {
	return (
		<Link to={`/blogs/${blog.slug}`}>
			<div className={'group grid grid-cols-1 gap-4 text-white'}>
				<div className='relative rounded-md bg-secondary'>
					<img
						width={650}
						height={335}
						src={blog.image.url}
						alt={blog.title}
						className='-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7'
					/>
				</div>

				<div className='flex flex-col space-y-4'>
					{/* Time info */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='size-5' />
							<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='size-5' />
							<p>{getReadingTime(blog.content.html)} min read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='font-montserrat text-3xl transition-colors group-hover:text-blue-500 max-md:text-2xl'>
						{blog.title}
					</h2>
					<p className='line-clamp-3 text-muted-foreground'>
						{blog.description}
					</p>

					{/* Author */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<img
								src={blog.author.avatar.url}
								alt='author'
								width={30}
								height={30}
								className='rounded-sm object-cover'
							/>
							<p>by {blog.author.name}</p>
						</div>
						<Dot />
						<div className='flex items-center gap-2 text-white flex-wrap'>
							<Badge variant={'secondary'} role='button'>
								<Tag className='me-2 size-3' />
								{blog.tag.name}
							</Badge>
							<Badge variant={'outline'} role='button' className='text-white'>
								<Layers2 className='me-2 size-3' />
								{blog.category.name}
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default BlogCard
