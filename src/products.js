const products = [
    { id: 1, name: 'Pelota Futbol', price: '$ 2.500,00', img:'https://www.goalinn.com/f/131/1311591/adidas-balon-futbol-tango-rosario.jpg', stock: 10, detalle:"MATERIAL POLIURETANO - PESO PIQUE Y MEDIDAS OFICIALES Y REGLAMENTADAS DENTRO DE LOS PARAMETROS ESTIPULADOS POR AFA Y FIFA - CAMARA CON VALVULA VISIBLE - NUMERO 5- FORRADO INTERIOR CON DOBLE ENMALLADO DE LATEX 32 GAJOS COSIDOS A MANO"},
    { id: 2, name: 'Pelota Rugby', price: '$ 3.000,00', img:'https://d2r9epyceweg5n.cloudfront.net/stores/254/987/products/pelotapumas_11-62e6343916278d482c16051444721353-640-0.jpg', stock: 20, detalle:"Medidas oficiales y reglamentarias detalladas por la IRB, confeccionada en material sintetico que proporciona durabilidad y mantiene la presion exacta para desarrollar correctamente el juego"},
    { id: 3, name: 'Pelota Basquet', price: '$ 2.000,00', img:'https://pelotadebasquet.com/wp-content/uploads/2019/06/Spalding-Streetball.jpg', stock: 30, detalle:"Pelota de Basquet Spalding. Con su confección certificada por la FIBA, esta pelota es ideal para practicar el deporte como un profesional. Fabricada en caucho y goma para proporcionar mayor durabilidad y resistencia,Apta para cualquier superficie.Un balón ideal para partidos profesional.Cámara de butylo. Tamaño: Nº 7"}
]

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 100)        
    })
}

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[1])
        }, 2000)        
    })
}