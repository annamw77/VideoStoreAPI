var request = require('request')
var base_url = "http://localhost:3000/customers"
var endpoints = ['/', '/customers', '/customers/sort/name', '/customers/sort/registered-at', '/customers/sort/postal-code', '/customers/2/current', '/customers/2/history']

var testing = function (endpoints) {
  for (var endpoint of endpoints) {
    describe("Endpoint at /customers", function () {
      it('responds with a 200 status code', function (done) {
        request.get(base_url, function(error, response, body) {
          expect(response.statusCode).toEqual(200)
          done()
        })
      })

      it("returns JSON", function(done) {
          request.get(base_url, function(error, response, body) {
            expect(response.headers['content-type']).toContain('application/json')
            done()
          })
        })


      it("should be an array of objects", function(done) {
        request.get(base_url, function(error, response, body) {
          var data = JSON.parse(body)
          expect(typeof data).toEqual('object')

          for (var record of data) {
            expect(Object.keys(record)).toEqual([ 'id', 'name', 'address', 'city', 'state', 'postal_code', 'phone', 'account_credit', 'registered_at'])
          }
          done()
        })
      })

      })
    }
  }
