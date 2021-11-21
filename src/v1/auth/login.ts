import express from 'express';
const router = express.Router();

import { execute } from '../../utilities/database/mysql'
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'
import Config from '../../utilities/Config.js'
import cookieParser from 'cookie-parser';

router.get("/", (req, res) => {
    if(!req.cookies.userToken) return res.send({ loggedIn: false })
    JWT.verify(req.cookies.userToken, Config.cookieSecret, (error: any, decoded: any) => {
        if(error) return res.send({ error: true, loggedIn: false })
        res.send({ loggedIn: true, user: decoded.user, userID: decoded.user.id });
    })
});

router.post('/', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if(!username || !password) return res.send({ error: true, msg: 'Unauthorized'})
    interface UserTest {id: number; username: string, password: string;}
    
    const user: UserTest[] = await execute(`SELECT * FROM users WHERE username = ? && password = ?`, [ username, password ])
    if(!user) return res.status(401).send({msg: 'Unauthorized'})
    try{
        bcrypt.compare(password, user[0].password, async (err, response) => {
            if(!response) return console.log('Wrong user/password combination')
            const token = JWT.sign({user: user}, Config.cookieSecret, { expiresIn: '24h' })
            // res.cookie('userID', token)
            try{
                res.cookie('userToken', token)
                res.cookie('userID', user[0].id)
            }catch(e) {
                console.log(e)
            }
        
            //remove user password from output for security
            user[0].password = undefined;
            return res.status(201).json({
                status: 'success',
                token,
                data: {
                    user
                }
            });

        })
    }catch(e){
        console.log(e)
    }
})

export = router