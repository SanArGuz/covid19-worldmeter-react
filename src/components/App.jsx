import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import useData from '../hooks/useData'
import ListCardCovid from './ListCardCovid'

import '../styles/components/App.styl'

const App = () => {
  const covid = useData(
    'https://api.coronatracker.com/v3/stats/worldometer/country'
  )

  return (
    <Fragment>
      <Header />
      <ListCardCovid covid={covid} />
      <Footer />
    </Fragment>
  )
}

export default App
