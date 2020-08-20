import React from 'react';
import Articles from './CardSetup';

export default class Cards extends React.Component {

	render() {
		return(
			
			<div className="cards">
				<h2>Products</h2>
					<div className="column">
						<Articles />
					</div>
					<div className="column">
						<Articles />
					</div>
					<div className="column">
						<Articles />
					</div>
					<div className="column">
						<Articles />
				</div>
			</div>
		);
	}
}

//export default Cards;