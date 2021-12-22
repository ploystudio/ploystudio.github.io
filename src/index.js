import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import FamApp from './Project/design/famapp';
import Embroiderme from './Project/design/embroiderme';
import Misinfo from './Project/design/misinfo';
import ColorizedCloud from './Project/interactive/colorizedcloud';
import MakeItBloom from './Project/interactive/makeitbloom';
import SoundHeartHand from './Project/interactive/soundhearthand';
import VestMemories from './Project/interactive/vestmemories';
import WorldfromMyHands from './Project/interactive/worldfrommyhands';
import HmongEmbroidery from './Project/research/hmongembroidery';
import ColorofNature from './Project/research/colorofnature';
import Oscars from './Project/dataviz/orcarsdiversity';
import Playground from './Project/playground';

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL + '/'}>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/famapp" component={FamApp} />
        {/* <Route path="/embroiderme" component={Embroiderme} /> */}
        <Route path="/colorizedcloud" component={ColorizedCloud} />
        <Route path="/misinfoescaperoom" component={Misinfo} />
        <Route path="/makeitbloom" component={MakeItBloom} />
        <Route path="/soundofhearthand" component={SoundHeartHand} />
        <Route path="/vestmemories" component={VestMemories} />
        <Route path="/worldfrommyhands" component={WorldfromMyHands} />
        <Route path="/hmongembroidery" component={HmongEmbroidery} />
        <Route path="/colorofnature" component={ColorofNature} />
        <Route path="/oscarsdiversity" component={Oscars} />
        <Route path="/playground" component={Playground} />
      </Switch>
  </Router>
 ,document.getElementById('root'));
serviceWorker.unregister();
