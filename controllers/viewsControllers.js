import Viaje from "../models/Viaje";

const mainMenu = (req, res) => {
    res.render("inicio", {
        pagina: 'Inicio'
    });
}
const nosotrosMenu = (req, res) => {
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
}
const testimonialesMenu = (req, res) => {
    res.render("testimoniales", {
        pagina: 'Testimoniales'
    });
}
const viajesMenu = (req, res) => {
    const viajes = await Viaje.findAll().catch((err) => console.log(err));
    res.render("viajes", {
        pagina: 'Viajes',
        viajes: viajes
    });
}
const paginaDetalleViaje = async (req,res)=>{
    //console.log(`${req.params.slug}`);
    const {slug} = req.params;
    try{
        const resultado = await Viaje.findOne({where: {slug:slug}});
        res.render('infoViaje',{
            pagina: "Información de Viaje",
            resultado = resultado
        })
    }catch (error){
        console.log(error);
    }
}
export {mainMenu, nosotrosMenu, testimonialesMenu, viajesMenu,paginaDetalleViaje}