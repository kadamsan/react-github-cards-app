import './App.css';
import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends React.Component {

  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            {this.props.title}
          </h3>
          <p>
           GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
          </p>
          <Form onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
        </header>

      </div>
    );
  }
}

export default App;
