import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import _ from 'underscore';
import About from './components/About.jsx';
import Description from './components/Description.jsx';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: ''
    }

  }

  // componentDidMount() { // FIX
  //   var appContext = this;
  //   console.log(appContext);
  //   $.get( "/repos", function( data ) {
  //     // var arr = Array.from(data)
  //     console.log('componentDidMount get req: ', data);
  //     // arr = data;
  //     // console.log(arr);
  //     //console.log('THIS: ', this);
  //     appContext.setState({ repos: data });
  //     var repoDivs = appContext.state.repos.map((elem) => {
  //       return(<div>
  //               <h4>{elem.full_name}</h4>
  //               <a href={elem.html_url}>{elem.html_url}</a>
  //             </div>);
  //     });
  //   });
    // console.log('ARR: ', arr);
    // var repoDivs = _.map(this.state.repos, () => {
    //   return(<div>
    //           <h4>{props.full_name}</h4>
    //           <a href={props.html_url}>{props.html_url}</a>
    //         </div>);
    // });
  //}

  // search (term) { // <-- Don't Need
  //   console.log(`${term} was searched`);
  //   // TODO
  //   $.ajax({
  //     url: 'http://localhost:1128/repos',
  //     method: "POST",
  //     contentType: 'application/json',
  //     data: JSON.stringify({name: term}), // correct?
  //     success: function () {
  //       console.log('this post was a success');
  //     },
  //     error: function() {
  //       console.log('there was an error in the post request');
  //     },
  //
  //   });
  //
  // }

  render () {
    // var repoDivs = this.state.repos.map((elem, idx) => {
    //   return(<div key={idx} stars={elem.stargazers_count}>
    //           <a href={elem.html_url}>{elem.full_name}</a>
    //         </div>);
    // });
    // repoDivs.sort((a, b) => {
    //   return b.props.stars - a.props.stars;
    // });
    // console.log('LOOK: ', repoDivs);
    return (<div>
      <Header />
      <Description />
      <About />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
