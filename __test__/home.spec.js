import React from 'react'
import ReactDOM from 'react-dom'
import Home from "../pages";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Home />, element)};
	ReactDOM.unmountComponentAtNode(element);
});