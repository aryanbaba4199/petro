import db from "@/utils/db";
import Registration from "@/models/reg"

export default async function handler(req, res){
    if(req.method=="POST"){
        await db.connect();
        const {firmName, brand, address, mobile, email, userDetail} = req.body;
        const newReg = new Registration ({
            firmName, brand, address, mobile, email, userDetail
        });
        try{
            const dbRes = await newReg.save();   
            console.log("Data has been saved");
            db.disconnect();
            res.status(200).json({message  : "Data saved successfully"});
        }catch(e){
            console.log("Error saving registration", e);
            res.status(500).json({message  : "Error"})
        }
    
    }
}