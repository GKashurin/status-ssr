import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from "../components/MainContainer";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render = () => {(<MainContainer />, element)};
	ReactDOM.unmountComponentAtNode(element);
});