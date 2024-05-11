const express = require("express");
const app=express();
const {sequelize}=require('./models/index');
const V1Router=require('./routes/V1/index');
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
console.log(2)
const isVerifyUser=require('./middleware/isVerifyUser')


app.use('/api/v1',V1Router);
const PORT=process.env.PORT||3000;
app.get('/',isVerifyUser,(req,res)=>{
    res.send('hello world api');
})


sequelize.authenticate()
    .then(() => {
        return sequelize.sync({force: false});
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

