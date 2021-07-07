import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages/index";

it('render without crashing', () => {
	const element = document.createElement('div');
	ReactDOM.render(<Home />, element);
	ReactDOM.unmountComponentAtNode(element);
});