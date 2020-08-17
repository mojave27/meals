import React from 'react'
import FoodItemsContext from './FoodItemsContext'
// import {
//   generateNewId,
//   findIndexOfId,
//   updateItemById
// } from '../components/ArrayUtils'
import { cloneDeep } from 'lodash'
// import {
//   addWoDay,
//   retrieve as fetchWoDays,
//   updateWoDay
// } from '../api/wodaysApi'

// const currentDate = () => {
//   let date = new Date()
//   return {
//     day: date.getDate().toString(),
//     month: date.getMonth().toString(),
//     year: date.getFullYear().toString()
//   }
// }

export const emptyFoodItem = {
  id: -1,
  percent: 1,
  item: '',
  cals: 0,
  protein: 0,
  carbs: 0,
  fat: 0
}

const foodItems = [
  {
    id: 0,
    percent: 1,
    item: 'egg, large',
    cals: 71,
    protein: 6,
    carbs: 0,
    fat: 5
  },
  {
    id: 1,
    percent: 1,
    item: 'applegate chicken and sage sausage',
    cals: 110,
    protein: 9,
    carbs: 1,
    fat: 8
  }
];

class FoodItemsProvider extends React.Component {
  state = {
    foodItem: { ...emptyFoodItem },
    foodItems: []
  }

  componentDidMount = async () => {
  //   let wodays = await fetchWoDays()
    this.setState({ foodItems })
  }

  // saveWoDayInWoDaysList = woday => {
  //   let wodays = [...this.state.wodays]
  //   if (woday.id) {
  //     let index = findIndexOfId(woday.id, wodays)
  //     if (index > -1) {
  //       updateItemById(woday, woday.id, wodays)
  //     } else {
  //       wodays.push(woday)
  //     }
  //   } else {
  //     wodays.push(woday)
  //   }
  //   this.setState({ wodays })
  // }

  // saveFoodDay = async () => {
  //   // if(this.isWoDayInList()){
  //   if (this.state.foodItem.id === -1) {
  //     let foodItem = await addWoDay(this.state.woday)
  //     let foodItems = await fetchWoDays()
  //     this.setState({ woday, wodays })
  //     this.saveWoDayInWoDaysList(woday)
  //   } else {
  //     await updateWoDay(this.state.woday)
  //   }
  // }

  // isWoDayInList = () => {
  //   let answer =
  //     findIndexOfId(this.state.woday.id, this.state.wodays) === -1
  //       ? false
  //       : true
  //   console.log(answer)
  //   return answer
  // }

  render() {
    return (
      <FoodItemsContext.Provider
        value={{
          foodItem: this.state.foodItem,

          copyFoodItem: () => {
            return cloneDeep(this.state.foodItem)
          },

          // saveFoodItem: this.saveFoodItem,
          updateFoodItem: foodItem => {
            console.log(`foodItem: ${JSON.stringify(foodItem)}`)
            this.setState({ foodItem })
          },

          setEmptyFoodItem: () => {
            let foodItem = cloneDeep(emptyFoodItem)
            // woday.id = generateNewId(this.state.wodays)
            this.setState({ foodItem })
          },

          foodItems: this.state.foodItems,

          copyFoodItems: () => {
            return cloneDeep(this.state.foodItems)
          },

          updateFoodItems: foodItems => {
            this.setState({ foodItems })
          },

          // saveWoDayInWoDaysList: this.saveWoDayInWoDaysList,

          // clearWoDays: () => {
          //   this.setState({ wodays: [] })
          // }
        }}
      >
        {this.props.children}
      </FoodItemsContext.Provider>
    )
  }
}

export default FoodItemsProvider
