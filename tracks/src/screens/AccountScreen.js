import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Context as authContext } from '../context/authContext';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(authContext);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Sign out</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </View>
  )
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear' size={20} />
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});

export default AccountScreen;
