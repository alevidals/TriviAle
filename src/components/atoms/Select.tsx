import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ComponentPropsWithoutRef } from "react";

type Option = {
  value: string;
  text: string;
};

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  options: Option[];
};

export function Select(props: SelectProps) {
  const { options, ...rest } = props;

  return (
    <div className="select__field">
      <select {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <label htmlFor={rest.name}>{rest.placeholder}</label>
      <ChevronDownIcon className="select__icon" />
    </div>
  );
}
