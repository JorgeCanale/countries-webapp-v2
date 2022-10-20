const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require('./countries')
const Activities = require('./activities')
const Filters = require('./filtersRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', Countries)
router.use('/activities', Activities )
router.use('/filters', Filters)

module.exports = router;
