import { Dispatch, SetStateAction } from "react";
import { DataItem } from "../helper/data";

interface InputProps {
  data: DataItem[];
  setValue: Dispatch<SetStateAction<string>>;
  setIsSelectBox: Dispatch<SetStateAction<boolean>>;
}

/**
 * SelectBox component to display a select box
 * @param {InputProps} props - The props for the SelectBox component
 * @returns {JSX.Element} - The SelectBox component
 */
export const SelectBox: React.FC<InputProps> = ({
  data,
  setValue,
  setIsSelectBox,
}) => {
  /**
   * Handler for selecting a name
   * @param {string} selectedName - The selected name
   */
  const selectNameHandler = (selectedName: string) => {
    setValue((prevValue) => {
      const atIndex = prevValue.lastIndexOf("@");
      const prefix = prevValue.substring(0, atIndex + 1);
      return prefix + selectedName;
    });
    setIsSelectBox(false);
  };

  return (
    <>
      <div className="container">
        {data?.map((item) => (
          <div
            className="item"
            key={item.id}
            onClick={() => selectNameHandler(item?.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};
