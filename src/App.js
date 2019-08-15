import React, { Component } from 'react';
import RANKINGS from './data/rankings'
import List from './components/List'

class App extends Component {
  state = {
    rankings:{},
    activeList:null,
    activeTitle:''
  }
  componentDidMount(){
    this.setState({rankings:{...RANKINGS}})
  }
  setList = ({title}) => {
    this.setState(
      {
        activeList:this.state.rankings[title],
        activeTitle:title
      }
    )
  }
  render() {
    const {
      qb, rb, wr, te, td, pk
    } = this.state.rankings;

    let headers = ['qb', 'rb', 'wr', 'te', 'td', 'pk']

    let titles = headers.map((title, key)=>{
      return <h2 key={key} onClick={() => this.setList({title})}>{title}</h2>
    })
    return (
      <div>
        {titles}
        <List rankingList={this.state.activeList} rankingTitle={this.state.activeTitle}/>
      </div>
      );
  }
}

export default App;
