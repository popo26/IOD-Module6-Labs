export default function Form({name, htmlFor, type, title, onNum1}){

    const handleChange =(e) => {

        onNum1(e.target.value);
    }
    return (
        <>
            <label htmlFor={htmlFor}>{title}: </label>
            <input name={name} type={type} onClick={handleChange}></input>
        </>
    )
}