import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'
import { marked } from 'marked'
import { formatDate } from '../../utils/formatDate'
import siteConfig from '../../config/site.config.js';

export default function Post({post, postContent, authors}) {
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}posts/${post.slug}`
  
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      
      {/* Post Header */}
      <header>
       
        {/* Image */}
        <div className="w-full bg-gray-100 aspect-w-3 aspect-h-2 sm:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src={post.image} 
            alt={post.title}
            layout="fill"
          />
        </div>

        {/* Post Header Content */}
        <div className="px-5 lg:px-0">
          
          {/* Article Information */}
          <div className="pt-10 pb-8 mx-auto mb-8 text-lg border-b max-w-prose border-gray-300/70 sm:pt-16">
            <Link href={`/categories/${post.category.replace(/ /g, '-').toLowerCase()}`}>
              <a className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">{post.category}</a>
            </Link>
            <h2 className="mt-3.5 text-4xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:mt-5 decoration-red-300 decoration-3 group-hover:underline md:tracking-tight sm:leading-tight sm:text-5xl lg:text-6xl">{post.title}
            </h2>
            <div>
              <p className="mt-4 text-base leading-loose text-gray-600">
                {post.description}
              </p>
            </div>

            {/* Author meta */}
            <div className="flex items-center mt-6 sm:mt-8">
              <Link href={`/authors/${post.author.replace(/ /g, '-').toLowerCase()}`}>
                <a className="flex-shrink-0 mr-3">
                  <div className="relative w-8 h-8 bg-gray-100 rounded-xl sm:w-9 sm:h-9">
                    {authors.map((author) =>
                      post.author === author.frontmatter.name && (
                        <Image
                          key={author.frontmatter.name}
                          className="object-cover object-center rounded-xl" 
                          src={author.frontmatter.image} 
                          alt={author.frontmatter.name}
                          layout="fill"
                        />
                      )
                    )}
                    <span className="absolute inset-0 shadow-inner rounded-xl" aria-hidden="true" />
                  </div>
                </a>
              </Link>
              <div className="text-sm lg:text-[15px] flex items-center">
                <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                <Link href={`/authors/${post.author.replace(/ /g, '-').toLowerCase()}`}>
                  <a className="font-medium text-gray-700 hover:underline">
                    {post.author}
                  </a>
                </Link>
                <CalendarIcon className="w-[18px] h-[18px] ml-4 text-gray-400" />
                <span className="ml-1 text-gray-500">{formatDate(post.date)}</span>
                <span className="items-center hidden sm:flex">
                  <ClockIcon className="w-[18px] h-[18px] ml-3 text-gray-400" />
                  <span className="ml-1 text-gray-500">{post.time_to_read_in_minutes} min read</span>
                </span>
              </div>
            </div>
            
          </div>

        </div>
        
      </header>

      <div className="px-5 lg:px-0">
        
        {/* Post Content */}
        {/* Uses the official Tailwind CSS Typography plugin */}
        <div className="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em]" dangerouslySetInnerHTML={{ __html: marked.parse(postContent) }}>
        </div>

        {/* Post Footer */}
        <footer className="mx-auto mt-12 text-lg divide-y sm:mt-14 max-w-prose divide-y-gray-300/70">
         
          {/* Tags */}
          <ul className="flex flex-wrap justify-start pb-8 -m-1 sm:pb-10">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/tags/${tag.replace(/ /g, '-').toLowerCase()}`}>
                  <a>
                    <span className="inline-flex items-center px-4 py-1 m-1 text-sm font-medium text-gray-800 transition duration-300 ease-in-out bg-transparent border rounded-full sm:px-6 sm:py-2 border-gray-300/70 hover:text-red-700">
                      {tag}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Share Buttons */}
          <div className="py-8 sm:py-10">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">
                Share
              </span>

              
              
            </div>
          </div>

          {/* Author Details */}
          {authors.map((author) =>
            post.author === author.frontmatter.name && (
              <div key={author.frontmatter.name} className="py-8 sm:py-10">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col sm:flex-row">
                  
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 bg-gray-100 rounded-2xl sm:w-24 sm:h-24">
                        <Image 
                          className="object-cover object-center rounded-2xl" 
                          src={author.frontmatter.image} 
                          alt={author.frontmatter.name}
                          layout="fill"
                        />
                        <span className="absolute inset-0 shadow-inner rounded-2xl" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5 text-left sm:mt-0 sm:ml-6">
                      <div className="flex items-center justify-between">
                        <div className="'flex flex-col">
                          <p className="text-xs tracking-widest text-red-600 uppercase">
                            {author.frontmatter.role}
                          </p>
                          <h1 className="mt-1 text-xl font-medium tracking-normal text-gray-900 md:tracking-tight lg:leading-tight">
                            {author.frontmatter.name}
                          </h1>
                        </div>
                      </div>
                      <div className="mt-2.5 text-base leading-loose text-gray-500" dangerouslySetInnerHTML={{ __html: marked.parse(author.bio) }}>
                      </div>
                      
                     
                      
                    </div>

                  </div>
                </div>
              </div>
            )
          )}

        </footer>
        
      </div>
    </article>
  )
}