import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'

import cl from './someMaine.module.scss'

interface SomeMaineProps {

}

const SomeMaine: FC<SomeMaineProps> = () => {
  return (
    <div className={cl.container}>
      <div className={cl.content__up}>
        <div className={cl.up__title}>
        <h2>Какой-то контент</h2>
        </div>
        <div className={cl.up__menu}>
          <ul>
            <Link to = '/'>
              <Button disabled>какая-то страница</Button>
            </Link>
            <Link to = '/users'>
            <Button >пользователи</Button>
            </Link>
            <Link to = '/'>
            <Button disabled >какая-то страница</Button>
            </Link>
          </ul>
          </div>
      </div>
      <div className={cl.content__bot}>
        <div className={cl.cont}>
        Какой-то контент
        </div>
        <div className={cl.cont}>
        Какой-то контент
        </div>
      </div>
      </div>
  )
}

export default SomeMaine