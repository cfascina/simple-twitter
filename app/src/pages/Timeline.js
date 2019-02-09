import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import socket from 'socket.io-client';
import axiosApi from '../services/axiosApi';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity} from 'react-native';

// Components
import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Timeline',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('NewTweetPage')}>
        <Icon
          name="add-circle-outline"
          size={24}
          color="#4EE0BB"
          style={{marginRight: 10}} />
      </TouchableOpacity>
    )
  });

  state = {
    arrTweets: []
  };

  async componentDidMount() {
    this.subscribeToEvents();

    const response = await axiosApi.get('tweets');
    this.setState({arrTweets: response.data});
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');

    io.on('tweet', data => {
      this.setState({arrTweets: [data, ...this.state.arrTweets]});
    });

    io.on('like', data => {
      this.setState({
        arrTweets: this.state.arrTweets.map(
          tweet => (tweet._id === data._id ? data : tweet)
        )
      });
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.arrTweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({item}) => <Tweet tweet={item} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
