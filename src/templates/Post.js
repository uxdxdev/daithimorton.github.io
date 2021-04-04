import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Bio from '../components/Bio'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { keywords as commonKeywords } from '../utils/constants'
import ExternalLink from '../components/ExternalLink'
import Footer from '../components/Footer'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import Header from '../components/Header'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const { previous, next } = this.props.pageContext
    const { frontmatter } = post
    const { banner } = frontmatter

    // banner image for social media sharing
    const bannerSrc = banner && banner.childImageSharp.fluid.src
    const imageSrc = siteUrl + bannerSrc
    const keywords = commonKeywords.concat(frontmatter.keywords?.split(`,`))

    const shareUrl = `${siteUrl}/blog${post.fields.slug}`
    const postTitle = `I've published a new article! "${frontmatter.title}" read it here`

    const sharingIconSize = 48

    return (
      <>
        <Header />

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: rhythm(1 / 2)
          }}
        >

          <SEO
            title={frontmatter.title}
            description={post.excerpt}
            keywords={keywords}
            image={imageSrc}
          />
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <h1>{frontmatter.title}</h1>
            <p
              style={{
                // ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1 / 2),
              }}
            >
              ☕ {post.fields.readingTime.text}
            </p>
          </div>

          {banner && (
            <div>
              <Image
                fluid={banner.childImageSharp.fluid}
                alt={frontmatter.imageAltText}
              />
              <ExternalLink href={frontmatter.bannerLink}>
                {frontmatter.bannerCredit}
              </ExternalLink>
            </div>
          )}

          <br />

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <h2>Share this post</h2>
          <div>
            <LinkedinShareButton url={shareUrl} title={postTitle}>
              <LinkedinIcon size={sharingIconSize} round />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl} title={postTitle}>
              <TwitterIcon size={sharingIconSize} round />
            </TwitterShareButton>
            <EmailShareButton url={shareUrl} subject={postTitle}>
              <EmailIcon size={sharingIconSize} round />
            </EmailShareButton>
            <RedditShareButton url={shareUrl} title={postTitle}>
              <RedditIcon size={sharingIconSize} round />
            </RedditShareButton>
            <FacebookShareButton url={shareUrl} quote={postTitle}>
              <FacebookIcon size={sharingIconSize} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={postTitle}
              windowWidth={660}
              windowHeight={460}
            >
              <WhatsappIcon size={sharingIconSize} round />
            </WhatsappShareButton>
          </div>
          <hr
            style={{
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
            }}
          />
          <Bio />
        </div>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        bannerCredit
        bannerLink
        imageAltText
        keywords
        banner {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
