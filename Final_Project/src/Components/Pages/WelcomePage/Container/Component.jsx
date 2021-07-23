import React from 'react';
import { Form } from '../Form';


export function Welcome(props) {


    return (
        <main className='welcome-page container'>
            <section>
                <div className='welcome-page-header-wrapper header-wrapper_h2'>
                    <h2 className='header-s2'>Welcome to RETRO-WAVE-MMG</h2>
                </div>
                <Form />
            </section>
        </main>
    )

}