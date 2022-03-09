import React from 'react'
import Contact from './Contact.js';
import About from './About.js';
import Menu from './Menu.js';

function PageContent() {
  return (
      <>
    <div className="w3-content" style={{ maxWidth: 1100 }}>
        <About></About>
        <Menu></Menu>
        <Contact></Contact>
    </div>
      </>
  )
}

export default PageContent