import React from 'react';
import SignUp from '../SignUp';


export default class Login extends React.Component {

	render() {
		const onClick = () => {
		//	this.props.login();
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
						<div id="inputs-section">
						
						<div class="field-wrap">
           					<label>Email Address<span class="req">*</span></label>
           						<input type="email"required autocomplete="off"/>
         				</div>
	   				 	<div class="field-wrap">
         					   <label>Password<span class="req">*</span></label>
         				   			<input type="password"required autocomplete="off"/>
         				</div>
						<tr>
							<td colSpan="2"><input id="getStarted" type="submit" value="Log Me In" onClick={onClick}/></td>
						</tr>
						</div>
				</tbody>
			</table>
		</div>
	);	
	}
}


