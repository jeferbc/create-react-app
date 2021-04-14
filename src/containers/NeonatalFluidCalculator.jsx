import React, { useState } from 'react';
import appInit from '../assets/functions/appInit';
import AppTitle from '../components/AppTitle'
import '../assets/styles/components/NeonatalFluidCalculator.css'
// import { 
  // appInit,
  // dextrosaSeleccionadaEnCc,
  // dextrosaSeleccionada, 
  // ccDiference,
  // electrolitosMostrados,
  // porcentajeDeDextrosa,
  // usoCateter,
  // cantidadDextrosaAl5Porciento,
  // cantidadDextrosaAl10Porciento,
  // cantidadDextrosaAl30Porciento,
  // cantidadDextrosaAl50Porciento
// } from '../assets/functions/appInit'

 
  let dextrosaSeleccionadaEnCc
  let dextrosaSeleccionada
  let ccDiference
  let electrolitosMostrados
  let porcentajeDeDextrosa
  let usoCateter
  let cantidadDextrosaAl5Porciento
  let cantidadDextrosaAl10Porciento
  let cantidadDextrosaAl30Porciento
  let cantidadDextrosaAl50Porciento



const NeonatalFluidCalculator = () => {
  
  const [patient, setPatient] = useState({
    user_peso: "5",
    user_dias: "5"
  })
  const [show, setShow] = useState(false)

  const handleChange = event => {
    
    setPatient({
      ...patient,
      [event.target.name]: event.target.value,
      hola: "Hola"
    })

    const pesoString = patient.user_peso
    const peso = parseInt(pesoString)
    const diasString = patient.user_dias
    const dias = parseInt(diasString)
    const appResults = appInit(peso, dias, false)
    // dextrosaSeleccionadaEnCc = appResults.dextrosaSeleccionadaEnCc.toFixed(1)
    // console.log(dextrosaSeleccionadaEnCc)
    // dextrosaSeleccionada = appResults.dextrosaSeleccionada
    // ccDiference = appResults.ccDiference.toFixed(1)
    // electrolitosMostrados = appResults.electrolitosMostrados
    // porcentajeDeDextrosa = appResults.porcentajeDeDextrosa.toFixed(1)
    // usoCateter = appResults.usoCateter
    // cantidadDextrosaAl5Porciento = appResults.cantidadDextrosaAl5Porciento.toFixed(1)
    // cantidadDextrosaAl10Porciento = appResults.cantidadDextrosaAl10Porciento.toFixed(1)
    // cantidadDextrosaAl30Porciento = appResults.cantidadDextrosaAl30Porciento.toFixed(1)
    // cantidadDextrosaAl50Porciento = appResults.cantidadDextrosaAl50Porciento.toFixed(1)
    dextrosaSeleccionadaEnCc = appResults.dextrosaSeleccionadaEnCc
    console.log(dextrosaSeleccionadaEnCc)
    dextrosaSeleccionada = appResults.dextrosaSeleccionada
    ccDiference = appResults.ccDiference
    electrolitosMostrados = appResults.electrolitosMostrados
    porcentajeDeDextrosa = appResults.porcentajeDeDextrosa
    usoCateter = appResults.usoCateter
    cantidadDextrosaAl5Porciento = appResults.cantidadDextrosaAl5Porciento
    cantidadDextrosaAl10Porciento = appResults.cantidadDextrosaAl10Porciento
    cantidadDextrosaAl30Porciento = appResults.cantidadDextrosaAl30Porciento
    cantidadDextrosaAl50Porciento = appResults.cantidadDextrosaAl50Porciento

    setShow(false)
  }
  const handleClick = () => {
    const pesoString = patient.user_peso
    const peso = parseInt(pesoString)
    const diasString = patient.user_dias
    const dias = parseInt(diasString)
    const appResults = appInit(peso, dias, false)
    // SETEO DE VARIABLES
    dextrosaSeleccionadaEnCc = appResults.dextrosaSeleccionadaEnCc
    dextrosaSeleccionada = appResults.dextrosaSeleccionada
    ccDiference = appResults.ccDiference
    electrolitosMostrados = appResults.electrolitosMostrados
    porcentajeDeDextrosa = appResults.porcentajeDeDextrosa
    usoCateter = appResults.usoCateter
    cantidadDextrosaAl5Porciento = appResults.cantidadDextrosaAl5Porciento
    cantidadDextrosaAl10Porciento = appResults.cantidadDextrosaAl10Porciento
    cantidadDextrosaAl30Porciento = appResults.cantidadDextrosaAl30Porciento
    cantidadDextrosaAl50Porciento = appResults.cantidadDextrosaAl50Porciento

    setShow(true)
  }


  console.log(show)

  return (
    <div className="app-container">
      <AppTitle title="Liquidos en neonatos" subtitle="LOS PRIMEROS 5 DIAS DE VIDA" />
      <div className="form-container">
      <form action="" method="">
        <ul className="form">
          <li>
            <label htmlFor="peso">Peso del paciente (kg)</label> <br/>
            <input
              className="inputs" 
              type="text" 
              id="peso" 
              name="user_peso"
              onChange={handleChange}
            />
          </li>        
          <li>
            <label htmlFor="dias">Dias de vida</label> <br/>
            <input 
              className="inputs" 
              type="text" 
              id="dias" 
              name="user_dias" 
              onChange={handleChange}
            />
          </li>        
          <li  className="hipoglicemia-input">          
            <input 
              type="checkbox" 
              id="dias" 
              name="hipoglicemia" 
              onChange={handleChange}
            />
            <label htmlFor="hipoglicemia">Tiene una hipoglicemia que requiere flujo metabolico de 9</label> <br/>
          </li>        
          <li className="button-container">
            <button 
              className="calc-button" 
              type="button" 
              id="botonCalcular"
              onClick={handleClick}
            >Calcular</button>
          </li>        
        </ul>
      </form>
      </div>
      {show ? 
      <>
        <div className="resultados-container">
          <h4>FORMULA</h4>
          <ul className="resultados-list">
            <li>
              <label id="liquidosNecesarios">-Administrar ${dextrosaSeleccionadaEnCc} CC de ${dextrosaSeleccionada}<br/> y agregar ${ccDiference} CC de agua destilada. <br/>En 24 horas.</label>
            </li>      
            <li>
              <label id="electrolitos">${electrolitosMostrados}</label>
            </li>
            <li>
              <label id="concentracion">(La solución tendrá una concentración de ${porcentajeDeDextrosa}% dextrosa)</label>
            </li>      
            <li>
              <label id="cateterCentral">${usoCateter}</label>
            </li>        
          </ul>
        </div>
        <div className="title-container">
          <h3>En caso de querer hacer los calculos manualmente estas son las cantidades de dextrosa en CC que se necesitan segun su concentracion</h3>
        </div>
        <div className="otras-dextrosas-container">
          <h4>Otras dextrosas</h4>
          <ul className="resultados-list">
            <li>
              <label id="resultado5">-Dextrosa al 5 en cc :---${cantidadDextrosaAl5Porciento} CC</label>
            </li>        
            <li>
              <label id="resultado10">-Dextrosa al 10 en cc :---${cantidadDextrosaAl10Porciento} CC</label>
            </li>
            <li>
              <label id="resultado30">-Dextrosa al 30 en cc :---${cantidadDextrosaAl30Porciento} CC</label>
            </li>
            <li>
              <label id="resultado50">-Dextrosa al 50 en cc :---${cantidadDextrosaAl50Porciento} CC</label>
            </li>      
          </ul>      
        </div>
      </>
      : <h1 className="show-false">Show false</h1> }
    </div>
  )
}

export  default NeonatalFluidCalculator