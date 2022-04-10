import React from 'react';
import { StyleSheet } from 'react-native';
// import NavContainer from './routes/drawer';
import MainStack from './routes/mainStack';
// import LoginScreen from './screens/loginScreen';

export default function App() {
  return (
    // <NavContainer />
    // <LoginScreen />
      <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5236',
  },
});
