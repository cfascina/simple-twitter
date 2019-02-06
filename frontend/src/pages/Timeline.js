import React, { Component } from 'react';
import axiosApi from '../services/axiosApi';
import socket from 'socket.io-client';
import './Timeline.css';
import TwitterLogo from '../twitter.svg';
import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  state = {
    arrTweets: [],
    tweetContent: ''
  }
  handleTweetContent = (e) => {
    this.setState({tweetContent: e.target.value});
  }
  handleSubmit = async(e) => {
    if(e.keyCode !== 13) return;

    const tweetAuthor = localStorage.getItem('@simple-twitter:userName');
    const {tweetContent} = this.state;

    await axiosApi.post('tweets', {author: tweetAuthor, content: tweetContent});

    this.setState({tweetContent: ''});
  }
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
  }
  render() {
    return (
      <div className="timeline-wrapper">
        <img
          src={TwitterLogo}
          height={24}
          alt="Twitter Logo" />

        <form>
          <textarea
            value={this.state.tweetContent}
            onChange={this.handleTweetContent}
            onKeyDown={this.handleSubmit}
            placeholder="What is happening?"></textarea>
        </form>

        <ul className="tweet-list">
          {this.state.arrTweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    );
  }
}
