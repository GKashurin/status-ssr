import React from 'react'
import ReactDOM from 'react-dom'
import TimeLine from "../components/";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<TimeLine />, element)};
	ReactDOM.unmountComponentAtNode(element);
});