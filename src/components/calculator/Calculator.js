import React, { useState } from 'react'

function Calculator() {
  // Declare a new state variable, which we'll call "count"
  const [item, setItem] = useState('')
  const [cals, setCals] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fat, setFat] = useState(0)

  const handleChange = event => {
    let value = event.target.value
    let name = event.target.name

    console.log(name)
    console.log(value)

    switch (name) {
      case 'item':
        setItem(value)
        break
      case 'cals':
        setCals(value)
        break
      case 'protein':
        setProtein(value)
        break
      case 'carbs':
        setCarbs(value)
        break
      case 'fat':
        setFat(value)
        break
      default:
        console.log(`Sorry, no match for ${name}.`)
    }
  }

  const calcMacroPercentage = name => {
    let calories = {
      protein: protein * 4,
      carbs: carbs * 4,
      fat: fat * 9
    }
    if(cals === 0){
        return '0%'
    }
    let percentageAsDecimal = calories[name] / cals
    let percentageAsNumber = `${(percentageAsDecimal*100).toFixed(1)}%`
    return percentageAsNumber
  }

  return (
    <div>
      <table border='1px'>
        <tbody>
          <tr>
            <th>item</th>
            <th>calories</th>
            <th>protein grams</th>
            <th>carb grams</th>
            <th>fat grams</th>
          </tr>
          <tr>
            <td>
              <input
                name='item'
                type='text'
                value={item}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name='cals'
                type='text'
                value={cals}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name='protein'
                type='text'
                value={protein}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name='carbs'
                type='text'
                value={carbs}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name='fat'
                type='text'
                value={fat}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
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
