let registros = [];

export default function handler(req, res) {

if (req.method === "POST") {

const { curp, whatsapp } = req.body;

const folio = "IMSS-" + Math.floor(Math.random() * 1000000);

const nuevo = {
folio,
curp,
whatsapp,
fecha: new Date().toLocaleString()
};

registros.push(nuevo);

res.status(200).json({ folio });

} 
else if (req.method === "GET") {

res.status(200).json(registros);

}
}
