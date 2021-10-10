const express = require("express");
const Card = require("../models/card.controller");
const router = express.Router();
const Student = require("../models/student.model");

router.post("", async (req, res) => {
  const cardPost = await Card.create(req.body);
  return res.status(201).json({ cardPost });
});

router.get("", async (req, res) => {
  const cardGet = await Card.find().lean().exec();
  return res.status(200).json({ cardGet });
});

router.patch("/apply/:id",async (req,res) => {
    const id = req.params.id;
    const d = await Student.findById(id);
    var cardDe = d.card_apply;
    cardDe = [...cardDe,...req.body];

    const u = await Student.findByIdAndUpdate(id,{'card_apply':cardDe},{new:1});

    return res.status(200).json({ u });
});


module.exports = router;
