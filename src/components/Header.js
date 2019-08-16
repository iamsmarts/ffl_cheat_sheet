import React, { Component } from 'react';


class Header extends Component {
  state = {  }
  handleClick = ({link}) => {
    console.log(link);
    this.props.positionSelection(link)
  }
  render() {
    let navLinks = this.props.navLinks.map((link, index)=>{
      return <h2 onClick={() => this.handleClick({link})} key={index} className="item">{link}</h2>
    })
    return (
      <div className="ui horizontal list">
        {navLinks}
      </div>
     );
  }
}

export default Header;