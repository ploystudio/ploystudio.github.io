import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class ColorofNature extends Component {
  componentDidMount(){
    document.title = "Computer as a Medium for Human-Environment Interaction | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Computer as a Medium for Human-Environment Interaction</h2>
                <br/>
                <img src="img/colornature/con1.png" alt="Color of Nature Project"/>
                <p className="paddingtop30">
                  The world has come to the point when technology becomes a part of our lives and exists everywhere. While the 
                  concepts of HCI mainly focus on humans and computers, having a focal point toward specific stakeholders may 
                  result in the exclusion of others. To shift the focus away from “humans” and “computers” toward things around us, 
                  I had proposed a concept of interactive art that enhances interactions between humans, computers, and the 
                  environment with a written justification.
                </p>
                <img className="paddingtop30" src="img/colornature/con2.png" alt="Color of Nature Project"/>
                <p className="paddingtop30">
                In the writing, I addressed the background, inspirations, resources, and methods used in the production of the 
                “Color of Nature” tangible interactive art referenced from various research papers. The idea of this 
                art was inspired by the differences in natural colors and synthetic colors. I created the Color of Nature with a goal 
                to raise people's awareness of the more-than-human world and provide a feeling of getting in touch with nature.
                </p>
                <img className="paddingtop30" src="img/colornature/con3.png" alt="Color of Nature Project"/>
                <p className="paddingtop30">
                  To encourage people's interaction with the environment, I came up with the idea of using a hand glove to make 
                  wearable art that can transform data into the digital environment and enhance the ability to touch and grasp natural 
                  objects. The tools and meterial included a hand glove, a color sensor (Adafruit TCS34725 RGB light sensor), and the 
                  Arduino UNO with a port to connect with a computer.
                </p>
                <img className="paddingtop30" src="img/colornature/con4.png" alt="Color of Nature Project"/>
                <p className="paddingtop30">
                  I wrote a Python program using Python's Graphics Library to display the color that is received from the color sensor in 
                  real time, with a color palette in the right to record colors that have been detected. The final step is to go outside, 
                  feel the surrounding, and explore this tangible interactive art with natural objects.
                </p>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>June 2021</span>
                <br/><br/>
                <span>topics: human-computer interaction, interactive art<br/><br/>tools: Arduino, Python, Physical Computing</span>
                <br/><br/>
                <a href="https://medium.com/@ploypp/computer-as-a-medium-for-human-environment-interaction-the-color-of-nature-tangible-interactive-16865e213ad1" target="_blank" rel="noreferrer"><span>Link to the Medium post</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}