import React from 'react'

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="desc">
                  <div className="con">
                    <h3><a href="#">Full Stack 1</a></h3>
                    <span>Website</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
              <div className="project">
                <div className="desc">
                  <div className="con">
                    <h3><a href="#">Game 1</a></h3>
                    <span>Game</span>
                  </div>
                </div>
              </div>
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