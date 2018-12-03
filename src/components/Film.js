import React from "react";

class Film extends React.Component{

  render(){
    return(
      <div className="film">
        <li>
          <a href = {this.props.url}>{this.props.title}</a>
        </li>
      </div>
    )
  }
}

export default Film;
