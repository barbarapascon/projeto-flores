const express = require('express')
const router = express.Router();

// Planta Model

const Planta = require('./planta')


// @route GET api/plantas
// @desc Get All plantas
// @access Public
router.get('/', (req, res) => {
    Planta.find()
    .then(plantas => res.json(plantas));
});

// @route GET api/plantas
// @desc Get All plantas
// @access Public
router.get('/:id', (req, res) => {
        Planta.findById(req.params.id)
        .then(plantas => res.json(plantas))
        .catch(err => res.status(404).json({
            success: false
        }));
});

// @route   POST api/plantas
// @desc    Create An Planta
// @access  Public
router.post('/', (req, res) => {
    const newPlanta = new Planta({
        nome_planta:req.body.nome_planta,
        desc_planta:req.body.desc_planta,
        preco_planta:req.body.preco_planta
    });

    newPlanta.save().then(Planta => res.json(Planta));
});

// @route   DELETE api/plantas/:id
// @desc    Delete A Planta
// @access  Public
router.delete('/delete/:id', (req, res) => {
    Planta.findById(req.params.id)
        .then(Planta => Planta.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }));
});

router.put('/:id',(req,res)=> {
    Planta.updateOne({ _id: req.params.id}, {$set: req.body})
    .then(Planta => res.json(Planta))
    .catch(err => res.status(404).json({
        success: false
    }));
});
module.exports = router;