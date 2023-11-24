const router = require('express').Router()
const { checkAdmin, checkUser } = require('../middlewares/auth.js')

const { 
getAllUsers,
getUser,
updateUser,
deleteUser,
getOwnProfile,
updateOwnProfile,
createUser,
 } = require('../controllers/userController.js')

router.get('/profile', checkUser, getOwnProfile)
router.put('/profile', checkUser, updateOwnProfile)

router.get('/', checkAdmin, getAllUsers)
router.get('/:userId', checkAdmin, getUser)

router.put('/:userId', checkAdmin, updateUser) 
router.delete('/:userId', checkAdmin, deleteUser)
router.post('/', checkAdmin, createUser) // admin, no token


module.exports = router