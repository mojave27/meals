import React, { useContext } from 'react'
import FoodItemsContext from '../../context/FoodItemsContext'

function Calculator(props) {
  let foodContext = useContext(FoodItemsContext)

  const handleChange = event => {
    props.handleChange(event)
  }

  const increasePercent = async event => {
    props.increasePercent(event)
  }

  const decreasePercent = async event => {
    props.decreasePercent(event)
  }

  const sumCals = items => {
    let sum = 0
    items.forEach(item => {
      sum = sum + item.cals
    })
    return sum
  }

  const calcMacroPercentage = (items, name) => {
    let calories = { protein: 0, carbs: 0, fat: 0 }
    items.forEach(item => {
      calories.protein = calories.protein + item.protein
      calories.carbs = calories.carbs + item.carbs
      calories.fat = calories.fat + item.fat
    })
    calories.total = calories.protein + calories.carbs + calories.fat

    if (calories.total === 0) {
      return '0%'
    }

    let percentageAsDecimal = calories[name] / calories.total
    let percentageAsNumber = `${(percentageAsDecimal * 100).toFixed(1)}%`

    return percentageAsNumber
  }

  const renderFoodItem = item => {
    return (
      <tr key={item.id} className='w3-border'>
        <td>
          <button
            id={`${item.id}-increasePercent`}
            className='w3-circle w3-theme-l2 w3-wide'
            onClick={decreasePercent}
          >
            {'-'}
          </button>
          <input
            id={`${item.id}-percent`}
            className='w3-theme-l5'
            style={{ width: '75px', margin: '0px 10px' }}
            name='percent'
            type='text'
            value={item.percent}
            onChange={handleChange}
          />
          <button
            id={`${item.id}-increasePercent`}
            className='w3-circle w3-theme-l2'
            onClick={increasePercent}
          >
            {'+'}
          </button>
        </td>
        <td>
          <input
            id={`${item.id}-item`}
            name='item'
            type='text'
            value={item.item}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id={`${item.id}-cals`}
            style={{ width: '100px' }}
            name='cals'
            type='text'
            value={item.cals}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id={`${item.id}-protein`}
            style={{ width: '100px' }}
            name='protein'
            type='text'
            value={item.protein}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id={`${item.id}-carbs`}
            style={{ width: '100px' }}
            name='carbs'
            type='text'
            value={item.carbs}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id={`${item.id}-fat`}
            style={{ width: '100px' }}
            name='fat'
            type='text'
            value={item.fat}
            onChange={handleChange}
          />
        </td>
      </tr>
    )
  }

  return (
    <div className='w3-container' style={{ margin: '50px' }}>
      <table className='w3-table w3-border w3-striped w3-myfont'>
        <tbody className='w3-myfont w3-medium'>
          <tr>
            <th>adjust +/-</th>
            <th>item</th>
            <th>calories</th>
            <th>protein grams</th>
            <th>carb grams</th>
            <th>fat grams</th>
          </tr>
          {foodContext.foodItems.map(item => renderFoodItem(item))}
          <tr>
            <td></td>
            <td
              style={{
                color: '#222',
                textAlign: 'right',
                paddingRight: '50px'
              }}
            >
              {'total cals'}
            </td>
            <td style={{ color: '#222' }}>{sumCals(foodContext.foodItems)}</td>
            <td style={{ color: '#222' }}>
              {calcMacroPercentage(foodContext.foodItems, 'protein')}
            </td>
            <td style={{ color: '#222' }}>
              {calcMacroPercentage(foodContext.foodItems, 'carbs')}
            </td>
            <td style={{ color: '#222' }}>
              {calcMacroPercentage(foodContext.foodItems, 'fat')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calculator
