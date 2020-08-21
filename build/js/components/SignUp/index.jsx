import React from 'react';
import Login from '../LogIn';

export default class SignUp extends React.Component {

	render() {
		const onClick = () => {
			this.props.login();
			console.log('rich');
		}

		const mainLogIn = () => {

			this.props.toggleTabs()

		}
		return (
			<div className='sign-up'>
				<table className='sign-up-form'>
					<tbody>
					<div class="gecko-signup__tabs">
						<button id="gecko-signup" className="active" >Sign Up</button>
						<button id="gecko-login" onClick={mainLogIn}>Log In</button>
					</div>
						<tr>
							<td>
								<p id="signUpFree">Sign Up for Free</p>
							</td>
						</tr>
						<div id="inputs-section">
							<tr>
								<td><input id="first" placeholder="First Name*" /></td>
								<td><input id="last" placeholder="Last Name*" /></td>
							</tr>
						</div>
						<tr>
							<td colSpan="2"><input placeholder="Email Address*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input placeholder="Set A Password*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input className="getStarted" type="submit" value="Get Started" onClick={onClick}/></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}