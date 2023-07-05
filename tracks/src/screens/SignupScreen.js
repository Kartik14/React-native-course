import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as authContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(authContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        onSubmitText='Sign Up'
        onSubmit={(email, password) => signup(email, password)} />
      <NavLink
        routeName='Signin'
        navigationText='Already have an account? Go to SignIN'
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
