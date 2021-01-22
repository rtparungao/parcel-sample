# Parcel Postage Compute

Test project to compute for parcel postage with the given weight, height, width and depth as parcel data.

### Dependencies

Node JS and Express JS

### Steps

* Clone or Download files
* run `npm install`
* run `npm run start`
* POST url is `http://localhost:3000/parcel/postage`

### Sample Data

Create a POST data using POSTMAN
```
{
    "weight": 10,
    "height": 20,
    "width": 5,
    "depth": 20
}
```
**Note: When creating the post *Body*, choose `raw` and make sure it is in `JSON` format**

Expected result:
```
{
    "status": 1,
    "message": "Postage Computed Successfully",
    "data": {
        "category": "Medium Parcel",
        "cost": "$80"
    }
}
```