/* import React from 'react';


export default class SignUp extends React.Component {

	render() {
		const onClick = () => {
			this.props.signup();
			console.log('rich');
		}
		return (
			 <div className='sign-up'>
				 <div className="SignUp" ref={el => (this.div = el)}></div>
				 <table className='sign-up-form'>
					<tbody>
						<div class="gecko-signup__tabs">	
							<input id="gecko-signup" value="Sign Up" onClick="" />
							<input id="gecko-login" value="Log In" onClick={loginClick} />
							<Link to="build/js/components/LogIn/index.jsx">Log In </Link>
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
						<div class="field-wrap">
           					<label>Email Address<span class="req">*</span></label>
           						<input type="email"required autocomplete="off"/>
         				</div>
	   				 	<div class="field-wrap">
         					   <label>Password<span class="req">*</span></label>
         				   			<input type="password"required autocomplete="off"/>
         				</div>
						<tr>
						 <td colSpan="2"><input id="getStarted" type="submit" value="Get Started" onClick={onClick}/></td> 
							<Link to="build/js/components/SignUp/index.jsx">Get Started</Link>
						</tr>
						</div>
				</tbody>
			</table>
		</div>
	);	
	}
}
 */
import React from 'react';
import Login from '../LogIn';
//import CoolTabs from 'react-cool-tabs';



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
							<td colSpan="2"><input id="getStarted" type="submit" value="Get Started" onClick={onClick}/></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}