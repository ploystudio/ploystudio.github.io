import React, {Component} from 'react';

export default class WorldfromMyHands extends Component {
  componentDidMount(){
    document.title = "The World from My Hands | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
        <div className="column-left project-column">
            <p><a href="/">Ploy Pruekcharoen</a></p>
            <p>
              Digital Interaction Design
              <ol>
                <li><a href="/embroiderme">embrioder.me</a></li>
                <li><a href="/misinfoescaperoom">Misinformation Escape Room</a></li>
              </ol>
            </p>
            <p>
              Interactive Art
              <ol>
                <li><a href="/makeitbloom">Make It Bloom</a></li>
                <li><a href="/soundofhearthand">The Sound of Heart and Hand</a></li>
                <li><a href="/vestmemories">The Vest of Memories</a></li>
                <li><a href="/worldfrommyhands" className="current-page">The World from My Hands</a></li>
              </ol>
            </p>
            <p>
              Research/Writing
              <ol>
                <li><a href="/hmongembroidery">Learn the Heart of Hmong Culture through Hmong Embroidery</a></li>
                <li><a href="/colorofnature">Computer as a Medium for Human-Environment Interaction</a></li>
              </ol>
            </p>
            <p><a href="/playground">Playground</a></p>
            <p><a href="https://medium.com/@ploypp" target="_blank">Medium Posts &rarr;</a></p>
          </div>
          <div className="column-right">
            <h2>The World from My Hands</h2>
            <p>
              This interactive installation responds to the fictional world where people cannot go outside to see 
              people, nature, and even the sky. I made a project by having the concept of “making my own world” 
              in mind. Realizing how COVID-19 and environmental issues around the world affect the way people 
              interact and live their lives, I think of the place where people can be with their own selves, 
              enjoying the world created from their hands.
            </p>
            <iframe width="100%" height="70%" src="https://www.youtube.com/embed/wv0huFyQkLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
              The way people can interact with this installation is to move their hand near the ultrasonic sensor 
              attached to the wall. The distance between the hand and the sensor will trigger the animation of 
              raindrops and animated circles, which appear separately depending on how close the hand is to the 
              sensor. The hand movement makes me think of a scene when a magician casting a spell in movies I have 
              seen, which is always satisfying for me.
            </p>
            <p>
              I created the animations using the Pygame library in Python and use the Pyserial library to read the 
              serial data received from the ultrasonic sensor in Arduino IDLE.
            </p>
          </div>
        </div>
      </div>
    );
  }
}