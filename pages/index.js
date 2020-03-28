import React from 'react'
import Typist from 'react-typist'

export default function Index() {
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = 'Good morning'
  if (isNoon) welcome = 'Good afternoon'
  else if (isEvening) welcome = 'Good evening'

  return (
    <>
      <div className="hero">
        <Typist startDelay={1000} cursor={{ element: '▍' }}>
          Hey,
          <Typist.Backspace count={4} delay={500} />
          {welcome},
          <br />
          <Typist.Delay ms={300} />
          <b>
            <br />
            <p>
            As a <span className="nowrap"> full-stack data scientist 👩🏻‍💻 </span>,
            <br />
            I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to literally <span className="nowrap"> change the world 🤲🏼 </span>.
            <br />
            That's why I’m excited to make
            a impact at a  <span className="nowrap">high growth company 👾 </span>.
            </p>
          </b>
          <br />
          <Typist.Delay ms={500} />
          <br />
          <Typist.Delay ms={500} />I{' '}
          <a href="https://twitter.com/sumeyyeozkaynak" target="_blank">
            tweet
          </a>
          , take{' '}
          <a href="https://www.instagram.com/afafet/" target="_blank">
            photos
          </a>
          , push{' '}
          <a href="https://github.com/sumeyyeozkaynak" target="_blank">
            code
          </a>{' '}
          share{' '}
          <a href="https://medium.com/@sumeyyeozkaynak" target="_blank">
            article
          </a>{' '}
           and my corporate {' '}
          <a href="https://www.linkedin.com/in/s%C3%BCmeyye%C3%B6zkaynak/" target="_blank">
            identity
          </a>
          .
        </Typist>
      </div>

      <style jsx>{`
        .hero {
          padding: 2rem;
          font-size: 5vw;
        }
        @media (min-width: 700px) {
          .hero {
            padding: 3rem;
            font-size: 3vw;
          }
        }
      `}</style>
      <style global jsx>{`
        .Cursor {
          display: inline-block;
          margin-left: 5px;
          opacity: 1;
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
