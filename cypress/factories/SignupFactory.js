var faker = require ('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
               cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '14999999999',
                adress:{
                    postalcode: '17021690',
                    street: 'Rua Antônio José Parente',
                    number: '319',
                    details: 'sobrado',
                    district: 'Vila Garcia',
                    city_state: 'Bauru/SP'
    
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data

    }

}