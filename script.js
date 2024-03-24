
const buttom = document.querySelector(".conv-btn")

const ConvertSelector = document.querySelector(".para")
const ValorDoRial = document.querySelector(".value-real")
const ValorDoDolar = document.querySelector(".value-dolar")
const TrocarImg = document.querySelector(".trocar-img")
const MudarDeValor = document.querySelector(".mudar-nome")


const valorDoInput = document.querySelector(".valor-input").value




function EventoDeClick() {

    const valorDoInput = document.querySelector(".valor-input").value



    const DolarToday = 5.00 

    const TodayEuro = 5.405

    const ValorDeDolarAeuro = 0.925

    const ValorDeEuroAdolar = 1.081

    const ValorDeDolarAReal = 0.200

    const ValorDoDolarALibra = 1.260

    const ValorDoDolarABitcoin = 321.190

    const ValorDoRialAlibra =  321.190

    const ValorDoRialEmBitcoin = 321.190 

    const ValorDoEuroEmReal = 0.185

    const ValorDoEuroEmDolar = 0.93

    const ValorDoEuroEmLibra = 1.17

    const ValorDoEuroEmBitcoin = 58.95275

    const ValorDeLibraEmReal = 6.30

    const ValorDeLibraEmDolar = 1.26

    const ValorDeLibraEmEuro = 1.16

    const ValorDeLibraEmBitcoin = 50.79993

    const valorDoBitcoinEmRial = 0.00000312

    const ValorDoBitcoinEmDolar = 0.00001559
    
    const ValorDoBitcoinEmEuro = 0.00001693




    // CONVERTOR DE DOLAR A OTRAS MONEDAS****************************************************

    if (SelectorDe.value == "dolar", ConvertSelector.value == "euro") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / ValorDeDolarAeuro)
    }

    if (SelectorDe.value == "dolar", ConvertSelector.value == "real") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / ValorDeDolarAReal)
    }

    if (SelectorDe.value == "dolar", ConvertSelector.value == "libra") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("GBR-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / ValorDoDolarALibra)
    }

    if (SelectorDe.value == "dolar", ConvertSelector.value == "bitcoin") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(valorDoInput / ValorDoDolarABitcoin)
    }



    // CONVERTOR DE REAL A OTRAS MONEDAS *********************************************

    if (SelectorDe.value == "real", ConvertSelector.value == "dolar") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / DolarToday)
    }


    if (SelectorDe.value == "real", ConvertSelector.value == "euro") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / TodayEuro)
    }


    if (SelectorDe.value == "real", ConvertSelector.value == "libra") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("GBR-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / ValorDoRialAlibra)
    }

    if (SelectorDe.value == "real", ConvertSelector.value == "bitcoin") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(valorDoInput / ValorDoRialEmBitcoin)
    }




    //************** */ CONVERTOR DE EURO A OTRAS MONEDAS ***************************************************

    if (SelectorDe.value == "euro", ConvertSelector.value == "real") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / ValorDoEuroEmReal)
    }

    if (SelectorDe.value == "euro", ConvertSelector.value == "dolar") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / ValorDoEuroEmDolar)
    }

    if (SelectorDe.value == "euro", ConvertSelector.value == "libra") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("GBR-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / ValorDoEuroEmLibra)
    }


    if (SelectorDe.value == "euro", ConvertSelector.value == "bitcoin") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(valorDoInput / ValorDoEuroEmBitcoin)
    }


    // **************CONVERTOR DE LIBRA A OTRAS MONEDAS *******************************************************

    if (SelectorDe.value == "libra", ConvertSelector.value == "real") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / ValorDeLibraEmReal)
    }

    if (SelectorDe.value == "libra", ConvertSelector.value == "dolar") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / ValorDeLibraEmDolar)
    }

    if (SelectorDe.value == "libra", ConvertSelector.value == "euro") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / ValorDeLibraEmEuro)
    }


    if (SelectorDe.value == "euro", ConvertSelector.value == "bitcoin") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(valorDoInput / ValorDeLibraEmBitcoin)
    }



    // CONVERTOR DE BITCOIN A OTRAS MONEDAS ****************************

    if (SelectorDe.value == "bitcoin", ConvertSelector.value == "real") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / valorDoBitcoinEmRial)
    }


    if (SelectorDe.value == "bitcoin", ConvertSelector.value == "dolar") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / ValorDoBitcoinEmDolar)
    }

    if (SelectorDe.value == "bitcoin", ConvertSelector.value == "euro") {

        ValorDoDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput /ValorDoBitcoinEmEuro)
    }








}
buttom.addEventListener("click", EventoDeClick)






function TrocaDeMoneda() {

    if (ConvertSelector.value == "euro") {

        MudarDeValor.innerHTML = "€ Euro"
        TrocarImg.src = "./img/euro.png"

    }

    if (ConvertSelector.value == "dolar") {
        MudarDeValor.innerHTML = "$Dolar Americano"
        TrocarImg.src = "./img/estadosunidos.png"
        ValorDoDolar.innerHTML = "US$ 0,00"
    }

    if (ConvertSelector.value == "real") {
        MudarDeValor.innerHTML = "R$ Real Brasileiro"
        TrocarImg.src = "./img/brasil 2.png"
    }


    console.log("siiiiiiiiiiiiiiiiiiiiiiiiii")

    EventoDeClick()

}
ConvertSelector.addEventListener("change", TrocaDeMoneda)






const trocarDe = document.querySelector(".trocar-img1")

const SelectorDe = document.querySelector(".select-de")

const TrocarDeMonedas = document.querySelector(".trocar-moneda1")




function ConverteDe() {

    if (SelectorDe.value == "select-dolar") {

        trocarDe.src = "./img/estadosunidos.png"
        TrocarDeMonedas.innerHTML = "$Dolar Americano"
        ValorDoRial.innerHTML = "US$ 0,00"
    }


    if (SelectorDe.value == "select-euro") {

        trocarDe.src = "./img/euro.png"
        TrocarDeMonedas.innerHTML = "€ Euro"
        ValorDoRial.innerHTML = "€ 0,00"
    }


    if (SelectorDe.value == "select-real") {

        trocarDe.src = "./img/brasil 2.png"
        TrocarDeMonedas.innerHTML = "R$ Real Brasileiro"
    }

}

SelectorDe.addEventListener("change", ConverteDe)



function CliqueiNoButtom() {


    if (SelectorDe.value == "real") {

        ValorDoRial.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valsorDoInput)
    }

    if (SelectorDe.value == "euro") {

        ValorDoRial.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valosrDoInput)
    }






}

SelectorDe.addEventListener("click", CliqueiNoButtom)















