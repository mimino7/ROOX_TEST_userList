import React, { FC } from "react";

interface TitleProps {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  children: React.ReactNode;
}
const Title: FC<TitleProps> = ({
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  children,
}) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Title;
