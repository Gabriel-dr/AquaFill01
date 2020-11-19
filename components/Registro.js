import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HelpScreen from './HelpScreen';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/styles';
import NotificationsScreen from './NotificationScreen';
 import {Header} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Registro ({navigation}) {
return (

<View style={{ flex:1, backgroundColor: 'transparent'}}>

<ImageBackground source={require('../assets/background.jpg')} style={styles.container}>




<ScrollView contentContainerStyle={styles.innerContainer} >
<Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'  />
<Text>Email</Text>
<TextInput 
style={styles.textin}
/>
<Text>Senha</Text>
<TextInput 
style={styles.textin}
/>

<Text>Confirmar Senha</Text>
<TextInput 
style={styles.textin}
/>
<Text>Telefone</Text>
<TextInput 
style={styles.textin}
/>
<Text>Nome e sobrenome</Text>
<TextInput 
style={styles.textin}
/>

    
</ScrollView>
</ImageBackground>
</View>








)



}