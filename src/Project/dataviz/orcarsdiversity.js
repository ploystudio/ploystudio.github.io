import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class Oscars extends Component {
  componentDidMount(){
    document.title = "History of Racial Diversity in Academy Award Winners and Nominees | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>History of Racial Diversity in Academy Award Winners and Nominees</h2>
                {/* <br/> */}
                <p className="paddingtop30">
                  While the Oscars are known as the most prestigious awards in the entertainment industry worldwide, the number 
                  of nominated minorities and foreign nominees has long been very low. According to that, my teammates and I were 
                  interested in exploring the history of the Oscar nominations, focusing on underrepresented minorities and foreign 
                  nominees over time.
                </p>
                <br/>
                <img src="img/oscars/barchart.png" alt="Diversity in Oscars Bar Chart"/>
                <img src="img/oscars/timeline.png" alt="Diversity in Oscars Timeline"/>
                <p className="paddingtop30">
                  Our goal for the design was to inform the users and showed the scale of how disproportionate racial diversity was 
                  in Academy Award nominees and winners. To show that, we wanted to quantify the total winners and nominees by 
                  giving each winner and nominee a unit (a human figure) and highlighting the people of color. We also wanted to 
                  show the audience the different people of color nominees and winners in a timeline and provided more details about 
                  them to highlight their accomplishments and significance. Finally, a geographical map would highlight the racial 
                  diversity once more and illustrate the different locations award winners and nominees are from.
                </p>
                <br/>
                <img src="img/oscars/map.png" alt="Diversity in Oscars Interactive Map"/>
                <p className="paddingtop30">
                  From that reason, our group was leaning towards telling a story about the racial diversity of Academy Award nominees and 
                  winners using a scrolling design and interactive information visualizations. My contributions to the project were to clean up 
                  and combine the datasets, work on the geographic map, and set up the scrolltelling design for the timeline visualization.
                </p>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>NOVEMBER 2021-DECEMBER 2021</span>
                <br/><br/>
                <span>
                  role: researcher, data visualization designer<br/><br/>tools: d3.js<br/>team of 3
                  </span>
                <br/><br/>
                <a href="https://smwest3.github.io/info474au21-final/" target="_blank" rel="noreferrer"><span>Link to the website</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}