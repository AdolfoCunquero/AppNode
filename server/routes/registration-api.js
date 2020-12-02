const express = require('express');
const app = express();

app.post('/registration',(req,res)=>{
    try{
        let body = req.body

        let nombre = body.nombre
        let edad = body.edad
        let email = body.email
    
        if (!nombre){
            return res.status(200).json({
                message:"ingrese un nombre",
                status:"error"
            })
        }else{
            let resultado = nombre.match(/^[A-Za-z ]+$/)
            if(!resultado){
                return res.status(200).json({
                    message:"ingrese un nombre valido",
                    status:"error"
                })
            }
        }
    
        if (!edad){
            return res.status(200).json({
                message:"ingrese una edad",
                status:"error"
            })
        }
    
        if(!email){
            return res.status(200).json({
                message:"ingrese un email",
                status:"error"
            })
        }else{
            let resultado = email.match(/^[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}(\.)?([A-Za-z]{2})?$/)
            if(!resultado){
                return res.status(200).json({
                    message:"ingrese un email valido",
                    status:"error"
                })
            }
        }
        return res.status(200).json({
            message:"Bienvenido",
            status:"success"
        })
    }catch(ex){
        return res.status(500).json({})
    }
})


module.exports = app