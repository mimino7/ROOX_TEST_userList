import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../types/types";
import Title from "../../UI/Title/Title";

import cl from "./users.module.scss";

interface UsersProps {
  users: IUser[];
  loading: boolean;
  error: boolean;
  handleId: (id: number) => void;
}

const Users: FC<UsersProps> = ({ users, loading, error, handleId }) => {
  var k = 0;

  return (
    <div className={cl.cont__right}>
      <Title fontSize="14px" fontWeight={700} lineHeight="16.41px">
        &nbsp; Список пользователей
      </Title>
      {loading && (
        <div className={cl.load_wrap}>
          <CircularProgress color="inherit" />
        </div>
      )}
      {error && (
        <div className={cl.load_wrap}>
          <CircularProgress color="inherit" />
          <span>AxiosError: Network Error</span>
        </div>
      )}
      {users &&
        !error &&
        users.map((us) => {
          k++;
          return (
            <div key={us.id} className={cl.card__wrap}>
              <div className={cl.card__left}>
                <div key={us.id} className={cl.card__info}>
                  <span>ФИО:</span> <p>{us.name}</p>
                </div>
                <div className={cl.card__info}>
                  <span>город:</span> <p>{us.address.city}</p>
                </div>
                <div className={cl.card__info}>
                  <span>компания:</span> <p>{us.company.name}"</p>
                </div>
              </div>
              <div className={cl.card__right}>
                <div onClick={() => handleId(us.id)} className={cl.card__info}>
                  <Link to="/users/user">Подробнее</Link>
                </div>
              </div>
            </div>
          );
        })}
      <div className={cl.list__wrap}>
        <Title>Найдено {k} пользователей</Title>
      </div>
    </div>
  );
};

export default Users;
