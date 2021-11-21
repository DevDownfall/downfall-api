import express from 'express';
const router = express.Router();

import { execute } from '../../utilities/database/mysql'
import bcrypt from 'bcrypt';

router.post('/', async function(req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    interface UserTest {id: number;username: string;password: string; email: string}
    return
    // const user: UserTest[] = await execute('SELECT * FROM users WHERE username = ? ', [ username ])
    // const userEmail: UserTest[] = await execute('SELECT * FROM users WHERE email = ? ', [ email ])
    // if(user[0]) return res.send('Username Already in use')
    // if(userEmail[0]) return res.send('Email Already in use')

    // // const IPDATA = await Axios.get(`http://api.ipstack.com/${req.cloudflareIP}?access_key=9c8c6b7fa97939e042d16f3ff72a1da1&format=1`)
    // //ip_address: req.cloudflareIP,
    // if(!user[0]){
    //     try{ 
    //         bcrypt.genSalt(8, async (err, salt) => {
    //             bcrypt.hash(password, salt, async (err, hash) => {
    //                 // Store hash in your password DB.
    //                 if(err) console.log(err)
    //                 let registerObj = {username: username,email: email,password: hash}
    //                 execute('INSERT INTO users SET ?', [ registerObj ])
    //             });
    //         });
    //     }catch(e) {
    //         console.log(e)
    //     } 
    // }
})

export = router 