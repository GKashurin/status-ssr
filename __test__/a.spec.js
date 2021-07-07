
import React from 'react'
import ReactDOM from 'react-dom'
import A from "../components/A";

it('render without crashing', () => {
	const element = document.createElement('a');
	ReactDOM.render = () => {(<A />, element)};
	ReactDOM.unmountComponentAtNode(element);
});