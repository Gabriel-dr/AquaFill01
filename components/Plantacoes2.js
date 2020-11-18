import React, { Component, useState} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HelpScreen from './HelpScreen';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { styles } from '../Styles/styles';
import NotificationsScreen from './NotificationScreen';
 import {Header} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const apiUrl = 'http://aquafillwebapi.azurewebsites.net/api';
// const urlLista = apiUrl + '/UsuarioPlantacao';
var idUsuario = 1;

/************ test area 1 ************* */
  let urlLista =  apiUrl + '/UsuarioPlantacao' + '/' + idUsuario;

// function listarPlantacoes(id)
// {
//   fetch( urlLista ).then(renderItem());
// }

// function renderItem(item){
//   return( 
//     <View >
//       <Text>{ item.Nome }</Text>
//     </View>
//   );
// }
/************ FIM test area 1 ************* */

// function getPlantasFromApiAsync() {
//   return fetch(urlLista + '/' + '1')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.toString();
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

export default class Plantacao extends React.Component //({navigation})
{
  constructor( props ) {
    super(props);

     this.state = {
         isLoading: true,
         dataSource: []
     };

     function componentDidMount() {
      fetch( urlLista )
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              isLoading: false,
              dataSource: responseJson
          });
      });
  }

 function renderItem    ({item, index})   {
    let { resultCode, message } = item;

    if (!message[0]) return null;
    let details = message[0];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Entity ID: {details.id}</Text>
        </View>
    );
}

function keyExtractor (item, index)  {
    return index.toString();
}

function render() {  (
<View style={styles.ViewStyle}> 
<Header  placement="center"
  leftComponent={ ()=>{ return      ( <Button        
    onPress={navigation.openDrawer}
    title=""
    titleStyle={styles.titulo} 
    buttonStyle={styles.Botao}
    color="#1E6738"
    icon={
      <Icon
        name="reorder"
        type='material'
        size={20}
        color= '#ffffff'
        
                />
    } 
    />);} }
  centerComponent={{ text: '', style: { color: '#fff' } }}
  rightComponent={{ }}
  style={styles.header}   containerStyle={styles.headerContainer}
/>
<ScrollView contentContainerStyle={styles.innerContainer} style={{flex: 1}} >

<Button 
    title=""
    buttonStyle={styles.Botao}
    icon={
      <Icon
        name="add"
        type='material'
        size={20}
        color= '#ffffff'
        
                />
    
    }
    
    />
 
<Button 
      
      onPress={() => navigation.goBack()}
      title="Voltar"
      buttonStyle={styles.Botao	}
    />
    
    <FlatList
                 data={this.state.dataSource}
                 keyExtractor={this.keyExtractor}
                 renderItem={this.renderItem}
             />

</ScrollView>

</View>
    )};

    
    
const style = StyleSheet.create({
  container: {
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
  },
  header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
     fontWeight: 'bold'
  },
});

const fetchAndLog = async() => {
   const response = await fetch(urlLista);
   const json     = await response.json();
   console.log(json);
}

fetchAndLog();
  }}
