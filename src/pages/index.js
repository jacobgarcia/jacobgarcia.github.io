import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const Home = () => {
  const siteTitle = 'Jacob Garcia'
  const siteDescription = 'Jacob Garcia personal website and portfolio'
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Avant-garde mixer of art, science and technology</h2>
            <h3>Software Engineer & Full Stack Developer</h3>
          </header>
          <p>
            I've been working years now solely on web development with different
            clients, projects, companies and users. I have experience across all
            the stack, having worked with both frontend and backend
            technologies, including infrastructure and architecture. I excel in
            designing and building out backend infrastructure. I have years of
            experience using JS, mostly Node and React. I also have experience
            using Python and Go.
            <br /> <br />
            Additionally to Web Development, I'm passionate about building video
            games and I have experience using Unity and Unreal Engine. I have
            future plans to start a career path on the video game industry.
            <br /> <br />
            When I'm not coding I love spending time in the outdoors, and
            chilling with my wife and newborn.
            <br /> <br />
            Regarding the technologies I often use, please refer to this list:
            MongoDB, Express, React, Node, AWS, RESTful APIs, PostgreSQL,
            Socket.io, Python, Flask, Django, Go, Docker, TensorFlow, Unity,
            Unreal Engine.
            <br /> <br />
            Currently I'm working on my personal projects and my own company.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Home
