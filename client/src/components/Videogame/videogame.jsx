import React from 'react';
import { Link } from 'react-router-dom';
import style from './videogame.module.css';




const Videogame = ({ id, name, background_image, genres, rating }) => {


    return (
        <div className={style.conteiner}>
            <div className={style.card}>
                <img src={background_image} alt={name} className={style.img} />
                <h2 className={style.textname}> {name}</h2>
                <p className={style.generos}>Genres: {genres}</p>
                <p className={style.rating}>Rating: {rating}</p>
                <Link to={`/detail/${id}`} className={style.link} >
                    <button className={style.boton}>-More Info-</button>
                </Link>
            </div>
        </div>
    )



};

export default Videogame;