import React from 'react'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/jean1.jpg)'}}/>
              <h1 id="colorlib-logo"><a href="index.html">Jean Woo Ha</a></h1>
              <span className="email"><i className="icon-mail"></i>jeanwoo.ha@rutgers.edu</span>
            </div>
            <nav id="colorlib-main-menu" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#photography" data-nav-section="photography">Photography</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://linkedin.com/in/jean-woo-ha" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jeanha124" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}