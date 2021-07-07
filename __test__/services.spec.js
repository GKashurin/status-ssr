import React from 'react'
import ReactDOM from 'react-dom'
import Services from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Services />, element)};
	ReactDOM.unmountComponentAtNode(element);
});