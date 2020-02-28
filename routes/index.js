const express = require('express')
const router = express.Router()

var users = [{
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@doemail.com'
    },
    {
        id: 2,
        firstname: 'Bob',
        lastname: 'Smith',
        email: 'bob@smithmail.com'
    },
    {
        id: 3,
        firstname: 'Jill',
        lastname: 'Jackson',
        email: 'jill@jacksonemail.com'
    }

]

router.get('/', (req, res) => {

    res.render('index', {
        title: 'Customers',
        users: users
    })

})

module.exports = router;