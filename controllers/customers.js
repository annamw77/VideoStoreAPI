var CustomerController = {
    sortName: function (req, res, next) {
      res.send(
        // CODE TO RETRIEVE CUSTOMERS BY NAME HERE
      )}
    }

    sortDate: function (req, res, next) {
      res.send(
        // CODE TO RETRIEVE CUSTOMERS BY registered_at
      )}
    }

    sortPostalCode: function (req, res, next) {
      res.send(
        // CODE TO RETRIEVE CUSTOMERS BY postal_code
      )}
    }

    current: function (req, res, next) {
      res.send(
        // CODE TO RETRIEVE currently checked out rentals by customer
      )}
    }

    history: function (req, res, next) {
      res.send(
        // CODE TO RETRIEVE previously checked out rentals by customer
      )}
    }

//   index: function (req, res, next) {
//     res.render('index', { title: 'Express' })
//   },
//
//   doSomething: function (request, response) {
//     var locals = {}
//     locals.title = 'RANDOM PARTY GENERATOR'
//     // pick rand number between 1-100
//     locals.attendees = Math.floor(Math.random() * 100 + 1)
//     // pick random day of week
//     function sample (array) {
//       return array[Math.floor(Math.random() * array.length)]
//     }
//
//     locals.day = sample(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
//     // pick a costume theme for your party
//     locals.theme = sample(['Toga', 'Halloween', 'Black Light', 'Jungle', 'Neon'])
//     response.render('party', locals)
//   }
// }

module.exports = CustomerController