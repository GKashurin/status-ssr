import React from 'react'
import ReactDOM from 'react-dom'
import Footer from "../components/";

it('render without crashing', () => {
	const element = document.createElement('footer');
	ReactDOM.render = () => {(<Footer />, element)};
	ReactDOM.unmountComponentAtNode(element);
});