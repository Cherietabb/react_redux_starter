import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
	<AppContainer>
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={} />
				</div>
			</BrowserRouter>
		</Provider>
	</AppContainer>
	, document.querySelector('.container'));