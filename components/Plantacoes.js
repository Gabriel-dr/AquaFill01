import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground , FlatList } from 'react-native';
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
//const urlLista = apiUrl + '/UsuarioPlantacao';
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
/************ test area 1 ************* */



export default function Plantacao  ({navigation}){

  // const constructor = (props ) =>{
  //      super(props);
  // }

  const Cat = () => {
    return (
      <Text>Hello, I am your cat!</Text>
    );
  }

  const componentDidMount = ()=> { 
    carregaLista() ;
    }

const DATA = [];// carregaLista();
//  [
//   {
//     "id": 1,
//     "TipoPlanta": "Cannabis Sativa",
//     "Nome": "Cannabis Sativa ",
//     "Localizacao": "Faixa de gaza",
//     "UmidadeMin": 40.00,
//     "UmiadeMax": 90.00,
//     "Sensor": 1,
//     "NumEquip": "1",
//     "UsuarioId": 1,
//     "Usuario": null
// },
// {
//     "id": 3,
//     "TipoPlanta": "Mandioca",
//     "Nome": "Mandioca",
//     "Localizacao": "Paraiba",
//     "UmidadeMin": 50.00,
//     "UmiadeMax": 80.00,
//     "Sensor": 2,
//     "NumEquip": "4",
//     "UsuarioId": 1,
//     "Usuario": null
// }
// ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.Nome} />
  );

  function carregaLista() {
    console.log('chamou carregaLista...');
    fetch( urlLista )
    .then((response) => response.json())
    .then((responseJson) => {
        // this.setState({
           // isLoading: false,
             DATA: responseJson
           console.log(responseJson);
           //return responseJson;
       // });
    });
}


    return(
<View style={styles.ViewStyle}  > 
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
<ScrollView contentContainerStyle={styles.innerContainer} >

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



<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     


<Button 
      
      onPress={() => navigation.goBack()}
      title="Voltar"
      buttonStyle={styles.Botao	}
    />
    


</ScrollView>

</View>



    );
    
}
