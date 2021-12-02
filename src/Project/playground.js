import React, {Component} from 'react';
import Navbar from '../Component/NavBar';

export default class Playground extends Component {
  componentDidMount(){
    document.title = "Playground | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div>
        <div className="row">
          <Navbar />
          <div className="column-right">
            <div className="wrapper">
              <div className="col1-start col-1end">
                <br/>
              </div>
              <div className="col2-start col2-end">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}