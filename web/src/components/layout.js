import React from 'react'
import Header from './header'
import styled, {createGlobalStyle} from 'styled-components'
import '../styles/custom-media.css'
import '../styles/custom-properties.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: var(--font-family-sans);
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--color-white);
    color: var(--color-black);
    margin: 0;
  }

  html,
  body,
  body > div,
  body > div > div {
    height: 100%;
  }
`

const Content = styled.div`
  background: var(--color-white);
  min-height: calc(100% - 73px - 120px);

  @media (--media-min-small) {
    min-height: calc(100% - 88px - 150px);
  }
`

const StyledFooter = styled.footer`
  background-color: #D9FFFF;
`

const FooterWrapper = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 4.5em 1.5em 1.5em;
  margin: 0 auto;

  @media (--media-min-small) {
    padding: 6em 2em 2em;
  }
`

const SiteInfo = styled.div`
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <GlobalStyle />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Content>{children}</Content>
    <StyledFooter>
      <FooterWrapper>
        <SiteInfo>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
          {` `}
          by <a href='https://www.github.com/debitan'>David Matthews</a>
          {` `}
          at Noinu Ltd
        </SiteInfo>
      </FooterWrapper>
    </StyledFooter>
  </>
)

export default Layout
