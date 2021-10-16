import React from 'react';
import Contacts from '../Contact/components/Contacts/Contacts';
import Gallerys from './components/Gallery/Gallerys/Gallerys';
import HomeServices from './components/HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <HomeServices></HomeServices>
            <Gallerys></Gallerys>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;