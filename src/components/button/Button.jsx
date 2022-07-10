import './Button.scss';

const Button = ({
    text,
    onClick
}) => {

    return (
        <button className="button" onClick={onClick}>
            <div className="button__text">{text}</div>
        </button>
    )
}

export default Button;