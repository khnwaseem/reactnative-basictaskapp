import React from 'react';
import { StyleSheet, View,TextInput,Button,Modal } from 'react-native';


 const GoalInput = ({goalInputHandler,enteredGoal,addGoalHandler,visibleModal,cancelGoalHandler}) => {
  return (
    <Modal visible={visibleModal} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput placeholder="course Goal"
        style={styles.input}  onChangeText={goalInputHandler} value={enteredGoal}/>

      <View style={styles.btnContainer}>
      <View style={styles.button}>
      <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.button}>
      <Button title="CANCEL" color="red"  onPress={cancelGoalHandler}/>
      </View>
      </View>

    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default GoalInput
