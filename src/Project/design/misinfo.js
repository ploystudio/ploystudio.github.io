import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class Misinfo extends Component {
  componentDidMount(){
    document.title = "Misinformation Escape Room | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Misinformation Escape Room</h2>
                <br/>
                <img src="img/misinfo/mer2.png" alt="Misinformation Escape Room Project"/>
                <p className="paddingtop30">
                  The purpose of the Misinformation Escape Room is to teach people about misinformation and disinformation on 
                  social media and digital platforms through an interactive puzzle game. The project is part of 
                  Technology &amp; Social Change Group at the University of Washington Information School.
                </p>
                <img src="img/misinfo/mer1.png" alt="Misinformation Escape Room Project"/>
                <p className="paddingtop30">
                  I was a part of the development team to revise the first design of the game. As a user experience designer, 
                  I focused on the user flow, interface elements, and the gaming experience of the online escape room. I mainly
                  worked on designing and adjusting the game interfaces and interactions based on the research findings from 
                  user testings.
                </p>
                <p className="paddingtop30">
                  After deploying the new design of the game, our research group is working on the process of testing with libraries, 
                  schools, museums, and other educational institutions, with a goal to provide an edicational tool for technological awareness.

                </p>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>JUNE 2021-SEPTEMBER 2021</span>
                <br/><br/>
                <span>
                  role: user experience designer<br/><br/>tools: Figma, Adobe Photoshop
                  <br/><br/>(work with 1 graphic designer and 1 web developer)
                  <br/><br/><a href="https://www.lokisloop.org/" target="_blank" rel="noreferrer"><span>Link to the game website</span></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
