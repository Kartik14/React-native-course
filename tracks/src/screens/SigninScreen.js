import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as authContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(authContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In to Tracker'
        errorMessage={state.errorMessage}
        onSubmitText='Sign In'
        onSubmit={(email, password) => signin(email, password)} />
      <NavLink
        routeName='Signup'
        navigationText='Create a New Account'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },

});

export default SigninScreen;
