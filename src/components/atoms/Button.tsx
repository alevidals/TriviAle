import type { ComponentPropsWithoutRef } from "react";
import sanitizeHTML from "sanitize-html";

type Variants = "play" | "answer";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant: Variants;
};

type ClassNames = Record<Variants, string>;

export function Button(props: ButtonProps) {
  const { className, variant, children, ...rest } = props;

  function getClassName() {
    const classNames: ClassNames = {
      play: "btn__play",
      answer: "btn__answer",
    };

    return classNames[variant];
  }

  return (
    <button {...rest} className={`btn ${getClassName()} ${className}`}>
      {sanitizeHTML(props.children?.toString() ?? "")}
    </button>
  );
}
