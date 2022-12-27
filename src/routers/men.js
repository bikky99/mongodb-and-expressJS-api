const express = require('express');

const router = new express.Router();

const MensRankings = require('../models/mens')

router.use(express.json());


router.post('/mens', async (req, res) => {
    try{
        const addingMensRecords = new MensRankings(req.body)
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch(err){
        res.status(400).send(err);
    }
})

router.get('/mens', async (req, res) => {
    try{
        const getMens = await MensRankings.find()
        res.send(getMens);
    } catch(err){
        res.status(400).send(err);
    }
})

router.get('/mens:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRankings.findById({_id})
        res.send(getMens);
    } catch(err){
        res.status(400).send(err);
    }
})

router.patch('/mens/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRankings.findByIdAndUpdate(_id, req.body, {
            new: true,
        })
        res.send(getMens);
    } catch(err){
        res.status(400).send(err);
    }
})

router.delete('/mens/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRankings.findByIdAndDelete(_id)
        res.send(getMens);
    } catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;
