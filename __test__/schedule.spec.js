import React from 'react'
import ReactDOM from 'react-dom'
import Schedule from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Schedule />, element)};
	ReactDOM.unmountComponentAtNode(element);
});