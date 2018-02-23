import React from 'react';

// Holds state b/c conditional rendering?
class About extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   term: ''
    // }
  }

  // onChange (e) {
  //   //console.log('LOOK HERE ', this);
  //   this.setState({
  //     term: e.target.value
  //   });
  //
  // }
  //
  // search() {
  //   this.props.onSearch(this.state.term);
  // }

  render() {
    return (<div id="main-div">
      <div className="col" id="one">
        <span><p>Dining Style</p></span>
        <span><p>Cuisine Type</p></span>
        <span><p>Business Hours</p></span>
        <span><p>Phone Number</p></span>
        <span><p>Website</p><a href="#">link</a></span>
        <span><p>Payment Options</p></span>
        <span><p>Dress Code</p></span>
        <span><p>Catering</p></span>
      </div>
      <div className="col" id="two">
        <div id="map">
          <p>Image here</p>
          <span><p>Address</p></span>
          <span><p>Neighborhood</p></span>
          <span><p>Cross Street</p></span>
          <span><p>Public Transit</p></span>
          <span><p>Additional</p></span>
        </div>
      </div>
    </div>)
  }
}

export default About;
