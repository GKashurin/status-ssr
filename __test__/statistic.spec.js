import React from 'react'
import ReactDOM from 'react-dom'
import Statistic from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<Statistic />, element)};
	ReactDOM.unmountComponentAtNode(element);
});