import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GET_USERS } from '../../API/constans'
import UserForm from '../../Components/UserForm/UserForm'
import Users from '../../Components/Users/Users'
import { IUser } from '../../types/types'
import Button, { BottonVariant } from '../../UI/Button/Button'
import Title from '../../UI/Title/Title'

import cl from './usersList.module.scss'

interface UsersListProps {

}

const UsersList: FC<UsersListProps> = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
console.log(users);

  async function FetchUsers () {
      try {
          setLoading(true)
          const response = await axios.get<IUser[]>(GET_USERS);
          setUsers(response.data)
      }
      catch(e) {
          setError(true)
          alert(e)
      }
      finally {
          setLoading(false)
      }
  }

  useEffect(() => {
      FetchUsers() 
  }, [])

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
            <Route path='/users' element={<Users users={users}/>}/>
            <Route path='/users/user' element={<UserForm />}/>
          </Routes>
      </div>
      
    </div>
  )
}

export default UsersList