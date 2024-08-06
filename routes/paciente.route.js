const { Router } = require("express")
const Paciente = require("../model/paciente")
// const { createProduct, findAllProducts, findProductById, updateProductById, deleteProductById } = require("../controllers/product.controller")
const { body, param } = require('express-validator');
// const { expressValidations } = require('../middlewares/common.validations');
const jwt = require('jsonwebtoken');
const roleAuthorization = require('../middlewares/roleAuthorization'); 

const pacienteRouter = Router()

//Create
pacienteRouter.post("/createPaciente", [
    body("nombre", "Debe mandar un nombre").notEmpty(),
    body("dni", "Debe mandar un dni").notEmpty(),
    body("domicilio", "Debe mandar un domicilio").notEmpty(),
    body("telefono", "Debe mandar un telefono").notEmpty(),
    body("fechaNacimiento", "Debe mandar una fecha de nacimiento").notEmpty(),
    body("edad", "Debe mandar una edad").notEmpty(),
    body("sexo", "Debe mandar un sexo").notEmpty(),
    body("antecedentes", "Debe mandar un antecedente medico").notEmpty()
],
    verifyJWT,
    expressValidations,
    createProduct
);

//ReadAll
pacienteRouter.get("/findAllPaciente", findAllProducts)

//ReadByID
pacienteRouter.get("/findPacienteById/:id", [
    param("id", "Debe mandar un Id valido").isMongoId()
],
    expressValidations,
    findProductById
);

pacienteRouter.put("/updatePacienteById/:id", [
    param("id", "Debe mandar un Id válido").isMongoId(),
    body("nombre", "Debe mandar un nombre").isString(),
    body("dni", "Debe mandar un dni").isString(),
    body("domicilio", "Debe mandar un domicilio").isString(),
    body("telefono", "Debe mandar un telefono").isString(),
    body("fechaNacimiento", "Debe mandar una fecha de nacimiento").isString(),
    body("edad", "Debe mandar una edad").isString(),
    body("sexo", "Debe mandar un sexo").isString(),
    body("antecedentes", "Debe mandar un antecedente medico").isString()
],
    expressValidations,
    updateProductById
);

//Delete
pacienteRouter.delete("/deletePacienteById/:id", [
    param("id", "Debe mandar un Id valido").isMongoId()
],
    expressValidations,
    deleteProductById
);

module.exports = pacienteRouter;