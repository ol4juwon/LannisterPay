"use strict"

exports.fees = (req,res,next) => {
    const {FeeConfigurationSpec} = req.body;
    if(!FeeConfigurationSpec){
        res.status(400).send({
            message: "Fee Configuration Specification is required"
        });
    }


    var splitString = FeeConfigurationSpec.split("\\n");
    console.log(splitString);
    //TODO: Validate FeeConfigurationSpec

}