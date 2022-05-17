import { FC, useEffect, useState } from "react";

import cx from "classnames";
import cl from "./input.module.scss";
import { IUsFormData } from "../../types/types";

interface InputProps {
  readOnly: boolean;
  res: string;
  usFormData: IUsFormData;
}

const Input: FC<InputProps> = ({ readOnly, res, usFormData }) => {
  const [isValid, setValid] = useState(true);
  const [value, setValue] = useState<string>("");

  let resForm = res.replace(/\s+/g, "");

  useEffect(() => {
    setValue(usFormData && isValid ? usFormData[resForm] : "");
  }, [usFormData, resForm, isValid]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    let enterStr = e.target.value;
    setValue(enterStr);
    enterStr.length ? setValid(true) : setValid(false);
  }

  return (
    <input
      name={resForm}
      onChange={handleValue}
      readOnly={readOnly && readOnly}
      className={cx(
        cl.inp,
        { [cl.edit]: !readOnly },
        { [cl.valid]: !isValid && !value }
      )}
      type={
        res === "Email"
          ? "email"
          : res === "Website"
            ? "url"
            : res === "Phone"
              ? "tel"
              : "text"
      }
      value={value === undefined ? "." : value}
    />
  );
};

export default Input;
