import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'
import styled from 'styled-components'
import linkedIn from '../images/linkedIn.svg'

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

    @media(min-width: 600px) {
      font-size: 4vh;
    }
  `

  const LinkedIn = styled.img`
    height: 6vh;
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
            <LinkedIn src={linkedIn} alt='LinkedIn logo' />
          </a>
        </div>
      </Hero>
    </Layout>
  )
}

export default AboutPage
