import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>When I was younger, I grew an interest in building things in great detail, tinkering around with many hobbies
										and crafts, like paper and model kits. The enjoyment and satisfaction from creating something out of nothing
										led to my passion and love for tech, as soon as we got our first computer at home. Before the computer, I had
										been introduced to gaming and technology with the Super Nintendo, but the computer was different. It wasn't
										just passive entertainment, but an amazing tool. I was able to surf the web and gain information freely. I could
										type words quickly on a keyboard instead of handwriting them. There were just so many possibilities. As tech improved
										as I got older, my hobbies followed. Now, as a full-stack developer, I enjoy using the tools I learned to create responsive
										applications to make it easier for the user. It makes me happy to be able to make a difference in something I made.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills:</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building websites using JavaScript, React, HTML, CSS</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Coming from a IT/CS background, I have a decent grasp over the fundamental concepts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-cog" />
                  </span>
                  <div className="desc">
                    <h3>Skillset</h3>
                    <p>
                      <ul style={{listStyleType: 'none'}}>
                        <li style={{background: 'url(images/html5.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>html5</li>
                        <li style={{background: 'url(images/css-3.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>css3</li>
                        <li style={{background: 'url(images/git.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>git</li>
                        <li style={{background: 'url(images/react.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>react/redux</li>
                        <li style={{background: 'url(images/ruby.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>ruby/rails</li>
                        <li style={{background: 'url(images/sql-server.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>sql</li>
                        <li style={{background: 'url(images/visual-studio.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>vs code</li>
                        <li style={{background: 'url(images/python.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>python</li>
                        <li style={{background: 'url(images/java.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>java</li>
                        <li style={{background: 'url(images/office.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>Microsoft Office</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
      </div>
    )
  }
}