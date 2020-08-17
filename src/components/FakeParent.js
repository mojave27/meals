import React, { useState } from 'react'
import Calculator from './calculator/Calculator'
import FoodItemsProvider from '../context/FoodItemsProvider'

const FakeParent = props => {
  const [percent, setPercent] = useState(1)
  const [item, setItem] = useState(props.item)

  const handleChange = event => {
    let value = event.target.value
    let name = event.target.name
    let id = event.target.id

    console.log(`--id: ${id}`)
    console.log(`--name: ${name}`)
    console.log(`--value: ${value}`)

    switch (name) {
      case 'percent':
        setPercent(value)
        adjustValuesByPercentage(value)
        break
      case 'item':
        setItem({ ...item, item: roundToTwoDecimals(value) })
        break
      case 'cals':
        setItem({ ...item, cals: roundToTwoDecimals(value) })
        break
      case 'protein':
        setItem({ ...item, protein: roundToTwoDecimals(value) })
        break
      case 'carbs':
        setItem({ ...item, carbs: roundToTwoDecimals(value) })
        break
      case 'fat':
        setItem({ ...item, fat: roundToTwoDecimals(value) })
        break
      default:
        console.log(`Sorry, no match for ${name}.`)
    }
  }

  const roundToTwoDecimals = value => {
    return Math.round(value * 100) / 100
  }

  const calcMacroPercentage = name => {
    let calories = {
      protein: item.protein * 4,
      carbs: item.carbs * 4,
      fat: item.fat * 9
    }
    if (item.cals === 0) {
      return '0%'
    }
    let percentageAsDecimal = calories[name] / item.cals
    let percentageAsNumber = `${(percentageAsDecimal * 100).toFixed(1)}%`
    return percentageAsNumber
  }

  const adjustValuesByPercentage = multiplier => {
    let newPlier = Number(multiplier).toFixed(2)
    console.log(`newPlier: ${newPlier}`)
    multiplier = newPlier
    if (percent !== 0) {
      let newItem = {
        ...item,
        cals: roundToTwoDecimals(props.item.cals * multiplier),
        protein: roundToTwoDecimals(props.item.protein * multiplier),
        carbs: roundToTwoDecimals(props.item.carbs * multiplier),
        fat: roundToTwoDecimals(props.item.fat * multiplier)
      }
      setItem(newItem)
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
    <FoodItemsProvider>
      <Calculator
        items={props.items}
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
    </FoodItemsProvider>
  )
}

export default FakeParent
