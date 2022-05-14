import  { FC, Fragment, useState } from 'react';
import { IUser, IUsFormData } from '../../types/types';
import Button, { BottonVariant } from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';

import cl from './userForm.module.scss';
import cx from 'classnames';
import { UserKeys } from '../../API/constans';

interface UserFormProps  {
    users?: IUser[];
    id: number;
}

const UserForm :FC<UserFormProps> = ({users, id}) => {

    const [value, setValue] = useState()
    const [readOnly, setReadOnly] = useState(true)

    const handleEdit = () => {
        setReadOnly(false);
    }

    var usFormData: IUsFormData = {};
    users && users
            .filter((us) => us.id === id)
            .forEach((user) => {
                usFormData = {...usFormData, Name: user.name,
                                            Username: user.username,
                                            Email: user.email,
                                            Street: user.address.street,
                                            City: user.address.city,
                                            Zipcode: user.address.zipcode,
                                            Phone: user.phone,
                                            Website: user.website,
                                        }
            });


    return (
    <>
        <div className={cl.title__wrap}>
            <Title  fontSize='14px' 
                    fontWeight={700}
                    lineHeight='16.41px'>
                Профиль пользователя
            </Title>
            <Button variant={BottonVariant.blue} onclick={handleEdit}>Редактировать</Button>
        </div>
            <form  action="">
                <div className={cl.form}>
                    <div className={cl.us__wrap}>
                        {users && UserKeys.map((res, i) => {
                            return (
                                <Fragment key={i}>
                                    <div  className={cl.label}>
                                        {res}
                                    </div>
                                    <input readOnly={readOnly && readOnly} 
                                    className={cx(cl.inp, {[cl.edit]: !readOnly})} 
                                    type={res === "Email" 
                                    ? "email" : res === "Website"
                                    ? "url": res === "Phone"
                                    ? "tel": "text"}
                                    value={usFormData[res.replace(/\s+/g, '')]}
                                    />
                                </Fragment>
                            )
                        })}
                
                <label className={cl.label} htmlFor="com">Comment</label>
                <textarea readOnly={readOnly && readOnly}
                        style={{borderColor: '#D91313'}}
                        className={cx(cl.inp, cl.comm)}  id="com"  />
                </div>
                </div>
                <button disabled={readOnly && true}  type="submit">
                    <Button disabled={readOnly && true}
                            variant={BottonVariant.green} >
                                Отправить
                    </Button>
                </button>
            </form>
    </>
    )
}

export default UserForm