import React from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        console.log('STATE ', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                //console.log('error', err);
                this.setState({error : err})
            })
    }

    render(){
        return(
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>SignUp</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        type="password"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signUp()}
                    >Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div> <Link to={'/signin'}>Already a user? Sign in instead</Link> </div>
            </div>
        )
    }
}

export default SignUp;
