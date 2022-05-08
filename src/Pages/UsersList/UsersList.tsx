import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserForm from '../../Components/UserForm/UserForm'
import Users from '../../Components/Users/Users'
import Button, { BottonVariant } from '../../UI/Button/Button'
import Title from '../../UI/Title/Title'

import cl from './usersList.module.scss'

interface UsersListProps {

}

const UsersList: FC<UsersListProps> = () => {
  return (
    <div className={cl.users__cont}>
      <div className={cl.users__left}>
        <div className={cl.left__cont}>
          <div className={cl.comp__wrap}>
            <Title>Сортировка</Title>
          </div>
          <div className={cl.comp__wrap}>
              <Button variant={BottonVariant.blue}>
                <Title>по городу</Title>
              </Button>
          </div>
          <div className={cl.comp__wrap}>
              <Button variant={BottonVariant.blue}>
                <Title>по компании</Title>
              </Button>
          </div>
        </div>
      </div>
      <div className={cl.users__right}>
          <Routes>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/user' element={<UserForm />}/>
          </Routes>
      </div>
      
    </div>
  )
}

export default UsersList