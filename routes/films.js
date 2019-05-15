const router = require('express').Router()
// const router = express.Router()
const {getAllFilms, insertFilm, getFilmById,updateFilm} = require('../controllers/films')

router.get('/api/films', getAllFilms)
router.get('/api/films/:id', getFilmById)
router.post('/api/films', insertFilm)
router.put('/api/films', updateFilm)

module.exports = router