import { useCallback, useState } from "react";
import "./MentionInput.style.css";
import data from  "../helper/data.json";
import { Input } from "../components/Input";
import { SelectBox } from "./selectBox";

export function MentionInput() {
  const [value, setValue] = useState<string>("");
  const [isSelectBox, setIsSelectBox] = useState<boolean>(false);
  const [mentionData, setMentionData] = useState<object[]>(data);

  /**
   * Handles the input change event.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const inputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let val = event.target.value;
      const atIndex = val.lastIndexOf("@");
      if (atIndex !== -1) {
        setIsSelectBox(true);
        const searchText = val.substring(atIndex + 1);
        checkName(searchText);
      } else {
        setIsSelectBox(false);
      }

      setValue(val);
    },
    []
  );

  /**
   * Checks the name for mention data and updates the mention data state.
   * @param {string} text - The text to search for in the mention data.
   */
  const checkName = (text: string) => {
    const filterData = data.filter((item) => item.name.includes(text));
    if (filterData.length === 0) {
      setIsSelectBox(false);
    }
    setMentionData(filterData);
  };

  return (
    <>
    <div className="main">
      <Input value={value} onChange={inputHandler} />
      {isSelectBox && (
        <SelectBox
          data={mentionData}
          setValue={setValue}
          setIsSelectBox={setIsSelectBox}
        />
      )}
      </div>
    </>
  );
}
