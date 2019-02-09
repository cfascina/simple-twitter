import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AsyncStorage,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet} from 'react-native';

export default class Login extends Component {
  state = {
    userName: ''
  }

  handleUserName = (text) => {
    this.setState({userName: text});
  }

  handleSubmit = async() => {
    const {userName} = this.state;

    if(!userName.length) return;

    await AsyncStorage.setItem('@simpleTwitter:userName', userName);
    this.props.navigation.navigate('App');
  }

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@simpleTwitter:userName');

    if(userName) {
      this.props.navigation.navigate('App');
    }
  }
  
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View>
            <Icon name="twitter" size={64} color="#4BB0EE" />
          </View>

          <TextInput
            style={styles.input}
            value={this.state.userName}
            onChangeText={this.handleUserName}
            onSubmitEditing={this.handleSubmit}
            placeholder="Username"
            returnKeyType="send"/>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },
  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
