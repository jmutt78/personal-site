import React from "react"

const About = () => (
  <div>
    <section className="section is-small is-primary has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              Hi, I'm Justin.
            </h1>
            <h2 className="subtitle is-size-5-desktop">
              Entrepreneurship is my passion, and I work to help and connect
              entrepreneurs. I believe that I was put on this planet for a
              singular purpose: to help current and aspiring entrepreneurs. I
              believe our country would be better if we had more people starting
              and operating businesses. When you are an entrepreneur, you can
              experiment and take risks that most people only dream about. If
              more people were running small businesses, we could take back
              control. Control of our government, control over socioeconomic
              issues, control of our privacy, and control of our lives.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <h1 className="title is-size-4 is-spaced">Full-Stack Developer</h1>
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <p>
                  I love to create things, and enjoy bringing ideas to life.
                </p>

                <p className="list-title has-text-primary has-text-weight-normal">
                  Languages and Libraries:
                </p>
                <ul>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>Appollo</li>
                  <li>Prisma</li>
                </ul>
              </div>
              <div className="column">
                <p>
                  I genuinely care about people, and love helping fellow
                  entrepreneurs.
                </p>

                <p className="list-title has-text-primary has-text-weight-normal">
                  Experience:
                </p>
                <ul>
                  <li>3 years developer</li>
                  <li>13 years in entrepreneurship</li>
                  <li>+20 projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
