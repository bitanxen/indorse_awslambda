
module.exports = {
    buildresponse(success, payload){
        if(success){
            return {"Status": "Success", "Payload": payload};
        } else {
            return {"Status": "Failed", "Payload": payload};
        }
    }
}