const valorTicket = 200

function calcularTotal() {
    let cant = document.getElementById("inputEmail4").value

    let categoria = document.getElementById("inputState").value

    if (categoria == 1) {  // estudiante
        desc = 80
    } else if (categoria == 2) { // trainee
        desc = 50
    } else { // junior
         desc = 15
    }

    let total = cant*valorTicket

    total -= total*desc/100

    document.getElementById("total").innerHTML=total
}