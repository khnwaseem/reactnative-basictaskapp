import React from 'react';
import { StyleSheet, Text, View,TouchableNativeFeedback } from 'react-native';


 const GoalItem = ({itemData,onDelete}) => {
  return (
    <TouchableNativeFeedback onPress={onDelete}>
     <View style={styles.listItem} >
     <Text>{itemData.item.value}</Text>
     </View>
     </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    color: '#fff'
  }
})

export default GoalItem
