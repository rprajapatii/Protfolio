import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Main } from './components/main'
import { Link } from 'react-router-dom'

export class App extends Component {
    render() {
        return (
            <div>
                <Layout fixedHeader>
                    <Header>
                        {/* <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/project">Work</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation> */}
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/" className='mdl-navigation__link'>            Home</Link>
                            <Link to="/project" className='mdl-navigation__link'>
                                Work</Link>
                            <Link to="/about" className='mdl-navigation__link'> About</Link>
                            <Link to="/contact" className='mdl-navigation__link'> Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content  className='container'>
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}
