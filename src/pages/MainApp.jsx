import React from 'react';
import { SearchBar } from '../cmps/SearchBar/SearchBar';

export function MainApp(props) {




    return (
        <div style={{ paddingTop: '15%' }} className="main-app flex justify-center align-center">
            <SearchBar />
        </div>
    )
}