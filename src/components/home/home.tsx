import { forceDark, toggleDarkMode } from './home.ts';
import { expandMenu } from './home.ts';
import { scrollToTop } from './home.ts';

import './home.css'
import { Link } from 'react-router-dom';

export default function Home () {
  return (
    <div>
      <noscript><p className="no-js"> Please enable JavaScript for the best experience. </p></noscript>

      <table className="button-container">
        <tr><td><div id="darkmode" className="button" onClick={() => toggleDarkMode()}>{'\u263E'}</div></td></tr>
          <tr><td><div id="stt" className="button" onClick={() => scrollToTop()}>&uarr;</div></td></tr>
      </table>              

      <table className="button-container left">
        <tr><td><div id="menu" className="button" onClick={() => expandMenu()}>&equiv;</div></td></tr>

        <nav className='react-router-nav'>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li><Link to="/toolbox">Toolbox</Link></li> */}
                  <li>
                    <Link to="/gallery" onClick={() => forceDark()}>Gallery</Link> 
                  </li>
                </ul>
              </nav>
      </table>

      <div id="header">
        <div className="mark"><h1>Hello!</h1></div>
        <nav className="header-nav">
            <a href="#about">About Me</a>
            <a href="#skills">My Skills</a>
            <a href="#projects">My Projects</a>
          </nav>
        </div>

        <div id="content">
          <p>Welcome to my website! My name is Ally <span className="prns">(they/them)</span>, and I am a quality assurance specialist and hobbyist software developer. I love all things full-stack, especially front-end development. I'm passionate about learning new things, coding and otherwise. I love being challenged and improving my skills, so I'm always looking for new opportunities to work on various projects.</p>

          <p>Thank you so much for checking out my website. I'm excited to share my work with you!</p>

          <span className="highlight-container">
            <span className="highlight">
              <h2 id="about">About Me</h2>
            </span>
          </span>
          <h3>Education and Work</h3>
          <p>I have a Bachelor's in Computer Science from Stockton University (Fall 2018 – Fall 2022). I started with HTML and CSS in middle school and fell in love with them instantly. Since then, I have created and published various website designs, both from scratch (like this one!) and using frameworks, like <a href="https://www.w3schools.com/whatis/whatis_bootstrap.asp/">Bootstrap</a>.</p>

          <p>I eventually picked up Java and Python during college and have built various kinds of projects using them, ranging from fun object-oriented card games, to machine learning, to scalable <a href="https://www.ibm.com/think/topics/three-tier-architecture">three-tier solutions</a>. I spent much of my free time exploring these languages in particular.</p>

          <p>After college, I began work in software quality assurance at Power Home Remodeling, where I have found various ways to utilize coding as an invaluable tool. I am on two software development teams for the Corporate Finance sector of the company, where we work with stakeholders in Accounting and Payroll, automating many of their hand-done workflows, making them easier and more efficient. Some of my favorite parts of the role include finding solutions to new problems with code and queries, finding ways to maximize reusability, and discovering new ways to introduce quality into our code.</p>

          <p>My testing incorporates several different methods, ranging from simple manual testing to automated testing. I frequently engineer and utilize MySQL queries to create test data and observe changes. Occasionally I use Ruby scripts to expedite the process of testing certain data-heavy stories, especially when comparing data from different sources or complex queries. I have created and contributed to, alongside other QAs on our teams, a repository of Playwright scripts specific to Corporate Finance that automate many parts of our end-to-end testing.</p>

          <p>For some examples of personal and school-related projects I've worked on, see <a href="#projects">my projects</a>!</p>

          <h3>Personal Life</h3>
          <p>In my free time, I like to write, play video games, scrapbook, and learn other languages (especially Japanese, French, and Russian!). I also have a cat named Triangle, also known as さんかく ("sankaku"). <span className="skk">=^.^=</span></p>

          <p>You can see some of the art I have made by visiting the Gallery via the hamburger menu on the bottom left of the page.</p>

          <span className="highlight-container">
            <span className="highlight">
              <h2 id="skills">My Skills</h2>
            </span>
          </span>
          <p>Here are some of the key skills I have learned and used throughout my career:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript/Typescript</li>
            <li>React</li>
            <li>Angular 2+</li>
            <li>Java</li>
            <li>Python</li>
            <li>Ruby, Ruby on Rails, and RSpec</li>
            <li>MySQL</li>
            <li>Oracle SQL</li>
            <li>Playwright</li>
          </ul>
          <p>... and many more to come!</p>

          <span className="highlight-container">
            <span className="highlight">
              <h2 id="projects">My Projects</h2>
            </span>
          </span>
          <h3>Intelligent YouTube spam detector</h3>
          <p className="project-blurb">Using: Python (<a href="https://scikit-learn.org/stable/index.html">sk-learn</a>)</p>
          <p>This project utilizes the sci-learn library to detect spam in YouTube comments. The training data consists of a pre-determined list of comments, and a boolean of whether or not they are spam. Using this model, the program can be fed other comments to determine the likelihood, in percentage, that they are spam or not spam.</p>

          <h3>Incident report form system</h3>
          <p className="project-blurb">Using: Python (<a href="https://palletsprojects.com/projects/flask/">Flask framework</a>), MySQL, HTML and CSS</p>
          <p>This project is a three-tier solution for a company that needed a system to create, update, and store incident report forms for their Human Resources department. It was the final project of my end-of-curriculum Software Engineering class in college.</p>

          <p>Our solution was designed around the real needs of the stakeholder. I served as the lead web developer for this project: I implemented a basic mock designed by another team member, based on the client's needs, and added much of my own custom styling to elevate user experience - including implementing a mobile-forward design using media queries.</p>

          <h3>Gacha card game</h3>
          <p className="project-blurb">Using: Java</p>
          <p>This project emulates a real, popular "gacha" mobile game (click <a href="https://en.wikipedia.org/wiki/Gacha_game">here</a> and <a href="https://www.howtogeek.com/465429/what-exactly-is-a-gacha-video-game/">here</a> to learn more about these!): a user can "pull" from a pool of cards randomly, where each card has a specific likelihood of being pulled. Data from this emulator was compared against real data I obtained from the game to find potential discrepancies in the <i>claimed</i> likelihood of pulling certain cards, versus the <i>real</i> likelihood.</p>

          <h3>Angular website</h3>
          <p className="project-blurb">Using: Angular 2+</p>
          <p>This project showcases a basic website for a fictional restaurant, including location, menu items, and more. It is written with entirely custom CSS and HTML powered by the Angular framework.</p>
        </div>

        <div id="footer">
          <div id="footer-container">
            <p>Thank you again for visiting my website! Please feel free to reach out to me via <a id="liame" href="mailto:">email</a> or <a href="www.linkedin.com/in/ally-f-360b2b175">LinkedIn</a>!</p>
            <p>You can view the repository for this website <a href="https://github.com/ally-f/ally-f.github.io">here</a>.</p>
            <p>Made with &#9825; using React with Vite and TypeScript.<br />v2.0.0</p>
          </div>
        </div>
    </div>
  );
};