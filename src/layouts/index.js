import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Yogesh Kotadiya"
      meta={[
        { charset: 'utf-8'},
        { name: 'description', content: 'Personal Webpage of Yogesh Kotadiya' },
        { name: 'author', content: 'Yogesh Kotadiya' },
        { name: 'theme-color', content: '#821cdb'},
        { name: 'twitter:card', content: 'summary'},
        { name: 'twitter:site', content: '@yogeshkotadiya'},
        { name: 'twitter:creator', content: '@yogeshkotadiya'},
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
