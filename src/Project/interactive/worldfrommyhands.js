import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class WorldfromMyHands extends Component {
  componentDidMount(){
    document.title = "The World from My Hands | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>The World from My Hands</h2>
                <br/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/wv0huFyQkLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="paddingtop30">
                  This interactive installation responds to the fictional world where people cannot go outside to see 
                  people, nature, and even the sky. I made a project by having the concept of “making my own world” 
                  in mind. Realizing how COVID-19 and environmental issues around the world affect the way people 
                  interact and live their lives, I think of the place where people can be with their own selves, 
                  enjoying the world created from their hands.
                </p>
                <img className="paddingtop30" src="img/worldfromhand/wh4.png" alt="The World from My Hands Project"/>
                <p className="paddingtop30">
                  The way people can interact with this installation is to move their hand near the ultrasonic sensor 
                  attached to the wall. The distance between the hand and the sensor will trigger the animation of 
                  raindrops and animated circles, which appear separately depending on how close the hand is to the 
                  sensor. The hand movement makes me think of a scene when a magician casts a spell in movies I have 
                  seen, which is always satisfying for me.
                </p>
                <img className="paddingtop30" src="img/worldfromhand/wh2.png" alt="The World from My Hands Project"/>
                <p className="paddingtop30">
                  I created the animations using the Pygame library in Python and use the Pyserial library to read the 
                  serial data received from the ultrasonic sensor in Arduino IDLE.
                </p>
                <img className="paddingtop30" src="img/worldfromhand/wh3.png" alt="The World from My Hands Project"/>
                <img className="paddingtop30" src="img/worldfromhand/wh1.png" alt="The World from My Hands Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                  <span>March 2021</span>
                  <br/><br/>
                  <span>role: interactive artist<br/><br/>tools: Arduino, Python, Physical Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}