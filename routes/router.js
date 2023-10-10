const { Router } = require('express');

const cocktailControllers = require('../controllers/cocktails.js');
const resetControllers = require('../controllers/reset.js');
const verifyControllers = require('../controllers/verify.js');
const authControllers = require('../controllers/auth.js');
const libraryControllers = require('../controllers/library.js');
const userControllers = require('../controllers/users.js');


const router = Router();

router.get('/cocktails', cocktailControllers.getCocktails);
router.get('/cocktails/:id', cocktailControllers.getCocktail);
router.post('/cocktails/:id/request', cocktailControllers.newRequest);
router.post('/cocktails', cocktailControllers.createCocktail);
router.put('/cocktails/:id', cocktailControllers.updateCocktail);
router.delete('/cocktails/:id', cocktailControllers.deleteCocktail);

router.post('/sign-up', authControllers.signUp);
router.post('/sign-in', authControllers.signIn);
router.get('/verify', authControllers.verify);

router.post('/reset', resetControllers.sendReset);
router.post('/reset-confirm/:token', resetControllers.confirmReset);

router.get('/verify-confirm/:token', verifyControllers.verifyUser);

router.post('/library', libraryControllers.getLibrary);
router.post('/library/add', libraryControllers.addToLibrary);
router.post('/library/remove', libraryControllers.removeFromLibrary);

router.put('/users/:id', userControllers.updateUser);


module.exports = router