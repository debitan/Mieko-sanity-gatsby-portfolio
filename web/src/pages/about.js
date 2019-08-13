import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'
import styled from 'styled-components'

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      _rawAbout
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

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
    text-align: center;

    @media(min-width: 600px) {
      font-size: 4vh;
    }
  `

  const LinkedIn = styled.svg`
    display: block;
    margin: auto;
  `

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero>
        <div>
          <BlockText blocks={site._rawAbout} />
          <a href='https://www.linkedin.com/in/mieko-h-36a02b188/'>
            <LinkedIn xmlns='http://www.w3.org/2000/svg' width='8vh' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></LinkedIn>
          </a>
        </div>
      </Hero>
    </Layout>
  )
}

export default AboutPage
