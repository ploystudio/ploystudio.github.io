import React, {Component} from 'react';

export default class MakeItBloom extends Component {
  componentDidMount(){
    document.title = "Make It Bloom | Ploy Pruekcharoen"
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
                <li><a href="/makeitbloom" className="current-page">Make It Bloom</a></li>
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
            <h2>Make It Bloom</h2>
            <p>
              This project was created with a goal to help people reconnect to nature, using machine learning of 
              hand gestures and flower photos to control the handcrafted flower.
            </p>
            <iframe width="100%" height="70%" src="https://www.youtube.com/embed/0-Ngf4_q-EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}