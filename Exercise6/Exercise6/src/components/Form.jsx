export default function Form({
  name,
  htmlFor,
  type,
  title,
  value,
  onChangeNum1,
  onChangeNum2,
  onChangeOperator,
}) {
  const handleChange = (e) => {
    value = e.target.value;
    name == "num1"
      ? onChangeNum1(value)
      : name == "num2"
      ? onChangeNum2(value)
      : onChangeOperator(value);
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor={htmlFor}>{title}: </label>
        </div>
        <div>
          <input
            name={name}
            htmlFor={htmlFor}
            type={type}
            title={title}
            value={value}
            onChange={handleChange}
            className="Form-input"
          />
        </div>
      </div>
    </>
  );
}
