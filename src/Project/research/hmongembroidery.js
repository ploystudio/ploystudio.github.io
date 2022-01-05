import React, {Component} from 'react';
import Navbar from '../../Component/NavBar';

export default class HmongEmbroidery extends Component {
  componentDidMount(){
    document.title = "Ethnographic research on Hmong embroidery | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <h2>Ethnographic research on Hmong embroidery</h2>
                <br/>
                <p>
                  With a desire to learn more about the social context and beauty of Hmong embroidery, I conducted ethnographic 
                  research with a participatory approach on Hmong embroidery culture with teenagers. My research focuses on the 
                  perceptions and viewpoints of the younger generation because they are the ones who define the current days. 
                  During this study, I collaborated with four Hmong students who are passionate about their embroidery culture 
                  and want to learn more about what they can accomplish with it.
                </p>
                <img src="img/hmong/hmong1.png" alt="Ethnographic research on Hmong embroidery"/>
                <p className="paddingtop30">
                  The activities included weekly embroidery and weekly discussions. The purpose of weekly embroidery is to learn about 
                  the collaborators’ pattern-making process, thoughts, and inspirations. This process allowed me to evaluate their 
                  cultural relationships, and the weekly discussions also helped to define the concept and meaning behind each piece. 
                  These events helped me gain a better understanding of the Hmong traditions, which are interrelated and meaningful.
                </p>
                <img className="paddingtop30" src="img/hmong/hmong2.png" alt="Ethnographic research on Hmong embroidery"/>
                <p className="paddingtop30">
                  After completing five weeks of embroidery activities, the collaborators and I had created the “Stories of Hmong Embroidery” 
                  zine to share the stories behind four traditional patterns while also presenting four of the collaborators' works.
                </p>
                <a href="https://issuu.com/plinploy/docs/stories_of_hmong_embroidery.pptx" target="_blank" rel="noreferrer">See the full zine on Issuu</a>
              </div>
              <div className="col2-start col2-end">
                <br/>
                <span>June 2021</span>
                <br/><br/>
                <span>
                  role: researcher<br/><br/>topics: ethnographic research, participatory research methods,
                  cultural study
                </span>
                <br/><br/>
                <a href="https://medium.com/@ploypp/learn-the-heart-of-hmong-culture-through-hmong-embroidery-9f19df6f608a" target="_blank" rel="noreferrer"><span>Link to the Medium post</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}