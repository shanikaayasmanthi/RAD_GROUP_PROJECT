const router = require("express").Router();
let NewReleaseItem =require("../models/admin/NewReleaseItem");

//new item add
router.route("/addNewReleaseItem").post((req,res)=>{
        //d structure
        const{color,gsm,price,size,sex}=req.body;

        const ReleaseItem = new NewReleaseItem({

            color,
            gsm,
            price,
            size,
            sex,
            imageURL,
        })
                    //js promisses
        ReleaseItem.save().then(()=>{
            res.json("Item Added");

        }).catch((err)=>{
            console.log(err);
        })

})

//add item display
router.route("/").get((req ,res)=>{
    NewReleaseItem.find().then((NewReleaseItems)=>{
        res.json(NewReleaseItems)
    }).catch((err)=>{
        console.log(err)
    })
})

//item update
router.route("/update/:id").put(async(req ,res)=>{
      let userId=req.params.id;
      const{color,gsm,price,size,sex,imageURL}=req.body;

      const UpdateItem ={
        color,
        gsm,
        price,
        size,
        sex,
        imageURL,
      }
      
      const update = await NewReleaseItem.findByIdAndUpdate(userId,UpdateItem);
      .then(()=>{
        res.status(200).send({status:"Item Updateed",user:update});
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(404).send({
            status:"error with updating data"
        });
        
    })
     
})

//item delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await NewReleaseItem.findByIdAndDelete(userId).then(()=>{
        res.sendStatus(200).send({status:"Item Delete"});
    }).catch((err)=>{
        console.log(error.message);
        res.status(404).send({status:"Error with delete item",error:error.message});
    })
})





module.exports = router;