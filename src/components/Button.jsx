import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";

export default function Button({handleClick, isOpen}) {
    return (
        <button onClick={handleClick} className="button">
            { isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
        </button>
    );
}