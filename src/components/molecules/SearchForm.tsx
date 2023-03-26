import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";

export function SearchForm() {
  return (
    <form className="search__form">
      <Input
        placeholder="Number of questions"
        icon={<QuestionMarkCircleIcon />}
      />
      <Select
        placeholder="Category"
        options={[
          {
            text: "2",
            value: "2",
          },
        ]}
      />
      <Select
        placeholder="Difficulty"
        options={[
          {
            text: "2",
            value: "2",
          },
        ]}
      />
    </form>
  );
}
