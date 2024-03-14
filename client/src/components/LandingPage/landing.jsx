import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';


export default function LandingPage() {
    return (
        
        <section className={style.section}>
            <div className={style.conteiner}>
            <Link to='/Home' className={style.imgC}> 
            <p>click to enter</p>
            </Link>
            </div>
        </section>
    )
};
