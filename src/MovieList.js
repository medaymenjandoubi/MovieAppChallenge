import React from 'react'
import Card from './Card'
const MovieList = ({moviesData}) => {
  return (
    <div>
      {
        moviesData.map(Element =><Card infofilm={Element}/>)
      }
    
    </div>
  )
}

export default MovieList