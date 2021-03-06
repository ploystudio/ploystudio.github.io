import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class SoundHeartHand extends Component {
  componentDidMount(){
    document.title = "The Sound of Heart and Hand | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>The Sound of Heart and Hand</h2>
                <br/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/vi8gXhpl6ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="paddingtop30">
                  As a person who is always fascinated by performing arts, I have been inspired by the beauty of dance and music. 
                  During my sophomore year, I went to UW Chamber Dance Company Concert and was impressed by the feelings that the 
                  dancers convey, not with words but with body movements. With an intention to explore the connection between the 
                  inner and outer body while performing, I created an interactive object that reads a person's heart rate and 
                  movement to control sound.
                </p>
                <img className="paddingtop30" src="img/soundhh/shh1.png" alt="The Sound of Heart and Hand Project"/>
                <p className="paddingtop30">
                  Learning about the artist's mind and intention is part of knowing the art itself. My motivation for creating this 
                  interactive object is to enhance the sense of feeling using sound as a medium, to sense not only what the artist 
                  performs but also how they feel at the moment. The Sound of Heart and Hand is made in a form of wearable art using 
                  a hand glove. In the process of creating this interactive object, I used a heart rate sensor to detect the heart rate, 
                  an ultrasonic sensor to determine the distance between the artist's hand and other objects, and a speaker that makes 
                  different sounds based on heart rate and distance data received.
                </p>
                <img className="paddingtop30" src="img/soundhh/shh2.png" alt="The Sound of Heart and Hand Project"/>
                <img className="paddingtop30" src="img/soundhh/shh3.png" alt="The Sound of Heart and Hand Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>November 2021</span>
                <br/><br/>
                <span>role: interactive artist<br/><br/>tools: Arduino, Arduino IDLE, Physical Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}