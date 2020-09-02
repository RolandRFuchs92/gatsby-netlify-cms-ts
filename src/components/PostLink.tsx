import React from "react"
import { Link } from "gatsby"

type PostLinkProps = {
  post: any
}

const PostLink = ({ post }: PostLinkProps) => (
  <div>
    <Link to={"/" + post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
