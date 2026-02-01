import React from 'react'

import { Helmet } from 'react-helmet'

import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Hana's Tea</title>
        <meta property="og:title" content="Gallery - Hana's Tea" />
        <link
          rel="canonical"
          href="https://grizzled-hollow-gerbil-7vkqes.teleporthq.app/gallery"
        />
      </Helmet>
      <span className="gallery-thq-section-title-elm section-title">
        Gallery
      </span>
    </div>
  )
}

export default Gallery
