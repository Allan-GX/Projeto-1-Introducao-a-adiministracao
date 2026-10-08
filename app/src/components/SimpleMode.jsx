const SimpleToggle = ({simple,setSimple}) => {

    function handleToggle(){
        if (simple == 0) {
            setSimple(1);
        } else {
            setSimple(0);
        }
    }

    return(
        <div className="hub-button">
            <label htmlFor="Simple">Modo simples:</label>
            <input type="checkbox" id="Simple" onInput={handleToggle} name="simple"/>
        </div>
    );
}

export default SimpleToggle;