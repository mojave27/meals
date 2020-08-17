import React, { useContext, useState } from 'react'
import Calculator from './calculator/Calculator'
import FoodItemsContext from '../context/FoodItemsContext'
import { updateItemById, retrieveItemById } from './ArrayUtils'

const FoodContainer = props => {
  let foodContext = useContext(FoodItemsContext)
  const [percent, setPercent] = useState(1)
  // const [item, setItem] = useState(props.item)

  const { updateFoodItems } = foodContext

  const handleChange = event => {
    let value = event.target.value
    let name = event.target.name
    // let id = event.target.id
    let id = event.target.dataset['itemid']

    console.log(`--id: ${id}`)
    console.log(`--name: ${name}`)
    console.log(`--value: ${value}`)
    // let item = foodContext.copyFoodItem()
    let item = retrieveItemById(id, foodContext.foodItems)

    switch (name) {
      case 'percent':
        setPercent(value)
        adjustValuesByPercentage(value)
        updateFoodItem({ ...item, item: roundToTwoDecimals(value) })
        break
      case 'cals':
        updateFoodItem({ ...item, cals: roundToTwoDecimals(value) })
        break
      case 'protein':
        updateFoodItem({ ...item, protein: roundToTwoDecimals(value) })
        break
      case 'carbs':
        updateFoodItem({ ...item, carbs: roundToTwoDecimals(value) })
        break
      case 'fat':
        updateFoodItem({ ...item, fat: roundToTwoDecimals(value) })
        break
      case 'item':
        updateFoodItem({ ...item, item: value })
        break
      default:
        console.log(`Sorry, no match for ${name}.`)
    }
  }

  const updateFoodItem = foodItem => {
    let items = foodContext.copyFoodItems()
    let updatedItems = updateItemById(foodItem, foodItem.id, items) 
    updateFoodItems(updatedItems)
  }

  const roundToTwoDecimals = value => {
    return Math.round(value * 100) / 100
  }

  const adjustValuesByPercentage = multiplier => {
    let item = foodContext.foodItem
    let newPlier = Number(multiplier).toFixed(2)
    console.log(`newPlier: ${newPlier}`)
    multiplier = newPlier
    if (percent !== 0) {
      let newItem = {
        ...item,
        cals: roundToTwoDecimals(item.cals * multiplier),
        protein: roundToTwoDecimals(item.protein * multiplier),
        carbs: roundToTwoDecimals(item.carbs * multiplier),
        fat: roundToTwoDecimals(item.fat * multiplier)
      }
      updateFoodItem(newItem)
    }
  }

  const increasePercent = async event => {
    let id = event.target.id
    let newPercent = Number(percent) + 0.1
    console.log(`${id} - ${newPercent}`)
    // await setPercent(newPercent.toFixed(2))
    // adjustValuesByPercentage(newPercent)
  }

  const decreasePercent = async event => {
    let id = event.target.id
    let newPercent = Number(percent) - 0.1
    console.log(`${id} - ${newPercent}`)
    // await setPercent(newPercent)
    // adjustValuesByPercentage(newPercent)
  }

  return (
      <Calculator
        // items={props.items}
        increasePercent={increasePercent}
        decreasePercent={decreasePercent}
        handleChange={handleChange}
        percent={percent}
        // macros={
        //   {
        //     protein: calcMacroPercentage(item.protein),
        //     carbs: calcMacroPercentage(item.carbs),
        //     fat: calcMacroPercentage(item.fat)
        //   }
        // }
      />
  )
}

export default FoodContainer
