import React from 'react';
import SignUp from '../SignUp';


export default class Login extends React.Component {

	render() {
		const onClick = () => {
			this.props.login();
			console.log('rich');
		}
		const mainSignUp = () => {
			this.props.toggleTabs()
		}
		return (
			 <div className='login'>
				 <div className="login" ref={el => (this.div = el)}></div>
				 <table className='sign-up-form'>
					<tbody>
						<div class="gecko-signup__tabs">
							<button id="gecko-signup" onClick={mainSignUp}>Sign Up</button>
							<button id="gecko-login" className="active">Log In</button>
						</div>
						<tr>
							<td>
								<p id="signUpFree">Welcome Back</p>
							</td>
						</tr>
						
						<tr>
							<td colSpan="2"><input placeholder="Email Address*" /></td>
						</tr>
						<tr>
							<td colSpan="2"><input placeholder="Set A Password*" /></td>
						</tr>
						
						<tr>
							<td colSpan="2"><input className="getStarted" type="submit" value="Log In" onClick={onClick}/></td>
						</tr>
						
				</tbody>
			</table>
		</div>
	);	
	}
}


