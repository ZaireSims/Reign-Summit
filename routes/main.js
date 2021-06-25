const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        title: "Reign Summit Clothing Brand",
        description: " Welcome to the Reign Summit website. We hope that you enjoy the nice broad selection of clothes."
    }
    
  res.render('home', data)

})

router.get('/blog', (req, res, next) => {
    const data = {
        title: "Reign Summit Clothing Brand",
        description: " Welcome to the Reign Summit website. We hope that you enjoy the nice broad selection of clothes."
    }


    res.render('blog', data)
})

router.get('/menu', (req, res, next) => {
    const data = {
        title: "Reign Summit Clothing Brand",
        description: " Welcome to the Reign Summit website. We hope that you enjoy the nice broad selection of clothes."
    }
    
  res.render('menu', data)

})

module.exports = router