const express = require('express');
const router = express.Router();
const {getallproducts,getallproductstesting} = require('../controller/products')


router.route('/').get(getallproducts);
router.route('/testing').get(getallproductstesting)

module.exports = router;