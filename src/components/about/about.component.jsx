import PFP from '../../assets/headshot.jpg'

const About = () => {
  return (
    <div className="container mt-5" id='about'>
      <h1 className="text-white">About Me</h1>
      <div className='d-flex flex-column-reverse flex-lg-row border border-3 rounded-2'>
        <p className='text-white text-start mt-3 mx-2'>
          Growing up, I don't think I ever knew what I wanted to do. Life carried on and that's when a pandemic hit in 2020 that made seemingly everyone do a bit of self-discovery.
          In October of 2020, after a few months of working from home and a supportive push from my partner, I decided to embark on a journey that would forever change my life and
          took the CS50 course offered through Harvard. That experience laid the foundation for everything else moving forward.Fast forward about a year and 6 months and I've earned my certificate in Full-Stack Web Development from the University of Miami Coding Boot Camp where I learned a plethora of
          skills and technologies including JavaScript, React.js, Node.js, and responsive web-design. With my background in psychology, I hope to create applications with UI that is not
          only pleasant to the eyes, but an absolute ease to use overall.
        </p>
        <img style={{ width: '250px' }} src={PFP} className='img-fluid mx-auto my-2' alt='Julio Suarez' />
      </div>
    </div>
  )
}

export default About;