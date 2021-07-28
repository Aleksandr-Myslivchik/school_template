import React from 'react';
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import Congratulation from './Components/Pages/CongratulationPage'
import { Game } from './Components/Pages/GamePage'
import { Profile } from './Components/Pages/ProfilePage'
import { Records } from './Components/Pages/RecordsPage'
import { Welcome } from './Components/Pages/WelcomePage/Container'
import { Logo } from './Components/Logo/'
import Navigation from './Components/Navigation';
import { AppWrapper } from './Components/AppRootCmp/'
import { connect } from 'react-redux';
import GlobalStyle from './Styles/globalStyle/'
import { getCardsData } from './Redux/selects';



function App(props) {

  const { cardsLength } = props.cardsData

  return (
    <Router>
      <GlobalStyle />
      <AppWrapper >
        <Navigation>
          <Logo />
        </Navigation>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/profile" component={Profile} />
          {cardsLength && <Route path="/game" component={Game} />}
          {/* <Route path="/congratulation" component={Congratulation} /> */}
          <Route path="/records" component={Records} />
          <Redirect to='/' />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

App.propTypes = {
  cardsData: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    cardsData: getCardsData(state)
  }
}

export default connect(mapStateToProps, null)(App)
