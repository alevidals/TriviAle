type Variant = "total" | "right" | "wrong";

type StatProps = {
  title: string;
  number: number;
  variant: Variant;
};

type ClassNames = Record<Variant, string>;

export function Stat(props: StatProps) {
  function getClassName() {
    const classNames: ClassNames = {
      total: "stat__total",
      right: "stat__right",
      wrong: "stat__wrong",
    };

    return classNames[props.variant];
  }

  return (
    <div className={`stat ${getClassName()}`}>
      <p>{props.title}</p>
      <span>{props.number}</span>
    </div>
  );
}
