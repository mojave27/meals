import React from 'react'
import FoodItemsProvider from '../context/FoodItemsProvider'
import FoodContainer from './FoodContainer'

const MainContainer = props => {

  return (
    <FoodItemsProvider>
      <FoodContainer />
    </FoodItemsProvider>
  )
}

export default MainContainer
