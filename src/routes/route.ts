import express from 'express'
import { getAllStudents } from '../controllers/studentController'
import { NewStudent } from '../controllers/studentController'
import { UpdateStudent } from '../controllers/studentController'
import { DeleteData } from '../controllers/studentController'
const routes = express.Router()

routes.get('/students',getAllStudents)
routes.post('/newStudent',NewStudent)
routes.put('/:id/updateStudent',UpdateStudent)
routes.delete('/:id/deleteData',DeleteData)

export default routes