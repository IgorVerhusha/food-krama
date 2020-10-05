import React from "react";
import classNames from 'classnames';

export const Button = ({className, onClick, children, outline}) => {

  return (
    <button className={classNames("button", className, {"button--outline":outline})} onClick={onClick}>
        {children}
    </button>
  );
};
