

function CreditoComponent(){

    function handleSubmit(e){
        e.preventDefault();
        console.log("Funciona?")
    }

    return <div className="rodape">
        <p>
            <button className="secret-button" onClick={handleSubmit}>Todos</button>
            {" "}os direitos reservados a{" "}
            <button className="secret-button" onClick={handleSubmit}>Allan Gabryel</button>
            {" "}e{" "}
            <button className="secret-button" onClick={handleSubmit}>Miro Machado</button>
            {" "}-{" "}
            <button className="secret-button" onClick={handleSubmit}>2026</button>
            </p>
    </div>
}

export default CreditoComponent
