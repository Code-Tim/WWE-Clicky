import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends: friends,
    selected: [],
    score: 0,
    gameOver: false
  }
  reset = () => {
    this.setState({
      friends: friends,
      selected: [],
      score: 0,
      gameOver: false
    })
  }
  handleRandom = (name) => {

    console.log(name)
    let clickedFriend = this.state.friends.find(friend => friend.name == name)
    console.log(clickedFriend)
    // check if they've been clicked already
    let selectedAlreadyIndex = this.state.selected.findIndex(name => name == clickedFriend)
    console.log(selectedAlreadyIndex)
    // notify state who'se been clicked
    // this.setState({ selected: [...this.state.selected, clickedFriend] }, () => console.log(this.state.selected))
    //if so, handle loss
    if (selectedAlreadyIndex >= 0) {
      console.log("you lose")
      this.reset()
    } else {
      //else they didn't lose so shuffle, 
      //add score
      let newScore = this.state.score + 1
      // for loop
      // rnadmo target 
      // swap function
      let randomFriends = new Array(... this.state.friends)// avoid shallow copy/ Object.is() bug
      for (let index = 0; index < randomFriends.length; index++) {
        const montyCard = randomFriends[index];
        const randomNum = Math.floor(Math.random() * randomFriends.length)
        const randoCard = randomFriends[randomNum]
        let temp = montyCard
        randomFriends[index] = randoCard
        randomFriends[randomNum] = temp


      }
      this.setState({ friends: randomFriends, score: newScore, selected: [...this.state.selected, clickedFriend] }, () => console.log(this.state.friends))
    }
  }

  //componentDidMount is like useEffect
  render() {
    return (
      <Wrapper>
        <h1 className="title">WWE Clicky Game</h1>
        {(this.state.score == 12) && (<><div className="scoreCard"><img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/championship/Belt_Retired/WWE_Heavyweight.png" /></div><h1 className="scoreCard" id="move">You Won</h1></>)}
        <h3 className="title">Try to click all without clicking any twice</h3>
        <div className="scoreCard"><h5>Score: {this.state.score}</h5></div>
        {this.state.friends.map((friend, i) => (
          <FriendCard
            key={i}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            func={this.handleRandom}
          />))}
      </Wrapper>
    );
  }
}

export default App;