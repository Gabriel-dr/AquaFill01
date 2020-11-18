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
import { color } from 'react-native-reanimated';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function HelpScreen({ navigation }) {
  return (
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
        size={15}
        color= '#ffffff'
        
                />
    } 
    />);} }
  centerComponent={{ text: '', style: { color: '#fff' } }}
  rightComponent={{ }}
  style={styles.header}   containerStyle={styles.headerContainer}
/>
<ScrollView contentContainerStyle={styles.innerContainer} > 
        <Text>Jujuba é 1 real </Text> 
        
      <Button 
      
        onPress={() => navigation.goBack()}
        title="Voltar"
        buttonStyle={styles.Botao	}
      />
      </ScrollView>
    </View>
  );
}