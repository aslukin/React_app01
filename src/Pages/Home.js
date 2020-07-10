import React from 'react';
import {Form} from './../Components/form';
import { Notes } from '../Components/Notes';
import { Alert } from '../Components/Alert';


export const Home = () => {

    const notes = new Array(10).fill().map((_, i) => ({id: i, title: `Note ${i + 1}`}))
    return (
        <div>
            <div>
                <Alert />
            </div>
            <div>
                <Form />
            </div>
            <hr/>
            <div>
                <Notes notes = {notes} />
            </div>

        </div>
    );

}