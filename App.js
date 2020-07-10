import React, { useState, Fragment } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import TopContainer from './src/components/TopContainer';


// LightTheme or darkTheme
import { LightTheme as theme } from './src/constants/colors'

export default function App() {
  const [mainVisible, setMainVisible] = useState(true);

  return (
    <PaperProvider>
      {Platform.Os === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

      {
        mainVisible ?
        (
          <Fragment>
            <TopContainer />
          </Fragment>
        )
        :
        (
          <Fragment>

          </Fragment>
        )
      }

    </PaperProvider>
  );
}





const styles = StyleSheet.create({
statusBarUnderlay: {
  height: 28,
  backgroundColor: theme.secondary,
}
});

