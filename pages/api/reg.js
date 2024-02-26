import db from "@/utils/db";
import Registration from "@/models/reg"

export default async function handler(req, res){
    if(req.method=="POST"){
        await db.connect();
        const {firmName, brand, address, mobile, email, userDetail, msReading, hsReading, msStock, hsStock} = req.body;
        const newReg = new Registration({
            firmName, brand, address, mobile, email, userDetail, msReading, hsReading, msStock, hsStock
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
    if (req.method === 'GET') {
        try {
            const { uid } = req.query; // Extracting uid from query parameters
            db.connect();
            console.log(uid);
            const genInfo = await Registration.aggregate([
                {
                    $match: {
                        'userDetail.3': uid // Match documents where userDetail array contains the given uid
                    }
                }
            ]);
            console.log(genInfo);
            if (genInfo.length > 0) {
                
                // If documents are found, send the information as a response
                res.status(200).json(genInfo);
            } else {
                // If no documents are found for the given uid, send a response indicating not found
                res.status(404).json({ message: 'Registration not found for the given uid' });
            }
        } catch (error) {
            // If an error occurs during the process, send an error response
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
}