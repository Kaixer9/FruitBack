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

router.get('/profile', getOwnProfile)
router.put('/profile', updateOwnProfile)

router.get('/', getAllUsers)
router.get('/:userId', getUser)

router.put('/:userId', checkAdmin, updateUser) 
router.delete('/:userId', checkAdmin, deleteUser)
router.post('/', createUser) // admin, no token


module.exports = router