import React from 'react'

export default class Photography extends React.Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="photography">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Photography</span>
                <h2 className="colorlib-heading animate-box">Recent Photos</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://www.flickr.com/photos/jeanha124/">Photos</a></h3>
                    <span>Website</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight" style={{backgroundImage: 'url(images/carolnchris.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
              <div className="project"></div>
            </div>
            <div className="col-md-2 animate-box" data-animate-effect="fadeInRight" style={{backgroundImage: 'url(images/chloe.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
              <div className="project"></div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight" style={{backgroundImage: 'url(images/teresa.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
              <div className="project"></div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
              <div className="desc">
                <div className="con">
                  <h3><a href="#">...</a></h3>
                  <span>...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}