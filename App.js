import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HelpScreen from './components/HelpScreen';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './components/HomeScreen';
import Plantacao from './components/Plantacoes';
import CadastroPlanta from './components/CadastroPlanta';
// import NotificationsScreen from './components/NotificationScreen';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen}  options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type='material'
              size={size}
              color={focused ? '#7cc' : '#ccc'}
              
            />
          ),
 
        }} />
        
        <Drawer.Screen name="Menu" component={HomeScreen} />
        <Drawer.Screen name="Minhas Plantações" component={Plantacao}/>
        <Drawer.Screen name="Configurações do seu kit" component={HomeScreen}/>
        <Drawer.Screen name="Entre em contato" component={HomeScreen}/>
        <Drawer.Screen name="Ajuda" component={HelpScreen} />
        <Drawer.Screen name="Sair" component={HomeScreen}/>
        <Drawer.Screen name="Cadastro Plantas" component={CadastroPlanta}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

