const app = require('./App')
const PORT=process.env.PORT||4500

app.listen(PORT,()=>{
    console.log("APP is running at port number:-",PORT );
})