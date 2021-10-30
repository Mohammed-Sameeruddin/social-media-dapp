import React from 'react';
import Layout from './Components/Layout';
import Header from './Components/Header';
import {Switch,Route,Redirect} from 'react-router-dom';
import Post from './Components/Post';



const App = () => {
    
    return (
        <>
        <Header />
        <Switch>
            <Route exact path='/' component={Layout} />
            <Route exact path='/post' component={Post} />
            <Redirect to='/' />
        </Switch>
        

        </>
    );
}

export default App;