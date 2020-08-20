import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Gecko from './components/Gecko';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDom.render(
//	<BrowserRouter>
	<Gecko />,
//	</BrowserRouter>,
	document.getElementById('root')
);
