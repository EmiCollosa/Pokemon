const { Router } = require("express");

const { getTypes } = require("../Controles/ControlType.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// TYPES
router.get("/", getTypes);

module.exports = router;
