import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class MakeItBloom extends Component {
  componentDidMount(){
    document.title = "Make It Bloom | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Make It Bloom</h2>
                <br/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/0-Ngf4_q-EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="paddingtop30">
                  This project was created with a goal to help people reconnect to nature, using machine learning of 
                  hand gestures and flower photos to control the handcrafted flower.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib1.png" alt="Make It Bloom Project"/>
                <p className="paddingtop30">
                  One day during the pandemic, I realized that it had been so long since last time I walked under trees and appreciated 
                  the natural surroundings. Although I understand the objectives of having COVID guidelines, I could not refuse that social 
                  distancing and face coverings limited the chance to fully 'feel' nature. While we still have to protect ourselves and the 
                  community, it would be nice if there is something that could remind us about the feeling of nature.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib4.png" alt="Make It Bloom Project"/>
                <p className="paddingtop30">
                  I used Microsoft Lobe to train the machine learning model of bud and blooming flowers as well as the hand gestures. 
                  Then I ran the Python code on Adafruit Braincraft and used it as an interface for interaction. 
                  A camera that is connected to the Adafruit BrainCraft will capture the interaction and trigger a servo motor to 
                  change the state of handcrafted flower, either bud or blooming.
                </p>
                <img className="paddingtop30" src="img/makeitbloom/mib2.png" alt="Make It Bloom Project"/>
                <img className="paddingtop30" src="img/makeitbloom/mib3.png" alt="Make It Bloom Project"/>
                <img className="paddingtop30" src="img/makeitbloom/mib5.png" alt="Make It Bloom Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>June 2021</span>
                <br/><br/>
                <span>role: interactive artist<br/><br/>tools: Adafruit BrainCraft, Python, Lobe, Physical Computing, Digital Fabrication, Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}