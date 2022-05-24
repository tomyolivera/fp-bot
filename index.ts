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

client.on("message", async (msg: Message) => {
    const mensaje = msg.body;
})