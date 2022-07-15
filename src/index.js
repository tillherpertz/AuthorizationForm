import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let isLogged;
    
    if (this.state.authorized == true){
      isLogged = 'Contact'
    } else {
      isLogged = 'Enter the Password'
    }
    
    const login = (
      <form onSubmit={this.authorize} action="#">
        <input type="password" placeholder="Password"></input>
        <input type="submit"></input>
      </form>
    );

    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{isLogged}</h1>
        {this.state.authorized == true ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('root')
);