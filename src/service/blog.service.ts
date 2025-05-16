import request, { gql } from 'graphql-request'
import { cache } from 'react'

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

const graphqlAPI = import.meta.env.VITE_APP_HYGRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				title
				createdAt
				author {
					name
					avatar {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getDetailedBlog = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				title
				createdAt
				author {
					name
					avatar {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
	return blog
})
