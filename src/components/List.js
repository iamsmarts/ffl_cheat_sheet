import React, { Component } from 'react';

class List extends Component {
  state = {
    listToDisplay:false,
  }
  componentDidUpdate(){
    if (this.props.rankingList && !this.state.listToDisplay) {
      this.setState({listToDisplay:true})
    }
  }
  render() {
    let list = this.props.rankingList;
    let listRender
    let displayList
    if (list!= null && list.length > 0) {
     listRender = list.map((player, key) =>{
     return   <tr key={key}>
          <td>{player.rank}</td>
          <td>{player.name}</td>
          <td>{player.team}</td>
          <td>{player.byeWeek}</td>
          <td>{player.adp}</td>
        </tr>
      })
    }else{
      return <p> please select a position</p>
    }
    return (
      <div>
        <h2>{this.props.rankingTitle} Ranking</h2>
        <table>
        <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Team</th>
              <th>Bye Week</th>
              <th>ADP</th>
            </tr>
            {listRender}
          </tbody>
        </table>
      </div>
     );
  }
  static defaultProps = {
    rankingList : [],
    rankingTitle:''
  }
}

export default List;