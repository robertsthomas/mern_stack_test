import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'reactstrap'

import AppNav from './components/AppNav';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<AppNav />
					<Container>
						<ItemModal />
						<ShoppingList />
					</Container>
				</div>
			</Provider>
		)
	}
}
