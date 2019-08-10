import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'
import styled from 'styled-components'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      _rawHero
    }
    projects: allSanityProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const Hero = styled.div`
    display: flex;
    height: 100vh;
    grid-gap: 10px;
    padding-bottom: 20px;
    position: relative;
    background-color: #D9FFFF;
    font-size: 3.5vh;
    justify-content: center;
    align-items: center;

    @media(min-width: 600px) {
      font-size: 4vh;
    }
  `

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero>
        <BlockText blocks={site._rawHero} />
      </Hero>
      <Container>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/archive/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage