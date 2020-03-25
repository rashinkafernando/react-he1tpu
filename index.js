import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App.js';
import './style.css';

//New components
import Gallery from './photo_gallery.js';

render(<Gallery />, document.getElementById('root'));
