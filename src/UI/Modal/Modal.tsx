import React, { FC } from "react";

import cl from "./modal.module.scss";
import cx from "classnames";

interface ModalProps {
  active: boolean;
  setActiveModal: (a: boolean) => void;
}

const Modal: FC<ModalProps> = ({ active, setActiveModal }) => {
  return (
    <div
      onClick={() => setActiveModal(false)}
      className={cx(cl.modal, { [cl.active]: active })}
    >
      <div
        className={cx(cl.modal__content, { [cl.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        Заполните обязательные поля формы.....
        <div className={cl.close} onClick={() => setActiveModal(false)}>
          ×
        </div>
      </div>
    </div>
  );
};

export default Modal;
