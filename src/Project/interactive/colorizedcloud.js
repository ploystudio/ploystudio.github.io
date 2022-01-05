import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class ColorizedCloud extends Component {
  componentDidMount(){
    document.title = "Colorized Cloud | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Colorized Cloud</h2>
                <br/>
                <img className="paddingtop30" src="img/colorizedcloud/color-change.gif" alt="Colorized Cloud Project"/>
                <p className="paddingtop30">
                  Colorized Cloud is an interactive object that generates a set of colors by listening to the spoken word(s) from a 
                  person who talks to it. People use words to communicate. While we only hear words in the form of sound and see them 
                  in the form of text, the feelings toward one specific word vary from person to person. Based on research in psychology, 
                  there is a study that colors can affect emotions. Therefore, I use color as a medium in this art piece to allow the 
                  audience to experience people's feelings toward a word or a set of words.
                </p>
                <img className="paddingtop30" src="img/colorizedcloud/processing.gif" alt="Colorized Cloud Project"/>
                <p className="paddingtop30">
                  To listen to what the audience says, I use the speech-to-text library in Python to get a word or phrase. After that, 
                  I use Google Images API to find images for the selected word(s) and get dominant colors out of a set of images. Then, 
                  I uploaded the code to an Arduino that has an RGB Neopixel strip connected to it. When the audience speaks with the 
                  program on my computer, the program will create a set of colors from words and light up the RGB Neopixel strip.
                </p>
                <img className="paddingtop30" src="img/colorizedcloud/setting.jpg" alt="Colorized Cloud Project"/>
                {/* <img className="paddingtop30" src="img/colorizedcloud/cloud.jpg" alt="Colorized Cloud Project"/> */}
                <img className="paddingtop30" src="img/colorizedcloud/talking.jpg" alt="Colorized Cloud Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>December 2021</span>
                <br/><br/>
                <span>role: interactive artist<br/><br/>tools: Arduino, Python, Google Images API, Speech-To-Text Python Library, Physical Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}