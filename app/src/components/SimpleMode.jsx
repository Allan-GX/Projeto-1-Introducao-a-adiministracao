const SimpleToggle = ({simple,setSimple}) => {
    function handleToggle(){
        if (simple == 0) {
            setSimple(1);
            console.log(simple);
        } else {
            setSimple(0);
            console.log(simple);
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