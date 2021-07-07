import React from 'react'
import ReactDOM from 'react-dom'
import Map from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Map />, element)};
	ReactDOM.unmountComponentAtNode(element);
});