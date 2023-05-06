const express = require('express')
const {
    valForm,
    leagueForm,
    csgoForm,
    getForm,
    getLeagueForm,
    getCsgoForm
}
= require('../controllers/formControllers')

const router = express.Router()

router.post('/val', valForm)
router.post('/league', leagueForm)
router.post('/csgo', csgoForm)

router.get('/valdata', getForm)
router.get('/leaguedata', getLeagueForm)
router.get('/csgodata', getCsgoForm)


module.exports = router