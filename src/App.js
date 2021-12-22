import React, { Component } from 'react';
import './index.css';
import Cursor from './Cursor';
import Navbar from './Component/NavBar';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Cursor />
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <p><b>Ploypilin (Ploy) Pruekcharoen</b> (she/her) is a dedicated artist who is passionate about 
                  the integration of <b>art, technology, nature, and social justice</b>.
                  She is currently pursuing a Bachelor degree in Human Centered Design &amp; Engineering at 
                  the University of Washington. She likes to create meaningful experiences through design and art. 
                  Growing up in a remote area in Thailand, she is also interested in <b>environmental values and cultural diversity</b>. 
                  Her personal background majorly drives herself to work on creative projects and research related to humans and 
                  the environment.
                </p>
                <p><a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">See Ploy's resume &rarr;</a></p>
                <img className="paddingtop30 portrait" src="img/me.gif" alt="My Portrait"/>
                <div>
                  <p className="paddingtop30">check out my <a href="https://open.spotify.com/playlist/1VRyoaF9WgAZnEoUgE2Bgl?si=4f0oB-2kQqWJh4D7_qvZ3Q" target="_blank" rel="noreferrer">spotify playlist</a>
                  <b> / now reading: </b> Beartown <i>by Fredrik Backman</i>, ขอฝันใฝ่ในฝันอันเหลือเชื่อ <i>by ณัฐพล ใจจริง</i></p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}
