import axios from "axios";
import { FC, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GET_USERS, SORT_CITY, SORT_COMP } from "../../API/constans";
import UserForm from "../../Components/UserForm/UserForm";
import Users from "../../Components/Users/Users";
import { IUser } from "../../types/types";
import Button, { BottonVariant } from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";

import cl from "./usersList.module.scss";

interface UsersListProps { }

const UsersList: FC<UsersListProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [current, setCurrent] = useState(1);

  async function FetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get<IUser[]>(GET_USERS);
      setUsers(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useMemo(() => {
    console.log("fetch>>>>>");
    FetchUsers();
  }, []);

  function sorted(sort: string) {
    const usersSorted = [...users].sort(function (a, b) {
      let cityA = sort === "city" ? a.address.city : a.company.name,
        cityB = sort === "city" ? b.address.city : b.company.name;
      if (cityA < cityB) return -1;
      if (cityA > cityB) return 1;
      return 0;
    });
    setUsers(usersSorted);
  }

  function sortedCompany() {
    sorted(SORT_COMP);
  }
  function sortedCity() {
    sorted(SORT_CITY);
  }

  function handleId(id: number) {
    setCurrent(id);
  }

  return (
    <div className={cl.users__cont}>
      <div className={cl.users__left}>
        <div className={cl.left__cont}>
          <div className={cl.comp__wrap}>
            <Title>Сортировка</Title>
          </div>
          <div className={cl.comp__wrap}>
            <Button variant={BottonVariant.blue} onclick={sortedCity}>
              <Title>по городу</Title>
            </Button>
          </div>
          <div className={cl.comp__wrap}>
            <Button variant={BottonVariant.blue} onclick={sortedCompany}>
              <Title>по компании</Title>
            </Button>
          </div>
        </div>
      </div>
      <div className={cl.users__right}>
        <Routes>
          <Route
            path="/users"
            element={
              <Users
                handleId={handleId}
                loading={isLoading}
                error={isError}
                users={users}
              />
            }
          />
          <Route
            path="/users/user"
            element={<UserForm id={current} users={users} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default UsersList;
