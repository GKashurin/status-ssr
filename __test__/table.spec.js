import React from 'react'
import ReactDOM from 'react-dom'
import Table from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Table />, element)};
	ReactDOM.unmountComponentAtNode(element);
});