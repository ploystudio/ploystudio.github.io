import React, { Component } from 'react';
import './index.css';
import Cursor from './Cursor';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Cursor />
        <div className="row">
          <div className="column-left project-column">
            <p><a href="/" className="current-page">Ploy Pruekcharoen</a></p>
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
                <li><a href="/worldfrommyhands">The World from My Hands</a></li>
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
            <p><b>Ploypilin (Ploy) Pruekcharoen</b> (she/her) is a dedicated educator and artist who is passionate about 
              the integration of <b>art, technology, nature, and social justice</b>.
              She is currently pursuing a Bachelor degree in Human Centered Design &amp; Engineering at 
              the University of Washington. She likes to create meaningful experiences through design and art. 
              Growing up in a remote area in Thailand, she is also interested in <b>environmental values and cultural diversity</b>. 
              Her personal background majorly drives herself to work on creative projects and research related to humans and 
              the environment.
            </p>
            <p><a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">See my resume &rarr;</a></p>
            <img src="img/me.gif" alt="My Portrait"/>
            <div>
              <p>check out my <a href="https://open.spotify.com/playlist/1VRyoaF9WgAZnEoUgE2Bgl?si=4f0oB-2kQqWJh4D7_qvZ3Q" target="_blank" rel="noreferrer">spotify playlist</a>
              <b> / now reading: </b> Beartown <i>by Fredrik Backman</i>, ขอฝันใฝ่ในฝันอันเหลือเชื่อ <i>by ณัฐพล ใจจริง</i></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
