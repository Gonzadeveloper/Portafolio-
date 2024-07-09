import "./Contact.css"

function Contact (){
    return (
        <div className="divContact" id="Contact">
            <div>
                <h3>Hagamos conexión </h3>
                <div className="green-line"></div>
                <p>Ey llegaste hasta aqui, que esperas para darme  mas detalles sobre tu proyecto. Seguro puedo ayudarte a potenciar esa idea. Te dejo algunos de los canales para que acerques tu propuesta</p>
            </div>

            <div className="divForm">
                <form action="" method="post">
                    <h3>Tu Email</h3>
                    <input type="text" placeholder="tuemail@gmail.com"/>
                    <h3>Asunto</h3>
                    <input type="text" placeholder="Solo di hola"/>
                    <h3>Mensaje</h3>
                    <textarea name="" id="" placeholder="tu mensaje ...."></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact