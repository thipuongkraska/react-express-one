const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", async (req,res,next) => {
    try {
        console.log("client call api");
        return res.status(200).json({
            message: ["success","not success"],
            users: [
                      {
                        name: "a",
                        age: 30
                      },
                      {
                        name: "b",
                        age: 30
                      },
            ],
        });
    } catch (error) {
        console.log(error);
    }
});

app.post("/api/users", async (req,res,next) => {
    try {
        console.log("client post");
        //const {fName, lName, email} = req.body;
        const {email, password} = req.body;
        await res.status(200).json({
            message: "ok",
            data: {
                // fName,
                // lName,
                // email
                email,
                password,
            }
     });
    }
    catch(error) {
        console.log(error);
    }
     
});



 app.listen(4000, () => console.log("server is running on port 4000"))