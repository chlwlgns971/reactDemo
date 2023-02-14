import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import Nav from './component/header/nav';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
const main = ReactDOM.createRoot(document.getElementById('main'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

nav.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

main.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)