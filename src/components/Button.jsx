

const Button = ({btnText , className}) => {
    return (
        <button className={`cursor-pointer duration-300 ${className}`}>{btnText}</button>
    )
}

export default Button