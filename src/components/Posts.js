import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

  render() {
      const postItem = this.props.posts.map(post=>(
          <div key={post.id}>
              <h3> {post.title}</h3>
            <p>{post.body}</p>
          </div>
      ));
    return (
        <div>
      <h1> textInComponent </h1>
      {postItem}
      </div>
    );
  }
}


Posts.protoTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,  // check the root reducer (posts: postReducer)
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts)
