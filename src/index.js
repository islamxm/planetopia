import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './styles/global.scss';
import './styles/vars.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

