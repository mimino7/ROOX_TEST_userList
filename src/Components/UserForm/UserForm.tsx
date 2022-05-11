import  { FC } from 'react';
import { IUser } from '../../types/types';
import Button, { BottonVariant } from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';

import cl from './userForm.module.scss';
import cx from 'classnames';

interface UserFormProps  {
    users?: IUser[]
}

const UserForm :FC<UserFormProps> = ({users}) => {
    return (
    <>
        <div className={cl.title__wrap}>
            <Title  fontSize='14px' 
                    fontWeight={700}
                    lineHeight='16.41px'>
                Профиль пользователя
            </Title>
            <Button variant={BottonVariant.blue}>Редактировать</Button>
        </div>
            <form  action="">
                <div className={cl.form}>
                    <div className={cl.us__wrap}>
                <label className={cl.label} htmlFor="name">Name</label>
                <input className={cl.inp} type="text" id="name" value={'Иван Иванов'} />
                <label className={cl.label} htmlFor="usname">User name</label>
                <input className={cl.inp} type="text" id="usname" value={'Ivan'} />
                <label className={cl.label} htmlFor="mail">Email</label>
                <input className={cl.inp} type="email" id="mail" value={'example@mail.com'} />
                <label className={cl.label} htmlFor="str">Street</label>
                <input className={cl.inp} type="text" id="str" value={'ул. Пример'} />
                <label className={cl.label} htmlFor="city">City</label>
                <input className={cl.inp} type="text" id="city" value={'Москва'} />
                <label className={cl.label} htmlFor="zip">Zip code</label>
                <input className={cl.inp} type="number" id="zip" value={'123456'} />
                <label className={cl.label} htmlFor="tel">Phone</label>
                <input className={cl.inp} type="tel" id="tel" value={'7923456'} />
                <label className={cl.label} htmlFor="url">Website</label>
                <input className={cl.inp} style={{borderColor: '#D91313'}} type="url" id="url" value={'www.example.com'} />
                <label className={cl.label} htmlFor="com">Comment</label>
                <textarea className={cx(cl.inp, cl.comm)}  id="com"  />
                </div>
                </div>
                <button disabled  type="submit">
                    <Button disabled>Отправить</Button>
                </button>
            </form>
    </>
    )
}

export default UserForm