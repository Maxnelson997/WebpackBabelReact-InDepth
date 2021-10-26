import Layout from './components/layout/layout';
import './style/main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch, Link } from 'react-router-dom';


class firstPage extends Component {
    render() { 
        return <div className='hmm'>
           <Link to='/stonks'>Stonks</Link>
        </div>
    }
 }


class secondPage extends Component {
    render() { 
        return <div className='hmm'>
            appl
            pltr
            tgt
        </div>
    }
 }

import { createBrowserHistory } from 'history';

let history = createBrowserHistory({})


ReactDOM.render(
    <Layout>
    <Router history={history}>
    
            <Switch>
                <Route path='/' exact component={firstPage}/>
                <Route path='/first' exact component={firstPage}/>
                <Route path='/stonks' exact component={secondPage}/>
                    {/* <PinterestGrid title='foto feed' photos={notFavoritedPhotos}/>
                    <PinterestGrid title='favorited' photos={favoritedPhotos}/> */}
            </Switch>

    </Router>
    </Layout>,
    document.getElementById('layout-wrapper')
)

module.hot.accept();