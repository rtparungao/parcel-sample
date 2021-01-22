
const processPostage = async (body) => {
    let volume = body.height * body.width * body.depth;
    let cost = null;
    let rule = "Rejected";

    if( body.weight <= 50 ) {
        if( body.weight > 10 ) {
            cost = 15 * body.weight;
            rule = "Heavy Parcel";
        } else {
            if( volume < 1500 ) {
                cost = 0.05 * volume;
                rule = "Small Parcel";
            } else if( volume > 1500 && volume < 2500 ) {
                cost = 0.04 * volume;
                rule = "Medium Parcel";
            } else {
                cost = 0.03 * volume;
                rule = "Large Parcel";
            }
        }
    }
    // else Rule = Rejected

    return {
        category: rule,
        cost: cost
    }
}

const getPostage = async ( req, res, next ) => {

    let body = req.body;

    if( body ) {
        
        let data = await processPostage(body);

        if( data ) {
            res.json({
                status: 1,
                message: "Postage Computed Successfully",
                data: {
                    category: data.category,
                    cost: data.cost == null ? 'N/A' : `$${data.cost}`
                }
            });
        }
    } else {
        res.json({
            status: 0,
            message: "Error on post data"
        });
    }

};

module.exports = {
    getPostage
}