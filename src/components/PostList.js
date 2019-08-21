import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    console.log(this.props.posts);
    return <div>Post List</div>
  }
};

// Anytime we need to access state in redux, we need to call this function, to pass into the connect()
const mapStateToProps = state => {
  return { posts: state.posts };
}


// 1st argument on connect function as 'null' as we don't have a state currently
// 2nd argument, action creator
export default connect(mapStateToProps, { fetchPosts } )(PostList);