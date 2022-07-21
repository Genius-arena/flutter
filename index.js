const fs = require("fs");

const express = require("express");
const app = express();

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get ("/api/v1/tours", (req, res) =>{
// res.status(200).json({
//     status: 200,
//     results: tours.length,
//     data: {
//         tours
//     }
// })
// });


  let fru =   {
        "ID": 1308,
        "Amount": 12580,
        "Currency": "NGN",
        "CustomerEmail": "anon8@customers.io",
        "SplitInfo": [
            {
                "SplitType": "FLAT",
                "SplitValue": 45,
                "SplitEntityId": "LNPYACC0019"
            },
            {
                "SplitType": "RATIO",
                "SplitValue": 3,
                "SplitEntityId": "LNPYACC0011"
            },
            {
                "SplitType": "PERCENTAGE",
                "SplitValue": 3,
                "SplitEntityId": "LNPYACC0015"
            }
        ]
    }

    function ko (fru) {
        for(let ber in fru) {
            console.log(ber);
        }
    }

// app.get("/", (req, res) =>{

// });

app.post("/split-payments/compute", (req, res) => {


    let fru = {
        "ID": 1308,
        "Amount": 12580,
        "Currency": "NGN",
        "CustomerEmail": "anon8@customers.io",
        "SplitInfo": [
            {
                "SplitType": "FLAT",
                "SplitValue": 45,
                "SplitEntityId": "LNPYACC0019"
            },
            {
                "SplitType": "RATIO",
                "SplitValue": 3,
                "SplitEntityId": "LNPYACC0011"
            },
            {
                "SplitType": "PERCENTAGE",
                "SplitValue": 3,
                "SplitEntityId": "LNPYACC0015"
            }
        ]
    }

// function check(fru) {
//      for(const ber in fru) {
//             console.log(`${ber} : ${fru[ber]}`);
//         }
// }
// function cho(fru) {
//     for(let go in fru) {
//         // console.log(go);

//        console.log(fru.SplitInfo) ;
//     }
// }

// cho(fru);
function te (fru) {
    
// fru.SplitInfo[0]

    let initialBalance;
    
    // For the Flat Part
    if(fru.SplitInfo[0].SplitType === "FLAT")  {
    `split amount for ${fru.SplitInfo[0].SplitEntityId} : ( ${fru.Amount - fru.SplitInfo[0].SplitValue})`
        let  initialBalance = fru.Amount - fru.SplitInfo[0].SplitValue;
        let temp = {ID: fru.SplitInfo[0].SplitEntityId,
            Amount: initialBalance
         }
    SplitBreakdown.push(temp)

        console.log(initialBalance)
    }
    
    // For the Percentage Part
    if(fru.SplitInfo[0].SplitType === "PERCENTAGE")  {
        let per = fru.SplitInfo.SplitValue
        let temp = {ID: fru.SplitInfo[0].SplitEntityId,
            Amount: initialBalance
         }
    SplitBreakdown.push(temp)

    function percentage(initialBalance, per) { let re = (initialBalance/100)*per };
initialBalance = re;
    }
    


    // For the Ratio Part
    if(fru.SplitInfo[0].SplitType === "RATIO")  {
    let TOTALRATIO = fru.SplitInfo[1].SplitValue;
 //initialBalance   //Opening Ratio Balance = 1396.8

// Split amount for "LNPYACC0011": ((3/5) * 1396.8) = 838.08
   `Balance after split calculation for "${fru.SplitInfo[0].SplitEntityId}"": ( ${initialBalance = initialBalance - fru.SplitInfo[0].SplitValue})`
    console.log (initialBalance);
    let temp = {ID: fru.SplitInfo[0].SplitEntityId,
                 Amount: initialBalance
              }
    SplitBreakdown.push(temp)
  }
  let SplitBreakdown = []

  return {
    ID: fru.ID, Balance : initialBalance,  SplitBreakdown:[

    ],
}
} 

// te(fru)
return res.te(fru);

});


const port = 3000 || process.PORT.ENV;


app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`);
});