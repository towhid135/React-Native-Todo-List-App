import React, { useState } from 'react';
import { StyleSheet, Text,Alert, Modal,Pressable, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


const AlertWithmodal = props => {
//const [modalVisible, setModalVisible] = useState(false);

	return ( 
		<Modal
        animationType="slide"
        transparent={true}
        visible={props.popupModalFlag}
        onRequestClose={props.forBackButton.bind(this,0)}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Would You Like to Delete? </Text>

            <View style = {styles.buttonContainer} >

            <View style = {styles.equalButtonSize}>
            
            <Pressable
              style={[styles.button, styles.buttonClose1]}
              onPress={props.delFun.bind(this,props.GoalId)}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            </View>

            <View style = {styles.equalButtonSize}>
            <Pressable
              style={[styles.button, styles.buttonClose2]}
              onPress={props.forBackButton.bind(this,0)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>

            </View>

            </View>
          </View>
        </View>


      </Modal>
      )


}

const styles = StyleSheet.create({
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f1c40f",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
   buttonClose1: {
    backgroundColor: "#c7381f",
  },
  buttonClose2: {
    backgroundColor: "#27ae60",
  },
   modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    left: "10%"
  },

  equalButtonSize:{
    width: "45%"
  }
  
});

export default AlertWithmodal;