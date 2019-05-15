const router = require('express').Router()
// const router = express.Router()
const {insertUsers, signin} = require('../controllers/users')

router.post('/users', insertUsers)
router.post('/signin', signin)

module.exports = router