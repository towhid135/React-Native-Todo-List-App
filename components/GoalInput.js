import React, {useState} from 'react';
import {View, TextInput,Button,Modal, StyleSheet, Pressable,Text} from 'react-native';
const GoalInput = props => {
	//useState is a react hook
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const handleGoals = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");

	};
	return (
		<Modal 
		animationType = "slide"
		visible = {props.modalFlag}
		onRequestClose = {props.cancelAdding}

		>
		
	<View style={styles.inputContainer}>
	       <TextInput 
				  placeholder="Enter Your Course Goal"
				  style={styles.input}
				  onChangeText={goalInputHandler}
				  value={enteredGoal}
		   
		   />

		   <View style = {styles.buttonContainer} >

                 <View style = {styles.buttonWidth}> 
                      <Pressable 

                      style = {[styles.button, styles.buttonClose1]}
                      onPress = { handleGoals } 
                      > 
                      <Text style={styles.textStyle}>ADD+</Text>
                      </Pressable>
			           
			    </View>

			    <View style = {styles.buttonWidth} >
			          <Pressable style = {[styles.button,styles.buttonClose2]}
			          onPress = {props.cancelAdding}
			          >

			          <Text style={styles.textStyle}>Cancel</Text>

			          </Pressable>
			          
			    </View>

			</View>
	</View>

	</Modal>
	
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: "80%",
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
	buttonBackground: {
		borderRadius: 20,
		backgroundColor: "#c7381f",
	},
	buttonWidth: {
		width: "40%",
	},

	button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
   buttonClose1: {
    backgroundColor: "green",
  },
  buttonClose2: {
    backgroundColor: "#d35400",
  },
   modalView: {
    margin: 20,
    backgroundColor: "#88b04b",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

})

export default GoalInput;