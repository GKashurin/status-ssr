import React from 'react'
import ReactDOM from 'react-dom'
import Button from "../components/Button";

it('render without crashing', () => {
	const element = document.createElement('button');
	ReactDOM.render = () => {(<Button />, element)};
	ReactDOM.unmountComponentAtNode(element);
});