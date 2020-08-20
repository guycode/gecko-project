import React from 'react';
import SignUp from '../SignUp';


export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestedPostsThatWeGotFromGecko: [],
		}
	}
	componentDidMount(){
		const api = 'https://5d445466d823c30014771642.mockapi.io/api/v1/products';
		const request = new Request(api);
		fetch(request)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				};
			}).then(response => {
				 
				this.setState({
					requestedPostsThatWeGotFromGecko: response,
					products: true
				});
				console.log(this.state);
			})
			.catch(error => {
				console.error(error);
			});
	}
	render() {
		return(
			<div className='articles'>
				
				{this.state.requestedPostsThatWeGotFromGecko.map(product => {
					return (
						<div className='flex-grid'>
							<div className="card">
									<div className="overflow">
										<img className='productImage' src={product.image}></img>
									</div>
									<div className='card-body'>
										<p id='name'>{product.name}</p>
										<p id='description'>{product.description}</p>
										<p id='price'>{product.price} </p>
									</div>
							
							</div>
						</div>
	);
	})
}
</div>
		)}}

