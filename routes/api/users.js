const express = require('express');
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User')

const router = Router();


router.get('/', (req, res) => {
    res.status(400).json({
        data: req.body,
        msg: "Welcome",

    })
})

router.post('/register', (req, res) => {
    let { name, faculty, department, level, email, password } = req.body
    //Check if email is taken
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered"
            });
        }
    });
    // if(password !== confirm_password){
    //     // console.log('Password do not match')
    //     return res.status(400).json({
    //         msg: "Password do not match."
    //     })
    // }
    // } else {
    //     User.findOne({email})
    //     .then(user => {
    //         if(user) {
    //             return res.status(400).json({
    //                 success: false,
    //                 msg: "Email is already taken"
    //             })
    //         }
    //     })
    // };

    // Data is valid then
        let newUser = new User({
            name,
            level,
            faculty,
            department,
            email,
            password
       }); 
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw (err)
               bcrypt.hash(newUser.password, salt, (err, hash) => {
                   if (err) throw (err)
                       newUser.password = hash;
                       newUser.save().then((user) => {
                               return res.status(201).json({
                                   success: true,
                                   users: req.body,
                                   msg: "User is now registered."
                               });
                       });
               
               });
           });    
});

router.get('/login', (req, res) => {
    res.status(200).json({
        user: res.body,
        msg: "Welcome",
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email,
    }).then(user => {
        if(!user) {
            return res.status(404).json({
                msg: "Invalid email address",
                success: false
            });
        }
        //If user valid compare password
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
            if(isMatch) {

                // user's password is correct send jwt next
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, { 
                    expiresIn: 686400
                },(err, token)  => {
                    if (err) throw (err);
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: 'You are now logged in',
                        user: req.body,
                        user: user
                    })
                });
            } else {
                return res.status(404).json({
                    msg: "Incorrect password",
                    success: false
                })
            }
            
        })
    })
}) 

router.get('/profile', passport.authenticate('jwt', { session: false}), (req, res, next) => {
    return res.json({
        success: true,
        msg: 'You are authorized',
        user: req.user
    })
    
})

module.exports = router;