import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';


export default function LandingPage() {
    return (
        <main className={style.all}>
            <Link to='/Home' className={style.imgC}>
                <div className={style.button}>  </div>
            </Link>
        </main>
    )
};
