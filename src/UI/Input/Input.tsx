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
  let resForm = res.replace(/\s+/g, "");
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(usFormData && usFormData[resForm]);
  }, [usFormData, resForm]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <input
      name={resForm}
      onChange={handleValue}
      readOnly={readOnly && readOnly}
      className={cx(cl.inp, { [cl.edit]: !readOnly })}
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
