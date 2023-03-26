import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Input } from "../atoms/Input";
import { Option, Select } from "../atoms/Select";

export function SearchForm() {
  const [categories, setCategories] = useState<Option[]>([]);

  async function getCategories() {
    try {
      const res = await fetch("/api/categories", {
        method: "GET",
      });

      const jsonResponse = await res.json();

      setCategories(jsonResponse);
    } catch (err) {
      throw new Error("err");
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <form className="search__form">
      <Input
        placeholder="Number of questions"
        icon={<QuestionMarkCircleIcon />}
      />
      <Select placeholder="Category" options={categories} />
      <Select
        placeholder="Difficulty"
        options={[
          {
            value: "any",
            text: "Any difficulty",
          },
          {
            value: "easy",
            text: "Easy",
          },
          {
            value: "medium",
            text: "Medium",
          },
          {
            value: "hard",
            text: "Hard",
          },
        ]}
      />
      <button className="btn btn__play">Play!</button>
    </form>
  );
}
