import React from 'react'
import Title from '../../UI/Title/Title'
import UserCard from '../../UI/UserCard/UserCard'

import cl from './users.module.scss' 

const Users = () => {
    return (
    <div className={cl.cont__right}>
        <Title fontSize='14px' fontWeight={700} lineHeight='16.41px'>&nbsp; Список пользователей</Title>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <div className={cl.list__wrap}>
        <Title >Найдено 10 пользователей</Title>
        </div>
    </div>

    )
}

export default Users