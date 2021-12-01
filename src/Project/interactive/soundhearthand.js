import React, {Component} from 'react';

export default class SoundHeartHand extends Component {
  componentDidMount(){
    document.title = "The Sound of Heart and Hand | Ploy Pruekcharoen"
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
                <li><a href="/#/embroiderme">embrioder.me</a></li>
              </ol>
            </p>
            <p>
              Interactive Art
              <ol>
                <li><a href="/#/makeitbloom">Make It Bloom</a></li>
                <li><a href="/#/soundofhearthand" className="current-page">The Sound of Heart and Hand</a></li>
                <li><a href="/#/vestmemories">The Vest of Memories</a></li>
                <li><a href="/#/worldfrommyhands">The World from My Hands</a></li>
              </ol>
            </p>
            <p><a href="/#/playground">Playground</a></p>
            {/* <p><a href="https://medium.com/@ploypp" target="_blank" rel="noreferrer">Medium Posts &rarr;</a></p> */}
          </div>
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <br/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/vi8gXhpl6ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                  As a person who is always fascinated by performing arts, I have been inspired by the beauty of dance and music. 
                  During my sophomore year, I went to UW Chamber Dance Company Concert and was impressed by the feelings that the 
                  dancers convey, not with words but with body movements. With an intention to explore the connection between the 
                  inner and outer body while performing, I created an interactive object that reads a person’s heart rate and 
                  movement to control sound.
                </p>
                <img className="paddingtop30" src="img/soundhh/shh1.png" alt="The Sound of Heart and Hand Project"/>
                <p>
                  Learning about the artist’s mind and intention is part of knowing the art itself. My motivation for creating this 
                  interactive object is to enhance the sense of feeling using sound as a medium, to sense not only what the artist 
                  performs but also how they feel at the moment. The Sound of Heart and Hand is made in a form of wearable art using 
                  a hand glove. In the process of creating this interactive object, I used a heart rate sensor to detect the heart rate, 
                  an ultrasonic sensor to determine the distance between the artist’s hand and other objects, and a speaker that makes 
                  different sounds based on heart rate and distance data received.
                </p>
                <img className="paddingtop30" src="img/soundhh/shh2.png" alt="The Sound of Heart and Hand Project"/>
                <img className="paddingtop30" src="img/soundhh/shh3.png" alt="The Sound of Heart and Hand Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>The Sound of Heart and Hand<br/>(November 2021)</span>
                <br/><br/>
                <span>role: interactive artist<br/>tools: Arduino, Arduino IDLE, Physical Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}