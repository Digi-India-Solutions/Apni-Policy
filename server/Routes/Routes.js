const express = require('express')
const { GetAllForm, CreateForm, deleteSingleForm } = require('../Controller/Form.Controller')

const Route = express.Router()

Route.get('/getform',GetAllForm)
Route.post('/createform',CreateForm)
Route.delete('/deleteform/:id',deleteSingleForm)

module.exports = Route