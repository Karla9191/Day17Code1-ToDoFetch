import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
    /*New */
    let url = 'http://assets.breatheco.de/apis/fake/todos/user/karla';
    let options = { 
                    method: "GET",
                   // body: JSON.stringify(todos),
                    headers: {
                        "Content-Type": "application/json"
                    }
    }
     
    fetch(url,options)
        .then(resp => {
            console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
            console.log(resp.status); // el código de estado = 200 o código = 400 etc.
            console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then(data => {
            //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
        })
        .catch(error => {
            //manejo de errores
            console.log(error);
        });
    
    /* End-New*/
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
