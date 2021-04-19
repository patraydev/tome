const { Router } = require('express');

const cocktailControllers = require('../controllers/cocktails.js');
const resetControllers = require('../controllers/reset.js');
const verifyControllers = require('../controllers/verify.js');
const authControllers = require('../controllers/auth.js');


const router = Router();

router.get('/cocktails', cocktailControllers.getCocktails);
router.get('/cocktails/:id', cocktailControllers.getCocktail);
router.post('/cocktails', cocktailControllers.createCocktail);
router.put('/cocktails/:id', cocktailControllers.updateCocktail);
router.delete('/cocktails/:id', cocktailControllers.deleteCocktail);


router.post('/sign-up', authControllers.signUp);
router.post('/sign-in', authControllers.signIn);
router.get('/verify', authControllers.verify);

router.post('/reset', resetControllers.sendReset);
router.post('/reset-confirm/:token', resetControllers.confirmReset);

router.get('/verify-confirm/:token', verifyControllers.verifyUser);


module.exports = router