import React, {Component} from 'react';

export default class ColorofNature extends Component {
  componentDidMount(){
    document.title = "Computer as a Medium for Human-Environment Interaction | Ploy Pruekcharoen"
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
                <li><a href="/#/colorofnature" className="current-page">Computer as a Medium for Human-Environment Interaction</a></li>
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
                <li><a href="/#/soundofhearthand">The Sound of Heart and Hand</a></li>
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
                <img src="img/colornature/con1.png" alt="Color of Nature Project"/>
                <p>
                  Inspired by the tangible computing and posthumanism concepts, I had proposed a concept of interactive art that enhances 
                  interactions between human, computer, and environment with a written justification.
                </p>
                <img className="paddingtop30" src="img/colornature/con2.png" alt="Color of Nature Project"/>
                <img className="paddingtop30" src="img/colornature/con3.png" alt="Color of Nature Project"/>
                <img className="paddingtop30" src="img/colornature/con4.png" alt="Color of Nature Project"/>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>Computer as a Medium for Human-Environment Interaction<br/>(June 2021)</span>
                <br/><br/>
                <span>topics: human-computer interaction, interactive art<br/>tools: Arduino, Python, Physical Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}