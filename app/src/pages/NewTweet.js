import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axiosApi from '../services/axiosApi';
import {
  AsyncStorage,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity} from 'react-native';

export default class NewTweet extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    newTweet: ''
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  handleSendTweet = async() => {
    const tweetAuthor = await AsyncStorage.getItem('@simpleTwitter:userName');
    const tweetContent = this.state.newTweet;

    await axiosApi.post('tweets', {author: tweetAuthor, content: tweetContent});

    this.goBack();
  };

  handleTweetContent = (value) => {
    this.setState({newTweet: value});
  };

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
           <Icon
              name="close"
              size={24}
              color="#4BB0EE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleSendTweet}>
           <Text style={styles.buttonText}>Send Tweet</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          multiline
          placeholder="What is happening?"
          placeholderTextColor="#999"
          value={this.state.newTweet}
          onChangeText={this.handleTweetContent}
          returnKeyType="send"
          onSubmitEditing={this.handleSendTweet} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    margin: 20,
    fontSize: 16,
    color: "#333"
  }
});
