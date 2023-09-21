import CrwnClothing from './images/crwn-clothing.gif';
import HomeBrew from './images/homebrew.gif';
import NoteTaker from './images/note_taker.gif';
import WeatherDash from './images/weather-dashboard.gif';
import ReadItReady from './images/readITready.png'

export const projects = [
  {
    id: '1',
    title: 'CrwnClothing',
    tech: 'ReactJs, Firebase, SCSS, Redux',
    description: "I built this page to practice the React skills I picked up. In its current state, you can go through the store, add/remove items from your cart and view your total. I worked on everything on this project from the front end design (with the help of premade CSS files), to the backend/database design",
    image: CrwnClothing,
    link: 'https://crwn-clothingjs.netlify.app/',
    github: 'https://github.com/justjulio95/crwn-clothing'
  },
  {
    id: '2',
    title: 'Homebrew',
    tech: 'Node.js, ReactJs, Apollo, JavaScript, CSS, GraphQL, MongoDB',
    description: "Homebrew is an all in one Dungeons and Dragons application where users can create an account, create and save their own character builds, see and comment on other users’ characters, and receive feedback on their own builds! As an avid fan of the game myself, this is a project I hope that I can expand upon and one day even deploy for other fans. I contributed to primarily the backend design of this project, being left in charge of ensuring the database relationships were set up properly as well as ensuring that the paths to user accounts, user characters, comments, etc. were reaching the appropriate destination.",
    image: HomeBrew,
    link: '',
    github:'https://github.com/elfsvet/homebrew'
  },
  {
    id: '3',
    title: 'Note-Taker',
    tech: 'JavaScript, Express.js, JSON',
    description: 'This is a basic note taking application that allows for an individual to... well, take notes!',
    image: NoteTaker,
    link: '',
    github:'https://github.com/justjulio95/note-taker/tree/main'
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    tech: 'JavaScript, jQuery, HTML, CSS',
    description: "This application was designed with the intention of giving the user the opportunity to plan ahead for whatever Mother Nature may want to throw at them. Looking up a city will give the user the forecasted weather for the current day as well as the predicted weather for the following 5 days. All this includes the current temperature, the wind speeds, humidity, and the UV-Index reading for that day. Given what I've learned since I built this, I plan to remake this application some time to see what I can do differently and improve upon.",
    image: WeatherDash,
    link: 'https://justjulio95.github.io/weather-dashboard/',
    github:'https://github.com/justjulio95/weather-dashboard/tree/main'
  },
  {
    id: '5',
    title: 'Read-IT-Ready',
    tech: 'JavaScript, Express.js, Handlebars.js, Bootstrap, SQL',
    description: "Read-IT-Ready is a forum site where programmers of any skill level can post questions, answer other people's questions, or just show off what they've been doing. In order to make a post or comment, users will need to sign up for a free account, after which they will be able to post as much as they'd like!",
    image: ReadItReady,
    link: '',
    github:'https://github.com/justjulio95/read-IT-ready'
  },
]