import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-paper';


// LightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors';

const CurrenciesContainer = ({ changeScreen }) => {
  return (
    <>
      <View style={style.currenciesContainer}>
        <Button onPress={() => changeScreen(false)} style={style.button}>
          <Text style={style.buttonText}>Agregar nueva moneda</Text>
        </Button>
        
      </View>
    </>
  )
}


const style = StyleSheet.create({
  currenciesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: theme.primary,
  },
  buttonText: {
    color: theme.link,
  }
});
export default CurrenciesContainer
