// This

const reservation = {
    name: 'Angelica',
    surname: 'Arroyave',
    total: 5000,
    paid: false,
    // information: () => console.log(`El cliente ${reservation.name} ${reservation.surname} reservó, su cantidad a pagar es de ${reservation.total}`) // Forma 1
    information: function() {
        console.log(`El cliente ${this.name} ${this.surname} reservó, su cantidad a pagar es de ${this.total}`) // Forma 2, si se coloca como arrow function el resultado será undefined
    }
}

// reservation.information() // Forma 1, El cliente Angelica Arroyave reservó, su cantidad a pagar es de 5000
reservation.information() // Forma 2, El cliente Angelica Arroyave reservó, su cantidad a pagar es de 5000