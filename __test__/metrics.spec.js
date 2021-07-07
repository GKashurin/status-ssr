import React from 'react'
import ReactDOM from 'react-dom'
import Metrics from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Metrics />, element)};
	ReactDOM.unmountComponentAtNode(element);
});