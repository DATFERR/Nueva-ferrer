// ---------------------------
// 1) CARGA INICIAL
// ---------------------------
window.onload = fcargar;

function fcargar() { 
    fmaqueta();                       // crea la estructura HTML
    setTimeout(fcontenido, 1000);     // agrega contenido dinámico
    setTimeout(festilos, 1500);       // agrega estilos CSS
}

// ---------------------------
// 2) CREAR MAQUETA HTML
// ---------------------------
function fmaqueta(){
    let contenedor = document.getElementById('container');
    contenedor.innerHTML = `
        <header id='cabecera'></header>

        <main id='contenido'>
          <section id='colizq'></section>
          <section id='colcen'></section>
          <section id='colder'></section>
        </main>

        <footer id='pdp'></footer>
    `;
}

// ---------------------------
// 3) AGREGAR CONTENIDO DINÁMICO
// ---------------------------
function fcontenido(){
    let cabecera = document.getElementById('cabecera');

    let titulo = document.createElement('h1');
    titulo.textContent = "Escuderia Ferrari";
    cabecera.appendChild(titulo);

    let parrafo = document.createElement('p');
    parrafo.textContent =  "Bienvenido a mi página web en esta se encontrara un breve preludio de lo que ha sido la escuderia ferrari, demostrando un poco de su historia sus monoplazas iconicos y tambien sus curiosidades. !!!" 
    ;

    cabecera.appendChild(parrafo);


let colIzq = document.getElementById('colizq');
    let colCen = document.getElementById('colcen');
    let colDer = document.getElementById('colder');

    colIzq.textContent = "Contenido de la columna izquierda";
    colCen.textContent = "Contenido de la columna central";
    colDer.textContent = "Contenido de la columna derecha";

 colIzq.innerHTML = `
        <h2>Historia de Ferrari</h2>
        <p>Ferrari fue fundada en 1939 por Enzo Ferrari en Maranello, Italia.</p>
        <p>Inicialmente se centró en la fabricación de autos de carreras antes de producir autos de calle en 1947.</p>
        <p>Desde entonces, Ferrari se ha convertido en un símbolo de lujo, velocidad y diseño italiano.</p>
    <p>En 1969, Fiat adquirió una participación en Ferrari, ayudando a expandir la producción de vehículos de lujo mientras mantenía la exclusividad de la marca.</p>
    <p>Durante los años 80 y 90, Ferrari consolidó su reputación con modelos icónicos como el Testarossa, F40 y F50.</p>
    
    
        `;

    colCen.innerHTML = `
        <h2>Modelos icónicos</h2>
        <p>Ferrari 250 GTO: Uno de los autos más famosos y valiosos del mundo.</p>
        <p>Ferrari LaFerrari: Híbrido con más de 950 caballos de fuerza.</p>
        <p>Ferrari SF90 Stradale: Último modelo con tecnología avanzada y diseño futurista.</p>
    <p>Ferrari Testarossa: Icono de los años 80 con diseño lateral distintivo.</p>
    <p>Ferrari F40: Celebración del 40º aniversario, famoso por su rendimiento extremo.</p>
    <p>Ferrari F50: Superdeportivo de los años 90 con tecnología derivada de la F1.</p>
    <p>Ferrari 488 Pista: Último superdeportivo con motor V8 turboalimentado.</p>
    
        `;


 colDer.innerHTML = `
        <h2>Curiosidades</h2>
        <p>El color rojo “Rosso Corsa” se asocia históricamente con los autos de carreras italianos.</p>
        <p>Ferrari nunca ha fabricado un SUV hasta la llegada del Purosangue en 2022.</p>
        <p>El logotipo del caballo negro proviene de un símbolo usado por un piloto italiano de la Primera Guerra Mundial.</p>
    
    <p>Ferrari produce menos de 10,000 autos al año, manteniendo la exclusividad de la marca.</p>
    <p>La fábrica de Maranello es un lugar turístico donde se puede visitar el museo Ferrari y ver algunos modelos históricos.</p>
    <p>Ferrari ha ganado más de 230 carreras de Fórmula 1 y 16 campeonatos de constructores.</p>
        `;
    
    

let footer = document.getElementById('pdp');

footer.innerHTML = `
    <p> Hecho por Jose ferrer 
    <br>
    Escuderia Ferrari 2025 </p>
`;
    

 }

  





// ---------------------------
// 4) AGREGAR ESTILOS CSS
// ---------------------------
function festilos(){
    let estilos = document.createElement('style');
    estilos.innerHTML = `
        body {
            width:100px;
            height:800px;
            min-width:1000px;  
            min-height: 800px;
            margin:auto;
            margin-top:10px;
        
            background-image: url('/img/logoferrari.jpeg');
            
            background-color: rgba(167, 1, 1, 0.84)
            background-repeat: no-repeat;
            background-position: center;
            padding:10px;
background-repeat: no-repeat;

        }

        #container {
            width: 900px;
            height: 790px;
            margin:auto;
            margin-top:10px;
        
            
        }

        #cabecera {
            width: 887px;
            height: 220px;      
            margin:auto;    
            margin-top:2px;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            background-color: rgba(224, 51, 13, 0.92)
    

        }




        
        #logoCabecera {
    height: 100px;
    margin-right: 20px;
    }




        
        /* 3 COLUMNAS */
        #contenido {
            width: 870px;
            height: 480px;
            margin: auto;
            margin-top: 5px;
            outline: 5px solid white;
            display: flex;
            flex-direction: row;
            border-left: 8px solid red;
           border-right: 8px solid red;
              border-top: 8px solid red;
              border-bottom: 10px solid red;
        }

        #colizq, #colcen, #colder {
            flex: 1;
            margin: 5px;
            


             
        }



        #titulo {

        font-size: 100px;
        
        
        }




#colder {
 border-right: 11px solid red;

}

        #colcen {
         border-left: 8px solid green;
         border-right: 8px solid red;
        }

        #colizq {
        
        text-align: center; 
        
        background-color: rgba(193, 193, 29, 0.73); }
        #colcen {
        text-align: center;
        
        background-color: rgba(51, 155, 193, 0.47); }
        #colder {
        text-align: center;
        background-color: rgba(7, 204, 20, 0.79); }


        #colizq, #colcen, #colder {
    background: rgba(227, 227, 16, 0.8);
    text-shadow: 1px 1px 3px black;   }

 #colizq:hover,
    #colcen:hover,
    #colder:hover {
        transform: scale(1.04);
        box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
        background-color: rgba(232, 244, 12, 0.91); 
    }


#colizq, #colcen, #colder {
    background: rgba(15, 122, 230, 0.77);  /* blanco con transparencia */
    color: black;
    
    
    }

      #pdp {
    width: 865px;
    height: 80px;
    margin: auto;
    margin-top: 5px;
    outline: 5px solid white;
    background-color: rgba(15, 165, 10, 0.85);
    text-align: center;
    padding: 10px;
    color: rgba(14, 13, 12, 0.96);
    font-weight: bold;
    line-height: 1.5em;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;


        #pdp:hover {
            width: 870px;
            height: 100px;
            margin:auto;
            margin-top:5px;
            outline: 5px solid white;
transform: scale(1.04);
        box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
        background-color: rgba(81, 124, 67, 0.93);
        background-image: url('/img/imagen.ferrari1.avif);
            

        }

        h1 {
            background-color: #a48882d0;
        }



       






    `;
    document.head.appendChild(estilos);
}
