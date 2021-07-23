import React from 'react';
import { Header } from './HeaderCmp/'
import GameCmp from './GameCmp'
import { Footer } from './FooterCmp';
import './style.scss'

export function Game(props) {



    return (
        <main className='game-page container'>
            <section className="game-pg-section section">
                <Header />
                <GameCmp />
                <Footer />
            </section>
        </main>
    )
}