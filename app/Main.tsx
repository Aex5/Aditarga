import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-16 flex flex-col items-center justify-between py-10 sm:flex-row sm:items-start">
          <div className="mb-4 sm:mb-0">
            <Image src={'/static/images/me.png'} width={300} height={300} alt="me" />
          </div>
          <div>
            <article className="max-w-[600px] text-justify text-lg leading-7 text-gray-500 dark:text-gray-400">
              Hey there! Looks like you’re interested in my story. If you prefer just my career
              journey, feel free to check out my CV. <br />
              <br />
              I'm Aditya Argadinata, but you can call me Adit, Arga, or Adi. I'm a Software
              Engineer, In this story, you'll get to know my personal journey. I don’t expect
              anything from you after reading it—how you judge me is entirely up to you. But hey,
              it's just a story, and I believe people evolve over time. <br />
              <br />
              <pre className="whitespace-normal border-l-4 border-gray-600 pl-2 text-sm">
                Just to be clear, I'm sharing this journey on my own accord. No organizations were
                involved, and no danger was present during its writing.
              </pre>
            </article>
          </div>
        </div>

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Article
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Hey there! Welcome! Here, you can dive into a bunch of cool articles, from everyday tips
            and in-depth programming discussions to practical guides and the latest tech trends.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read This&rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All Posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
