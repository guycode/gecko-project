import React from 'react';
import SignUp from '../SignUp';
import Cards from '../Articles/Cards';
import Login from '../LogIn';


export default class Gecko extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			requestedPostsThatWeGotFromGecko: null,
			loginStatus: "loginHide"
		}

		this.currentUser = this.currentUser.bind(this)
		this.clickMe = this.clickMe.bind(this)
  	}

  	currentUser = () => {
		const {loginStatus} = this.state;
		this.setState({ loginStatus: !loginStatus})
	}

	toggleTabs = () => {
		this.setState(state => {
			return {
				loginStatus: state.loginStatus === 'loginShow' ? 'loginHide' : 'loginShow'
			}
		});
	}

	clickMe = () => {
		const {requestedPostsThatWeGotFromGecko} = this.state;

		this.setState({
			requestedPostsThatWeGotFromGecko: !requestedPostsThatWeGotFromGecko
		})
	}

	render() {
		const { requestedPostsThatWeGotFromGecko } = this.state;
		const { loginStatus } = this.state;

		return (
			<div className="gecko">
			 {requestedPostsThatWeGotFromGecko ? (
			   <Cards />
			 ): (
				 <>
					 { loginStatus === 'loginHide' && <SignUp toggleTabs={this.toggleTabs} login={() => this.clickMe()} /> }
					 { loginStatus === 'loginShow' && <Login toggleTabs={this.toggleTabs} login={() => this.clickMe()} /> }
				 </>
				)
			}
		   </div>
		 );
	  }
}
