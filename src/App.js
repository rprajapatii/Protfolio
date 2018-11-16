import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Layout fixedHeader>
              <Header title={<span><span style={{ color: '/ddd' }}>Area / </span><strong>The Title</strong></span>}>
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/">Work</a>
                      <a href="/">About</a>
                      <a href="/">Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/">Work</a>
                      <a href="/">About</a>
                      <a href="/">Contact</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
