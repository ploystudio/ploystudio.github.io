import React, { Component } from "react";
import Popup from "reactjs-popup";
import Burger from "./Burger";
import Menu from "./Menu";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const contentStyle = {
  background: "rgba(0,0,0,0)",
  width: "80%",
  border: "none"
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className={classnames("Navbar", {
        "Navbar--hidden": !this.state.visible
      })}>
        <div className="column-left project-column nav-info">
          <p><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} exact to="/">Ploy Pruekcharoen</NavLink></p>
          <p>
            Research/Writing
            <ol>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/hmongembroidery">Ethnographic research on Hmong embroidery</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/colorofnature">Computer as a Medium for Human-Environment Interaction</NavLink></li>
            </ol>
          </p>
          <p>
            Digital Interaction Design
            <ol>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/famapp">Fam App</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/misinfoescaperoom">Misinformation Escape Room</NavLink></li>
              {/* <li><NavLink activeStyle={{ color:'#775ac5' }} to="/embroiderme">embrioder.me</NavLink></li> */}
            </ol>
          </p>
          <p>
            Interactive Art
            <ol>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/colorizedcloud">Colorized Cloud</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/makeitbloom">Make It Bloom</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/soundofhearthand">The Sound of Heart and Hand</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/vestmemories">The Vest of Memories</NavLink></li>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/worldfrommyhands">The World from My Hands</NavLink></li>
            </ol>
          </p>
          <p>
            Data Visualization
            <ol>
              <li><NavLink activeStyle={{ color:'#775ac5', textDecorationColor: '#775ac5' }} to="/oscarsdiversity">History of Racial Diversity in Academy Award Winners and Nominees</NavLink></li>
            </ol>
          </p>
          {/* <p><NavLink activeStyle={{ color:'#775ac5' }} to="/playground">Playground</NavLink></p> */}
          {/* <p><NavLink to="https://medium.com/@ploypp" target="_blank" rel="noreferrer">Medium Posts &rarr;</a></p> */}
        </div>
        <Popup
          modal
          overlayStyle={{ background: "rgba(0,0,0,1" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <Burger open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
      </nav>
      );
    }
}