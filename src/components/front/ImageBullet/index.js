import React from 'react';
import styles from './styles.module.css'

export default ({children, image, alt}) => {
    return <div className={styles.columns}>
    	<div className={styles.left}>
	        <img src={image} alt={alt} />
    	</div>
        <div className={styles.right}>
            {children}
        </div>
    </div>
}