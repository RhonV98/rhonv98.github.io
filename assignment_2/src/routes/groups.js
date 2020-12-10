let express = require('express')
let groupRouter = express.Router()
let db = require('../database');

//GET all groups
groupRouter.get('/allGroups', (req, res) => {
    
    console.log("Get all groups");
    let sql = "select * from groups";
    db.all(sql,  (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})

// POST localhost:<port>/task
peopleRouter.post('/group', async (req, res) => {
  // now we have access to req.body due to body-parser (see index.js)
  if (!req.body) {
    return resizeBy.status(400).send('Request body is missing')
  }

  let group = {
    groupName: req.body.groupName
  }

  // First make sure that a record doesn't already exist
  let checkIfExistSql = "select * from people where firstName = ?"
  console.log("req.body.firstName: " + req.body.firstName)
  let params = [req.body.firstName]
  let nameExists = false;
  const rows = await new Promise((resolve, reject) => {
      db.all(checkIfExistSql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ "error": err.message }).send();
          return;
        }
        console.log("ROWS:" + rows.length);
        if(rows.length > 0){
          nameExists = true;
          res.json({
            "message": "Name already exists" 
          }).send()
          resolve(rows);
        }
        else{
          resolve(rows);
        }
      });
    });

  console.log("Nameexists:"+ nameExists);
  if(nameExists)
    return;
  
  var insertsql = 'INSERT INTO people (firstName) VALUES (?)'
  db.run(insertsql, params, function (err, result) {
    if (err) {
      res.status(400).json({ "error": err.message })
      return;
    }
    res.json({
      "message": "success",
      "data": person,
      "id": this.lastID
    })
  });

})

module.exports = groupRouter