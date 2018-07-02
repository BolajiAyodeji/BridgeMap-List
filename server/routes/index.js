const express = require("express");

const router = express.Router();
const airtable = require("../utils/airtable");

router.get("/api/all_organisations", (req, res) => {
    airtable.getOrganisations().then(organisations =>{
      res.send(JSON.stringify(organisations))
    })
});

router.get("/api/one_organisation", (req, res) => {
    airtable.getOneOrganisation("Futureversity").then(organisation =>{
        res.send(JSON.stringify(organisation))
    })
})

module.exports = router;