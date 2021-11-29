import React, { Component } from 'react'
import Filters from './Filters';
import ProductTable from './ProductTable'
import ProductForm from './ProductForm';

let PRODUCTS = {
	'1': { id: 1, category: 'Electronic', price: '$899.99', name: 'TV' },
	'2': { id: 2, category: 'Electronic', price: '$1,000', name: 'Cellphone' },
	'3': { id: 3, category: 'Clothing', price: '$45.99', name: 'Levi Jeans' },
	'4': { id: 4, category: 'Clothing', price: '$19.99', name: 'Polo' },
	'5': { id: 5, category: 'Furniture', price: '$100', name: 'Tv Stand' },
	'6': { id: 6, category: 'Cosmetic', price: '$50', name: 'Lotion' }
};

class Products extends Component {

	state = { products: PRODUCTS }

	constructor(props) {
		super(props);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleDestroy(productId) {
		this.setState((prevState) => {
			let products = prevState.products;
			delete products[productId];
			return products;
		})
	}

	handleFilter(filterInput) {
		this.setState(filterInput);
	}

	handleSave(product) {
		if (!product.id) {
			product.id = new Date().getTime()
		}
		this.setState((prevState) => {
			let products = prevState.products
			products[product.id] = product
			return { products }
		});
	}

	render() {
		return (
			<div className="col-xl-4 col-lg-6">
				<h2>My Inventory</h2>
				<Filters onFilter={this.handleFilter} />
				<ProductTable filterText={this.state.filterText} products={this.state.products} destroy={this.handleDestroy} />
				<ProductForm onSave={this.handleSave} />
			</div>
		)
	}

}


export default Products;