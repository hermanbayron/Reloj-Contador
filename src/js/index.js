//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seg = 0
let seg2 = 0
let min = 0
let min2 = 0
let hora = 0;
setInterval(() => {
            seg++;
            if (seg > 9) {
                seg = 0
                seg2++
                if (seg2 > 5) {
                    seg2 = 0
                    min++
                    if (min1 > 9) {
                        min1 = 0
                        min2++
                        if (min2 > 5) {
                            min2 = 0
                            hora++
                        }
                    }
                }
            };
            console.log("Hola")
            ReactDOM.render( < Home segundos = {
                    seg
                }
                segundos2 = {
                    seg2
                }
                minuto = {
                    min
                }
                minuto2 = {
                    min2
                }
                hora = {
                    hora
                }
                />, document.querySelector("#app"));
            }, 1000)