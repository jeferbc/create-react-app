const appInit = (peso, diasDeNacido, hipoglicemiaChecked) => {
     //constants
      const MINUTOS_DIA = 1440
      const MG_DEXTROSA_AL_5 = 5000
      const MG_DEXTROSA_AL_10 = 10000
      const MG_DEXTROSA_AL_30 = 30000
      const MG_DEXTROSA_AL_50 = 50000
      const CIEN = 100
      //variables
      let fmIdeal
      // let peso = results.user_peso.parseInt()
      let dextrosaNecesaria
      let cantidadDextrosaAl5Porciento
      let cantidadDextrosaAl10Porciento
      let cantidadDextrosaAl30Porciento
      let cantidadDextrosaAl50Porciento
      // let diasDeNacido = results.user_dias.parseInt()
      let dextrosaSeleccionada
      let dextrosaSeleccionadaEnCc
      let ccDiference
      let porcentajeDeDextrosa
      let natrolEnCc
      let meqNatrol
      let katrolEnCC
      let electrolitosMostrados
      let usoCateter
      //elements
      // let hipoglicemiaChecked = results.hipoglicemia
      // functions
      const cantidadDeLiquidos = (dias) => {
        switch(dias) {
          case 1:
            return peso * 60
            // break
          case 2:
            return peso * 80
            // break
          case 3:
            return peso * 100
            // break
          case 4:
            return peso * 125
            // break
          case 5:
            return peso * 140
            // break
          default:
            console.log('el campo esta vacio')
            break
        }
      }

      function hypoglycemiaValidation() {
        if(hipoglicemiaChecked) {
          fmIdeal = 9
        } else {
          fmIdeal = 4
        }
      }
      
      function calculateDextroseNeeded() {
        dextrosaNecesaria = fmIdeal * MINUTOS_DIA * peso
      }
      function calculateCcDextrose() {
        cantidadDextrosaAl5Porciento = (dextrosaNecesaria * CIEN) / MG_DEXTROSA_AL_5
        cantidadDextrosaAl10Porciento = (dextrosaNecesaria * CIEN) / MG_DEXTROSA_AL_10
        cantidadDextrosaAl30Porciento = (dextrosaNecesaria * CIEN) / MG_DEXTROSA_AL_30
        cantidadDextrosaAl50Porciento = (dextrosaNecesaria * CIEN) / MG_DEXTROSA_AL_50
      }
      
      function seleccionarDextrosa(dex) {
        if(dex > cantidadDextrosaAl10Porciento) {
          dextrosaSeleccionada = "Dextrosa al 10%"
          dextrosaSeleccionadaEnCc = cantidadDextrosaAl10Porciento
        } else if(dex > cantidadDextrosaAl50Porciento) {
          dextrosaSeleccionada = "Dextrosa al 50%"
          dextrosaSeleccionadaEnCc = cantidadDextrosaAl50Porciento
        } else {
          dextrosaSeleccionada = "Error: No se pudo seleccionar una dextrosa"
          dextrosaSeleccionadaEnCc = "Error: No se pudo seleccionar una dextrosa"
        }
      }
      function calculateCcDiference() {
        ccDiference = cantidadDeLiquidos(diasDeNacido) - dextrosaSeleccionadaEnCc
      }
      function finalConcentrationCalculation() {
        porcentajeDeDextrosa = ((dextrosaNecesaria / 1000) * CIEN) / cantidadDeLiquidos(diasDeNacido)
      }
      function electrolytesCalculation() {
        if(parseFloat(diasDeNacido) >= 3) {
          meqNatrol = peso * 3
          natrolEnCc = (meqNatrol * 10) / 20
          katrolEnCC = natrolEnCc / 2
          electrolitosMostrados = `-Agregar ${natrolEnCc} CC de Natrol y ${katrolEnCC} CC de Katrol`
        } else if(parseFloat(diasDeNacido) >= 2){
          meqNatrol = peso * 3
          natrolEnCc = (meqNatrol * 10) / 20
          electrolitosMostrados = `-Agregar ${natrolEnCc} CC de Natrol`
        } else {
          electrolitosMostrados = `-No se agregan electrolitos`
        }
      }
      function catheterValidation() {
        if(porcentajeDeDextrosa > 12.5) {
          usoCateter = "Debido a la concentración debe utilizarse catéter central"
        } else {
          usoCateter = "-No necesita catéter central"
        }
      }
      hypoglycemiaValidation()
      //calculates how much dextrose the patient needs in miligrams
      calculateDextroseNeeded()
      //calulates the amount of dextrosa in CC based on each concentration
      calculateCcDextrose()
      //selects the concentration of dextrose that the patient needs
      seleccionarDextrosa(cantidadDeLiquidos(diasDeNacido))
      //calculates how much saline solution you need to increase to dextrose to meet the requirements
      calculateCcDiference()
      //calculates which is the final concentration of solution    
      finalConcentrationCalculation()
      //validates if the patient needs electrolits and calculate how much needs   
      electrolytesCalculation()
      //catheter use determination 
      catheterValidation()

      return ({
        dextrosaSeleccionadaEnCc,
        dextrosaSeleccionada, 
        ccDiference,
        electrolitosMostrados,
        porcentajeDeDextrosa,
        usoCateter,
        cantidadDextrosaAl5Porciento,
        cantidadDextrosaAl10Porciento,
        cantidadDextrosaAl30Porciento,
        cantidadDextrosaAl50Porciento
      })

} 
    
export default appInit