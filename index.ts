import { Client, Message } from 'whatsapp-web.js';

const client = new Client({
    puppeteer: { headless: false }
});

client.initialize();

client.on("ready", () => {
    console.log("READY");
})

/*
 * 1. Saludo inicial
 * Si no realizó el pedido, desplegar opciones: 1. Info general, 2. Forma de pago, 3. Catálogo / Tienda, 4. ¿Cómo comprar?, 5. Tabla de talles, 6. Envíos, 7. Otra consulta
 * 
 */

type TOpciones = "Info general" | "Formas de pago" | "Tienda" | "Como Comprar" | "Talles" | "Envios" | "Otro";

const MENSAJE_BIENVENIDA = "Hola, soy un bot de prueba, ¿en qué te puedo ayudar?";

const INFO_GENERAL = "";

const FORMAS_DE_PAGO = [
    "Efectivo",
    "Tarjeta de crédito",
    "Tarjeta de débito",
    "Transferencia bancaria",
    "Otro"
];

const LINK_TIENDA = "https://footprintsclothes.com.ar/";

const COMO_COMPRAR = "";

const TABLA_DE_TALLES = "";

const FORMAS_DE_ENVIO = [
    "Envío a domicilio",
    "Retiro en tienda"
];

const validarMensaje = (mensaje: string) => {
    const msg = parseInt(mensaje);
}

let state = {
    opciones: [
        "Info general",
        "Formas de pago",
        "Tienda",
        "Como Comprar",
        "Talles",
        "Envios",
        "Otro"
    ],
    opcionActual: 0
}

client.on("message", async (msg: Message) => {
    const mensaje = msg.body;

    // Validar si es el primer mensaje que manda
    const esPrimerMensaje = state.opcionActual === 0;
    if(esPrimerMensaje) {
        // Enviar mensaje de bienvenida
        await msg.reply(MENSAJE_BIENVENIDA);
    }

    // ¿Realizo el pedido?
    const realizoElPedido = mensaje === "1";

    if(realizoElPedido){

    } else {
        // Enviar opciones
    }
}); 