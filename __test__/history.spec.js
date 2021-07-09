import React from 'react'
import ReactDOM from 'react-dom'
import History from "../pages/history";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<History />, element)};
	ReactDOM.unmountComponentAtNode(element);
});