import React from 'react'
import preloader from "../../assets/img/preloader.gif"
import styles from "./Preloader.module.css"


export const Preloader = () => (
    <div className={styles.preloaderContainer}>
        <img className={styles.img} src={preloader}/>
    </div>
)


