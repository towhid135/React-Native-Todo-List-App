import React,{useState,useRef} from 'react';
import {
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity,
	Pressable,Button,
	TouchableHighlight,
	TextInput,
	Modal 
} from 'react-native';

const GoalItem = props => {
	var [isEdit,setIsEdit] = useState(false);
	var [enteredGoal,setEnteredGoal] = useState(props.textToEdit);

	//all funtions
	const editItem = () => {
		setIsEdit(true);
	};

	 const changeText = enteredText =>{
       setEnteredGoal(enteredText);
    };

    const storeEditedData = () =>{
    
    if (enteredGoal.length > 0){
		//console.log('entered to storeEditedData');
		props.dataEdit(props.id,enteredGoal);
		setEnteredGoal('');
		setIsEdit(false);
	}
	else setIsEdit(false);

	};
	
  //condition using ternay operator
	//isEdit ?	(showHideStyle["style"] = styles.textInputShow) : (showHideStyle["style"] = styles.textInputHide);

	var textInputProps = {
		placeholder: "Enter Your Course Goal", 
		style: styles.textInputContainer ,
		onChangeText: changeText ,
		value: enteredGoal,     
	};

	
	
	var TouchableHighlightProps = {
		activeOpacity: 0.0,
	    underlayColor: "green",
	    style: styles.buttonContainer,
	    onPress: isEdit ? storeEditedData : editItem,

	};

	return (
		<View>
		<TouchableOpacity activeOpacity="0.6" onPress= {props.onDelete.bind(this,props.id)}>
		<View style={styles.ListItem}>
       
		<View >
			  { isEdit ? <TextInput {...textInputProps} />  : <Text style = {styles.textStyle} >{props.title}</Text> }
	    </View>
        
	    {<TouchableHighlight {...TouchableHighlightProps} > 
	    {isEdit ? <Text style = {styles.button}>Save</Text> : <Text style = {styles.button}>Edit</Text>}
			 </TouchableHighlight> 
	    }

		</View>


		</TouchableOpacity>

		</View>


		


	)
	
};

let styles = StyleSheet.create({
	ListItem: {
		justifyContent: "space-between",
		flexDirection: "row",
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#c0392b",
		borderColor: '#c0392b',
		borderWidth: 1,
		borderRadius: 20,
		width: "100%"
    },
   button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: "120%"

  },
  buttonContainer: {
  	width: "20%",
  	borderRadius: 20,
  },
  textContainer: {
  	width: "20%",
  },
  textStyle: {
  	color: "white",
  	fontWeight: "bold",
  	textAlign: "left",
  },
  textInputContainer:{
  	width: "100%",
  	padding: 5,
	marginVertical: 5,
	borderRadius: 20,
  },
  textInputShow: {
    display: 'flex',
  },
  textInputHide: {
  	display: 'none',
  }

});

export default GoalItem;