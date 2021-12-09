import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button,FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'



export default function App() {

  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals,setCourseGoals] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const onAddGoal = () => {
    if(enteredGoal) {
      setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(),value: enteredGoal}])
      console.log(enteredGoal)
      setIsAddMode(false)
    }
}

const cancelGoalHandler = () => {
    setIsAddMode(false)
}

const addGoalHandler = () => {
  onAddGoal()
  setEnteredGoal('')
}

const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId)
  })
  console.log(goalId)
}


  return (
    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>

       <GoalInput goalInputHandler={goalInputHandler} visibleModal={isAddMode}
        enteredGoal={enteredGoal} addGoalHandler={addGoalHandler}   cancelGoalHandler={cancelGoalHandler}/>

       <FlatList data={courseGoals} renderItem={itemData => <GoalItem itemData ={itemData} onDelete={() => removeGoalHandler(itemData.item.id) } />  }
         style={{marginBottom: 20,marginTop:10}}>

       </FlatList>
    </View>
  );
}



const styles = StyleSheet.create({
  screen : {
    padding:30,
    paddingTop: 70
  },


});
