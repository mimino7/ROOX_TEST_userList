import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import cl from './userCard.module.scss'


interface UserCardProps {
    
}

const UserCard:FC <UserCardProps> = () => {
    return (
        <div className={cl.card__wrap}>
            <div className={cl.card__left}>
                <div className={cl.card__info}>
                    <span>ФИО:</span>  <p>Иван Иванов</p>  
                </div>
                <div className={cl.card__info}>
                    <span>город:</span>  <p>Москва</p>  
                </div>
                <div className={cl.card__info}>
                    <span>компания:</span>  <p>ООО "Пример"</p>  
                </div>
            </div>
            <div className={cl.card__right}>
                <div className={cl.card__info}>
                    <Link to="/users/user">Подробнее</Link>  
                </div> 
            </div>
        </div>
    )
}

export default UserCard