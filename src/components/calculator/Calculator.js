import React, { useEffect, useState, useRef } from 'react'

function Calculator(props) {
  const [percent, setPercent] = useState(1)
  const [item, setItem] = useState('')
  const [cals, setCals] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fat, setFat] = useState(0)
  const original = useRef(null)

  useEffect( () => {
    original.current = props.item
  })


  const handleChange = event => {
    let value = event.target.value
    let name = event.target.name

    console.log(name)
    console.log(value)

    switch (name) {
      case 'percent':
        setPercent(value)
        adjustValuesByPercentage(value)
        break
      case 'item':
        setItem(value)
        break
      case 'cals':
        setCals(roundToTwoDecimals(value))
        break
      case 'protein':
        setProtein(roundToTwoDecimals(value))
        break
      case 'carbs':
        setCarbs(roundToTwoDecimals(value))
        break
      case 'fat':
        setFat(roundToTwoDecimals(value))
        break
      default:
        console.log(`Sorry, no match for ${name}.`)
    }
  }

  const roundToTwoDecimals = (value) => {
    return Math.round(value * 100) / 100
  }

  const calcMacroPercentage = name => {
    let calories = {
      protein: protein * 4,
      carbs: carbs * 4,
      fat: fat * 9
    }
    if (cals === 0) {
      return '0%'
    }
    let percentageAsDecimal = calories[name] / cals
    let percentageAsNumber = `${(percentageAsDecimal * 100).toFixed(1)}%`
    return percentageAsNumber
  }

  const adjustValuesByPercentage = multiplier => {
    let newPlier = Number(multiplier).toFixed(2)
    console.log(`newPlier: ${newPlier}`)
    multiplier = newPlier
    if (percent !== 0) { 
      setCals(roundToTwoDecimals(props.item.cals * multiplier))
      setProtein(roundToTwoDecimals(props.item.protein * multiplier))
      setCarbs(roundToTwoDecimals(props.item.carbs * multiplier))
      setFat(roundToTwoDecimals(props.item.fat * multiplier))
    }
  }

  const increasePercent = async () => {
    let newPercent = (Number(percent) + 0.1)
    console.log(newPercent)
    await setPercent(newPercent.toFixed(2))
    adjustValuesByPercentage(newPercent)
  }

  const decreasePercent = async () => {
    let newPercent = (Number(percent) - 0.1)
    await setPercent(newPercent)
    adjustValuesByPercentage(newPercent)
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
          <tr className='w3-border'>
            <td>
              <button
                className='w3-circle w3-theme-l2 w3-wide'
                onClick={decreasePercent}
              >
                {'-'}
              </button>
              <input
                className='w3-theme-l5'
                style={{ width: '75px', margin: '0px 10px' }}
                name='percent'
                type='text'
                value={percent}
                onChange={handleChange}
              />
              <button
                className='w3-circle w3-theme-l2'
                onClick={increasePercent}
              >
                {'+'}
              </button>
            </td>
            <td>
              <input
                name='item'
                type='text'
                value={props.item.item}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                style={{ width: '100px' }}
                name='cals'
                type='text'
                value={props.item.cals}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                style={{ width: '100px' }}
                name='protein'
                type='text'
                value={props.item.protein}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                style={{ width: '100px' }}
                name='carbs'
                type='text'
                value={props.item.carbs}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                style={{ width: '100px' }}
                name='fat'
                type='text'
                value={props.item.fat}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{calcMacroPercentage('protein')}</td>
            <td>{calcMacroPercentage('carbs')}</td>
            <td>{calcMacroPercentage('fat')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calculator
