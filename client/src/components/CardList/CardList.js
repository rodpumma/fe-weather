import React from 'react'
import Card from '../card/Card'
import './CardList.css'
import Title from '../Title/Title';

const CardList = ({cards, name = null}) => {
  return (
    <>
      {name ? <Title text={name} />
        : null}
      <div className="weather-list__content" >
        {cards.map((data, i) => (
          <div className="weather-list__element" key={i}>
            {data.name ? <Title text={data.name} />
              : null}
            <Card info={data} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CardList