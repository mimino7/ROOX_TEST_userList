import React, { FC, Fragment, useState } from "react";
import { IUser, IUsFormData } from "../../types/types";
import Button, { BottonVariant } from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";

import cl from "./userForm.module.scss";
import cx from "classnames";
import { UserKeys } from "../../API/constans";
import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";

interface UserFormProps {
  users?: IUser[];
  id: number;
}

const UserForm: FC<UserFormProps> = ({ users, id }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [activeModal, setActiveModal] = useState(false);

  const handleEdit = () => {
    setReadOnly(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let com = event.currentTarget.comments.value;

    let obj = {};
    for (let [key, value] of formData.entries() as any) {
      // if (!value && com === "") return setActiveModal(true);
      if (key !== "comments") {
        if (!value && com === "") return setActiveModal(true);
      }
      obj = { ...obj, [key.toLowerCase()]: value };
    }
    console.log(JSON.stringify(obj));
  };

  var usFormData: IUsFormData = {};
  users &&
    users
      .filter((us) => us.id === id)
      .forEach((user) => {
        usFormData = {
          ...usFormData,
          Name: user.name,
          Username: user.username,
          Email: user.email,
          Street: user.address.street,
          City: user.address.city,
          Zipcode: user.address.zipcode,
          Phone: user.phone,
          Website: user.website,
        };
      });

  return (
    <>
      <Modal setActiveModal={setActiveModal} active={activeModal} />
      <div className={cl.title__wrap}>
        <Title fontSize="14px" fontWeight={700} lineHeight="16.41px">
          Профиль пользователя
        </Title>
        <Button variant={BottonVariant.blue} onclick={handleEdit}>
          Редактировать
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={cl.form}>
          <div className={cl.us__wrap}>
            {users &&
              UserKeys.map((res, i) => {
                return (
                  <Fragment key={i}>
                    <label className={cl.label}>
                      {res}
                      <br />
                      <Input
                        readOnly={readOnly}
                        res={res}
                        usFormData={usFormData}
                      />
                    </label>
                  </Fragment>
                );
              })}
            <label className={cl.label} htmlFor="com">
              Comment
              <textarea
                name="comments"
                readOnly={readOnly && readOnly}
                className={cx(cl.inp, cl.comm)}
                id="com"
              />
            </label>
          </div>
        </div>
        <button disabled={readOnly && true} type="submit">
          <Button disabled={readOnly && true} variant={BottonVariant.green}>
            Отправить
          </Button>
        </button>
      </form>
    </>
  );
};

export default UserForm;
