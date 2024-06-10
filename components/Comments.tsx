'use client'
import { useState } from 'react'
import { Comments as CommentsComponent } from 'pliny/comments'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  // Mengatur loadComments menjadi true secara default
  const [loadComments] = useState(true)

  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <>{loadComments && <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />}</>
  )
}
