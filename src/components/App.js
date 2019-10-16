import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: []
  };

  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;

        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(error => console.log(error + " something's wrong."));
  };

  render() {
    const users = this.state.users;
    return (
      <div className="App">
        <div>
          <h1 className="App-header">Add Random Users</h1>
          <p className="App-description">
            Task to practise REST API - I used React and fetch to load file from{" "}
            <a className="App-link" href="https://randomuser.me/">
              Random users generator
            </a>
            . It is simply app and you can find the code on{" "}
            <a
              className="App-link"
              href="https://github.com/Krystian2017/Random-users-fetch-click"
            >
              my GitHub account.
            </a>
          </p>
        </div>
        <div>
          <ButtonFetchUsers click={this.handleDataFetch} />
          {users.length > 0 ? <UsersList users={users} /> : users}
        </div>
      </div>
    );
  }
}

export default App;
