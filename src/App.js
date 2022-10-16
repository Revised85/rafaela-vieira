import React, { Component, Fragment } from 'react';
import './style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <nav className="nav-social">
          <i class="bi bi-instagram" />
          <i class="bi bi-facebook" />
          <i class="bi bi-tiktok" />
        </nav>
        <div className="page-container">
          <div className="page-header">
            <h1>Rafaela Vieira</h1>
            <p>Terapeuta Holistica</p>
          </div>
          <nav className="nav-bar">
            <ul>
              <li>
                <a href="" className="nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="" className="nav-item">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="nav-item">
                  Pages
                </a>
              </li>
              <li>
                <a href="" className="nav-item">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="nav-item">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
  }
}
