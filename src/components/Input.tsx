import { cloneElement, ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  icon?: JSX.Element;
};

export function Input(props: InputProps) {
  return (
    <div className="input__field">
      <input {...props} />
      <label htmlFor={props.name}>{props.placeholder}</label>
      {props.icon && cloneElement(props.icon, { className: "input__icon" })}
    </div>
  );
}
