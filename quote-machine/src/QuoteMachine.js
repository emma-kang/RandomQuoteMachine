import React, { Component } from 'react';

class QuoteMachine extends Component {
    constructor(props){
      super(props);
      this.state ={
        quotes: ''
      }
      this.getRandomQuote = this.getRandomQuote.bind(this);
      this.END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    }
  
    getRandomQuote = (e) => {
      fetch(this.END_POINT)
      .then(response => response.json())
      .then(data => {
        this.setState({
            quotes: data.quotes[Math.floor(Math.random()*data.quotes.length)]
        })
       })
    }

    shareTwitter = (quote, author) => {
        return ('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    }

    render() {
        const quote = this.state.quotes.quote;
        const author = this.state.quotes.author;
        let colors = ['#F2C5CA', '#BBD9C8', '#F2EED3', '#E2C7E8'];
        let style = {background: colors[Math.floor(Math.random()*colors.length)]};
        
      return (
        <div>
          <div class="container" style={style}>
          <h1>Random Quote Machine</h1>
          <div class="quote-container">
          <span id="text">
          {quote}
          </span>
          <span id="author">
          {author}
          </span>
          </div>
          <div class="button">
          <button class="btn btn-light" id="new-quote" onClick={this.getRandomQuote}>Quote</button><br/>
          <button class="btn btn-light"><a id="tweet-quote" href={this.shareTwitter(quote,author)} target="_blank" onClick> <i class="fab fa-twitter"></i> </a></button>
          </div>
          </div>
        </div>
      )
    }
  }

  export default QuoteMachine;