import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HelpScreen from './HelpScreen';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/styles';
import NotificationsScreen from './NotificationScreen';
 import {Header} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
// import { Header } from 'react-native/Libraries/NewAppScreen';
 



export default function HomeScreen({ navigation }) {
  return (
<View style={{ flex:1, backgroundColor: 'transparent'}}>
    


    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
    {/* <Header  placement="center"
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
        size={15}
        color= '#ffffff'
        
                />
    } 
    />);} }
  centerComponent={{ text: '', style: { color: '#fff' } }}
  rightComponent={{ }}
  style={styles.header}   containerStyle={styles.headerContainer}
/>  */}
    <ScrollView contentContainerStyle={styles.innerContainer} >
 

      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'  />
        
      {/* <Button        
        onPress={navigation.openDrawer}
        title="Menu"
        titleStyle={styles.titulo} 
        buttonStyle={styles.Botao}
        color="#1E6738"
        icon={
          <Icon
            name="reorder"
            type='material'
            size={15}
            color= '#ffffff'
            
                    />
        } 
        /> */}
        <Button 
        title="Minhas Plantaçoes"
        buttonStyle={styles.Botao}
        onPress={() => navigation.navigate('Minhas Plantações')}
        />
        <Button 
        title="Configurações do seu kit"
        buttonStyle={styles.Botao	}
        
        
        
        />

        <Button 
        title="Entre em contato"
        buttonStyle={styles.Botao}
        
        
        />
        
        

      {/* <Button
      onPress={() => navigation.goBack()}
        icon={
          <Icon
            name="arrow-left"
            size={15}
            color="white"
          />
        }
        title="Voltar"
        buttonStyle={styles.Botao}
      />  */}

      <Button
        onPress={() => navigation.navigate('Ajuda')}
        title="Ajuda"
       buttonStyle={styles.Botao}
      />

       <Button 
        title="Sair"
        buttonStyle={styles.Botao}
        />
 
    </ScrollView>
    </ImageBackground>

    </View>
  );
}