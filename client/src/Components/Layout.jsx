import React from 'react';
import DemoCard from './DemoCard';
import Side from './Side';
import Footer from './Footer';


const Layout = () => {
    return(
        <>
        <div class="container">
        <div class="row no-gutters">
        <div class="col-12 col-sm-6 col-md-7"><DemoCard /></div>
        <div class="col-6 col-md-5"><Side /></div>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default Layout;