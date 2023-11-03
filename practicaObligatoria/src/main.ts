import './style.css';
import { Tarea } from './tarea';

let urlAPI = "https://www.boredapi.com/api/activity/";
let tarea: Tarea;


function traeTarea(): void {

    let imgURL = "";
    let token = "nIx9gQUWAGK2IoRWS2WEG82HJ5PATTzMwMPPwuvpSomfdLPNbV52CAgC";

    fetch(urlAPI).then(response => response.json())
    
    .then(data => {
        tarea = data;

        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <div class="bg-white-100 min-h-screen flex items-center justify-center ">
                <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                    <img src="https://via.placeholder.com/150" alt="imagen" class="w-50 h-50 mx-auto">
                    <h2 class="text-xl font-semibold text-gray-800 text-center mt-4">${tarea.activity}</h2>
                    <p class="text-gray-600 text-center">${tarea.type}</p>

                    <div class="mt-5">
                        <p class="text-gray-800 font-semibold">Participantes:  ${tarea.participants}</p>
                        <p class="text-gray-800 font-semibold">Precio: ${tarea.price} </p>
                        <p class="text-gray-800 font-semibold">Accesibilidad: ${tarea.accessibility} </p>

                        
            
                    </div>

                    

                </div>

                <div class="flex items-center justify-center max-w-md w-full ">
                    <button type="submit" id="botonNewTarea" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Generar nueva tarea</button>
                </div>
                

            </div>
        `

        let botonTarea = document.getElementById('botonNewTarea');
        botonTarea!.addEventListener('click', traeTarea);


    })
    .catch(error => {
        console.log(error);
    })

}

traeTarea();

