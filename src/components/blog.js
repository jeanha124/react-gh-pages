import React from 'react'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">Recent Blog</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="blog-entry">
                  <a href="#" className="blog-img">...</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}