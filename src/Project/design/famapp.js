import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class FamApp extends Component {
  componentDidMount(){
    document.title = "Fam App | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Fam App</h2>
                <br/>
                <img src="img/fam/fam4.png" alt="Fam App"/>
                <p className="paddingtop30">
                  Fam App is an app to control smart home devices with a goal to enhance communication within the family. From the user research, 
                  I have found that staying at home for extended periods of time during COVID leads to higher levels of stress; therefore, our team 
                  proposed a design of an app that creates empathy and makes communication easier among parents and teenage children.
                </p>
                <img className="paddingtop30" src="img/fam/fam3.png" alt="Fam App"/>
                <p className="paddingtop30">
                  This user journey map is created based on our research findings to represent the emotional experience of the
                  parents when trying to communicate with their teenage children.
                </p>
                <img className="paddingtop30" src="img/fam/fam1.png" alt="Fam App"/>
                <img className="paddingtop30" src="img/fam/fam2.png" alt="Fam App"/>
                <p className="paddingtop30">
                  The storyboards focused on facilitating the initiation of conversation. We came up with different possible solutions 
                  that incorporated features that could be the answer for our user's needs.
                </p>
                <p>
                  The app design was focused to inform family members how the user is currently feeling, reduce stress levels of not having to 
                  guess when the right time comes along to talk about something personal, schedule the most effective time for all members to 
                  gather and converse, collect users' song selections to create family mood playlists and interact as a family, and track users' 
                  feelings throughout the day or week based on the color or contexts they choose to interact with on the app.
                </p>
                <br/>
                <center>
                  <p>Play with the prototype!</p>
                  <iframe className="famiframe" title="Fam App Prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyuGozk181NKerSs642kach%2FFamApp%3Fnode-id%3D2%253A3249%26starting-point-node-id%3D2%253A3249%26scaling%3Dscale-down" allowfullscreen/>
                </center>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>JANUARY 2021-MARCH 2021</span>
                <br/><br/>
                <span>
                  role: Product Designer and Researcher<br/><br/>tools: Adobe Photoshop, Figma, Miro<br/>
                  team of 3
                </span>
                <br/><br/>
                <a href="https://ploypil.in/famapp" target="_blank" rel="noreferrer"><span>Link to the full process blog</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}