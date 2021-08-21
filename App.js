import { StatusBar } from 'expo-status-bar';
import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet,View,Button,Alert, FlatList,Pressable,Text } from 'react-native';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import AlertWithmodal from './components/AlertWithmodal';
import {db,auth} from './src/config';
var goalId1;

export default function App() {

  
  //const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);
  const [render,setRender] = useState(false);
  const [modalVisible,setModalVisible] = useState(false);
  const[logInfo,setLogInfo] = useState(true);
  //const [courseGoals,setCourseGoals] = useState([]);
  var courseGoalsTemp = [];

    
      //var courseGoals = [];
     //reading datafrom firebase
      db.ref('/todos').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
       //console.log(data);

      //extracts the keys for the properties of the object
      let todosKeys = Object.keys(data);
     
      for (var key in todosKeys) {
        //console.log(data[todosKeys[key]].todoItem.value);
        //setCourseGoals(currentGoals => [...courseGoals, { id: todosKeys[key]], value: data [todosKeys[key] ].value }]);
        courseGoalsTemp.push( { id: todosKeys[[key]], value: data [todosKeys[key] ].value } );
      }

    });

   
    
   addGoalHandler = goalTitle => {
    //[...courseGoals] creating a new array with the value of courseGoals array
    //[..courseGoals,enteredGoal] enteredGoal is a single new value that is being added to that new array as 
    //an element
   //courseGoals = [...courseGoals, { id: Math.random().toString(), value: goalTitle }];

    //inseting data to the firebase
    db.ref('/todos').push({
      //done: false,
      value: goalTitle
    });

    setIsAddMode(false);

    //console.log(goalTitle);
    //Alert.alert('Action!', 'A new To-do item was created');

    };
      
     // Edit data to firebase
     const editData = (dataId,editedText) =>{
      //let userRef = db.ref('/todos/'+dataId);
      //userRef.child('todoItem').update({'value': editedText});
      
      db.ref('/todos/'+dataId).update({'value':editedText});
      //console.log("entered to edit data");
      setRender(!render);
    
      
    };

     const deleteItem = goalId =>{
      setModalVisible(false)
      //courseGoals = (courseGoals.filter((goal) => goal.id !== goalId)

      db.ref('/todos/'+goalId).remove();
      //console.log('/todos/'+goalId);
    };


    
    //console.log([...courseGoals]);

    const removeGoalHandler = goalId => {
      /*Alert.alert(   'Delete Item',  'Press Ok to Delete!',  
            [  
                {  text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', 
                 onPress: () =>  setCourseGoals( currentGoals => {return currentGoals.filter((goal) => goal.id !== goalId)} ) 
            },  
            ]   );*/
        goalId1 = goalId;
        //console.log(goalId);
        setModalVisible(!modalVisible);

     
    };


    const changeModalFlag = () => 
    {
      console.log('entered into changeModalFlag')
      setIsAddMode(true);
    }
   

    const cancelModal = () => setIsAddMode(false);


  const addButton = (<Pressable 
     style = {styles.button}
     onPress = {changeModalFlag}
     >
     <Text style = {styles.textStyle}>Add New Goal</Text>

     </Pressable>);


  return (
    //parent view
    //here the curly braces inside style is javascript object
    //the style is just accessing the property of styles js object of StyleSheet
    <View style={styles.screen}>

      {addButton}
       <FlatList
        keyExtractor={(item,index) => item.id}
            data={ courseGoalsTemp }
        renderItem = { itemData => <GoalItem textToEdit = {itemData.item.value}
          dataEdit ={editData} 
        popupModalState = {modalVisible}
        delFun = {deleteItem} id ={itemData.item.id} 
        onDelete ={removeGoalHandler} 
        title = {itemData.item.value} 
        /> }
      />

      <GoalInput modalFlag = {isAddMode} 
        cancelAdding = {cancelModal} 
        onAddGoal = {addGoalHandler}
      />


      <AlertWithmodal 
      forBackButton = {removeGoalHandler} 
      popupModalFlag = {modalVisible} 
      GoalId = {goalId1} 
      delFun = {deleteItem} 
      />
       
      

    </View>
  );

}

/*StyleSheet.create takes js objects. we can use any property of that object to the style property of the veiw*/

const styles = StyleSheet.create ({

  //this is a property of js object
  screen: {
    padding: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#2980b9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
  
});
