import React, {Component} from 'react';

export default class Embroiderme extends Component {
  componentDidMount(){
    document.title = "embroider.me | Ploy Pruekcharoen"
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
                <li><a href="/embroiderme" className="current-page">embrioder.me</a></li>
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
            
          </div>
        </div>
      </div>
    );
  }
}