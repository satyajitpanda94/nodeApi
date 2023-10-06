import { Router } from "express";
import { User } from "../modules/User.js";

const router = Router();

router.get('/', async (req,res)=>{
    
    try {
        let users= await User.find({});
        res.status(200).json({
            count: users.length,
            data: users
        })
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.get('/:id', async (req,res)=>{
    try {
        let user= await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.post('/', async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        age: req.body.age
    })

    try {
        const user=await newUser.save();
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user=await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

export default router;