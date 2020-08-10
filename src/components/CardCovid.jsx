import React, { Fragment } from 'react'
import { hasFlag } from 'country-flag-icons'

import '../styles/components/CardCovid.styl'

const CardCovid = ({
  countryCode,
  country,
  totalConfirmed,
  totalDeaths,
  activeCases,
  dailyDeaths,
  dailyConfirmed,
  totalRecovered,
}) => {
  let imgRoute = 'http://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg'

  if (hasFlag(countryCode)) {
    imgRoute = `http://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`
  }

  return (
    <Fragment>
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${imgRoute})`,
          }}
        />
        <div className="card-info">
          <h2>{country}</h2>
          <h2>
            <span>
              Daily Cases: 
              {' '}
              {dailyConfirmed}
              {' '}
| Daily Deaths: 
              {' '}
              {dailyDeaths}
              {' '}
|
              Active Cases: 
              {' '}
              {activeCases}
            </span>
          </h2>
          <p>
            <b>Total cases confirmed:</b> 
            {' '}
            {totalConfirmed}
            {' '}
|
            {' '}
            <b>Total Deaths:</b> 
            {' '}
            {totalDeaths}
            {' '}
| 
            {' '}
            <b>Total Recovered:</b>
            {' '}
            {totalRecovered}
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default CardCovid
