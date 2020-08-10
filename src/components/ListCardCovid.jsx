import React, { Fragment } from 'react'
import uniqid from 'uniqid'
import CardCovid from './CardCovid'

const ListCardCovid = ({ covid }) => {
  return (
    <Fragment>
      {covid.length > 0 && (
        <ul>
          {covid.map(item => (
            <li key={uniqid()}>
              <CardCovid {...item} />
            </li>
          ))}
        </ul>
      )}
      <CardCovid />
    </Fragment>
  )
}
export default ListCardCovid
