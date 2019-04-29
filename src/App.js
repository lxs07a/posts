import React, { Component } from 'react';
import PostList from './components/PostList.jsx';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

class App extends Component {
  
  state = {
    isLoading: true,
    //full searchable data
    originalPosts: [],
    //display data
    posts: [],
    visible: 10,
    search: ''
  };

  //get data from API, turn it into json, set state with received data
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ originalPosts: data, posts: data, isLoading: false }))
  }

  //show more posts
  loadMore = () => {
    this.setState({visible: this.state.visible + 10})
  }

  //filter full searchable data by search query, reset visible posts to 10
  handleChange = (event) => {
    this.setState({search: event.target.value,
                   posts: this.state.originalPosts.filter((post)=> 
                    post.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
                    post.body.toLowerCase().includes(this.state.search.toLowerCase()) 
                   ),
                   visible: 10
                }) 
  }


  render () {

    //show spinner while the data is loading
    if (this.state.isLoading===true) {
      return <Spinner animation="border" />
    } 
      return (
        <Container>
                {/* using Navbar to keep Search bar on the page when scrolled down */}
          <Navbar bg="light" fixed="top">
          {/* using Container to align the Search bar  */}
            <Container>
              <Form inline>
                <FormControl type="text" onChange={this.handleChange} name="search" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Container>
          </Navbar>

          {/* pass 10 (or more if Load More is clicked) posts as props */}
          <PostList posts={this.state.posts.slice(0, this.state.visible)} />
          
          {/* show the Load More button only if there is more to show */}
          {this.state.visible < this.state.posts.length &&
            <Button variant="info" onClick={this.loadMore} type="button" className="load-more">Load more</Button>
          }
        </Container>
    );
  }
}

export default App;
