
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    // flexGrow:1,
    backgroundColor: '#81F7F3',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Botao: {
    color: '#dd00cc', // RED GREEN BLUE
    backgroundColor: '#0298be',
    alignItems: 'center',
    borderColor: '#1E6738',
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
      width:  185,
     height: 212,
    marginVertical: 10,
    //maxHeight:"50px"
    // paddingVertical:50,
    resizeMode:'contain', 
    marginHorizontal:'auto',
    // marginTop: 10

    
  },
  titulo: {
    marginHorizontal: 10,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    borderBottomWidth:0,
    color: '#0298be'

  }, 
  headerContainer:{
    backgroundColor: '#0298be',
    justifyContent: 'space-around',
    borderBottomWidth:0,
    width:'100%'
  },
  innerContainer: {
    flexGrow:1,
    // flex: 1,
    backgroundColor: 'transparent',
    // alignItems: 'center',
    justifyContent: 'center',
    // alignContent: 'center',
      height: '100%',
      // marginTop: 40,
      // paddingTop: 100, 
      // backgroundColor:'#cc0077'

  },

  scrollView : {
    height : '1vh',// Dimensions.get('window').height, 
  }, 
    mainContainer : {
    flex : 1 },
     scrollViewContainer : { }, 


     ViewStyle : {
      flex: 1,
       alignItems: 'center', 
       justifyContent: 'center',
       backgroundColor: '#DAF5FE'
       


     }

    //  container: {
    //   flex: 1,
    //   marginTop: StatusBar.currentHeight || 0,
    // },
    ,item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },

});