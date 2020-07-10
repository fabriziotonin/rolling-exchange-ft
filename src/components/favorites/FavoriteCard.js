import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { darkTheme as theme } from '../../constants/colors';
import flags from '../../constants/flags';

const FavoriteCard = ({ name, flag }) => {
  let url = '';
  switch(flag){
    case 'arg' :
      url = flags.arg
      break
    case 'eur' :
      url = flags.eur
      break
    case 'jpy' :
      url = flags.jpy
      break
    case 'usd' :
      url = flags.usd
      break
  }
  return (
    <View style={styles.card}>
      <Image 
      source={url}
      style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.container,
    width: '90%',
    padding: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: theme.textPrimary,
  },
});

export default FavoriteCard
