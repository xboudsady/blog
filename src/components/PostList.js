import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  // Upon component render, call the fetchPosts() method, from the action creator for API data
  componentDidMount() {
    this.props.fetchPosts();
  }

  // Displaying our data
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={ post.id }>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{ post.title }</h2>
              <p>{ post.body }</p>
            </div>
          </div>
        </div>
      );
    });
  }
  
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
};

// Anytime we need to access state in redux, we need to call this function, to pass into the connect()
const mapStateToProps = state => {
  return { posts: state.posts };
}


// 1st argument on connect function as 'null' as we don't have a state currently
// 2nd argument, action creator
export default connect(mapStateToProps, { fetchPosts } )(PostList);