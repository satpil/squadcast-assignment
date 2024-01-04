interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  /**
   * Input component
   * @param {string} value - The value of the input.
   * @param {Function} onChange - The input onchange handler to call function.
   * @returns {JSX.Element} - The input component.
   */
  export const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
      <>
        <input placeholder="@mention" value={value} onChange={onChange} />
      </>
    );
  }