require('dotenv').config()
const Openpay = require('openpay')
const op = new Openpay(process.env.OPID, process.env.OPKEY, false)

const newCharge = {
  'method': 'card',
  'amount': 100,
  'description': 'Cargo inicial a mi cuenta',
  'order_id': 'oid-00051',
  'customer': {
    'name': 'Juan',
    'last_name': 'Vazquez Juarez',
    'phone_number': '4423456723',
    'email': 'juan.vazquez@empresa.com.mx'
  },
  'send_email': false,
  'confirm': false,
  'redirect_url': 'http://www.openpay.mx/index.html'
}

op.charges.create(newCharge, (error, body) => {
  console.log(error)
  console.log(body)
})
