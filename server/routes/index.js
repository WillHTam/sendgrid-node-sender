var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const SENDGRID_API_KEY = 'yourapikeyhere'
const TEMPLATE_ID = 'templateidhere'

router.post('/', function(req, res, next) {

  const userEmail = req.body.userEmail

  var helper = require('sendgrid').mail

  from_email = new helper.Email('noreply@wombat.com')
  to_email = new helper.Email(userEmail)
  subject = 'Hello Again'
  content = new helper.Content("text/html", "<p></p>")
  mail = new helper.Mail(from_email, subject, to_email, content)
  mail.setTemplateId(TEMPLATE_ID)

  var sg = require('sendgrid')(SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
  })
})

module.exports = router
