import React from 'react'
import SignIn from './LoginForm';

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        auth: {}
      };
      this.signIn = this.signIn.bind(this);
      this.logout = this.logout.bind(this);
    }
    logout() {
      window.localStorage.removeItem('token');
      this.setState({ auth: {} });
    }
    async attemptTokenLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data: auth } = await axios.get('/auth/me', {
          headers: {
            authorization: token
          }
        });
        this.setState({ auth })
      }
    }
    componentDidMount() {
      this.attemptTokenLogin();
    }

    async signIn(credentials) {
        console.log('dddddd')
      const response = await axios.post('/auth/login', credentials);
      const { token } = response.data;
      window.localStorage.setItem('token', token);
      this.attemptTokenLogin();
    }

    render() {
      const { auth } = this.state;
      const { signIn, logout } = this;

      if (!auth.id) {
        return <SignIn signIn={signIn} />
      }
      else {
        return (
          <div>
            Welcome {auth.username} !
            <button onClick={logout}>Logout</button>
            
          </div>
        );
      }
    }
  }

  //export default Login