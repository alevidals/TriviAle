import type { ComponentPropsWithoutRef } from "react";

type Variants = "play" | "answer";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant: Variants;
};

type ClassNames = Record<Variants, string>;

export function Button(props: ButtonProps) {
  const { variant, children, ...rest } = props;

  function getClassName() {
    const classNames: ClassNames = {
      play: "btn__play",
      answer: "btn__answer",
    };

    return classNames[variant];
  }

  return (
    <button
      {...rest}
      className={`btn ${getClassName()}`}
      dangerouslySetInnerHTML={{ __html: props.children?.toString() ?? "" }}
    />
  );
}
