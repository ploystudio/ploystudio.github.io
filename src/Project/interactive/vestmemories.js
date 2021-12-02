import React, {Component} from 'react';

export default class VestMemories extends Component {
  componentDidMount(){
    document.title = "The Vest of Memories | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
        <div className="column-left project-column">
            <p><a href="/">Ploy Pruekcharoen</a></p>
            <p>
              Research/Writing
              <ol>
                <li><a href="/#/hmongembroidery">Ethnographic research on Hmong embroidery</a></li>
                <li><a href="/#/colorofnature">Computer as a Medium for Human-Environment Interaction</a></li>
              </ol>
            </p>
            <p>
              Digital Interaction Design
              <ol>
                <li><a href="/#/famapp">Fam App</a></li>
                <li><a href="/#/misinfoescaperoom">Misinformation Escape Room</a></li>
                {/* <li><a href="/#/embroiderme">embrioder.me</a></li> */}
              </ol>
            </p>
            <p>
              Interactive Art
              <ol>
                <li><a href="/#/makeitbloom">Make It Bloom</a></li>
                <li><a href="/#/soundofhearthand">The Sound of Heart and Hand</a></li>
                <li><a href="/#/vestmemories" className="current-page">The Vest of Memories</a></li>
                <li><a href="/#/worldfrommyhands">The World from My Hands</a></li>
              </ol>
            </p>
            {/* <p><a href="/#/playground">Playground</a></p> */}
            {/* <p><a href="https://medium.com/@ploypp" target="_blank" rel="noreferrer">Medium Posts &rarr;</a></p> */}
          </div>
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <br/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/l7tdk8AF210" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="paddingtop30">
                  With the concept of "sentience" and my interest in exploring the human's state of feelings and mind, 
                  I worked on this project with the idea of nostalgia. The pandemic world makes it difficult for people 
                  to communicate and gather, so I created a wearable piece that brings the old memories back to me when 
                  I interact with it.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm1.png" alt="The Vest of Memories Project"/>
                <p className="paddingtop30">
                  I would like to become a part of the project, so my idea is to make myself a ‘canvas’ that illustrates 
                  those memories. I started by sewing the vest and attached an LED at the center of it. I used conductive 
                  threads to connect the LED and the ultrasonic sensor to the breadboard. The way I interact with this vest 
                  is to move my hand near the ultrasonic sensor, which has been placed next to where the heart is supposed 
                  to locate inside the body. If the distance between my hand and the ultrasonic sensor is close enough, the 
                  LED will light up and the video containing my memories will be triggered to play.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm2.png" alt="The Vest of Memories Project"/>
                <img className="paddingtop30" src="img/vestmemo/vm3.png" alt="The Vest of Memories Project"/>
                <p className="paddingtop30">
                  For the coding part, I use Arduino and Python. I received the serial data of distance between my hand 
                  and the ultrasonic sensor from Arduino and used the Pyserial library in Python to read it. I then wrote 
                  the code to control the LED and the video in Python. If the distance is less than 10 cm, the LED and 
                  the video will be on. On the other hand, if the distance is more than 10 cm, the LED will be off and 
                  the video will be paused. This gesture highlights the fact that these memories have been triggered by 
                  heart, and I intend to use this interaction to convey the message.
                </p>
                <img className="paddingtop30" src="img/vestmemo/vm4.png" alt="The Vest of Memories Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>The Vest of Memories<br/>(March 2021)</span>
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