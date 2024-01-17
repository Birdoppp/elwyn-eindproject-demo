export default function Aside({isOpen}) {

    return (
        <div className={`aside ${ isOpen ? "aside--isOpen" : "aside--isClosed"}` }>
            Aside
        </div>
    );
}