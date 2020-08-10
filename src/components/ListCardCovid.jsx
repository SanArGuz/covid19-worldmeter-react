import React, { Fragment } from 'react'
import CardCovid from './CardCovid'

const ListCardCovid = ({ covid }) => {
  return (
    <Fragment>
      {covid.length > 0 && (
        <ul>
          {covid.map(item => (
            <li key={item.lat}>
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
