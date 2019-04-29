import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar.jsx';
import PostList from './components/PostList.jsx';
import './App.css';

class App extends Component {
  
  state = {
    isLoading: true,
    posts: [],
    visible: 10,
    search: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data, isLoading: false }))
  }

  loadMore = () => {
    this.setState({visible: this.state.visible + 10})
  }


  handleChange = (event) => {
    this.setState({search: event.target.value,
                   posts: this.state.posts.filter((post)=> 
                    post.title.toLowerCase().includes(this.state.search.toLowerCase()) 
                   ),
                   visible: 10
                }) 
  }


  render () {
    if (this.state.isLoading===true) {
      return <Loader type="Oval" color="#000000" height={80} width={80} />
    } 
      return (
        <>
          <span>Find: </span><input onChange={this.handleChange} name="search" placeholder={this.state.search}/>        
          <PostList posts={this.state.posts.slice(0, this.state.visible)} />
          {this.state.visible < this.state.posts.length &&
            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          }
        </>
    );
  }
}

export default App;
