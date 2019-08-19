import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return <div>Post List</div>
  }
};


// 1st argument on connect function as 'null' as we don't have a state currently
// 2nd argument, action creator
export default connect(null, { fetchPosts } )(PostList);