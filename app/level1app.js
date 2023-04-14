import { connect, model } from "mongoose";

import companySchema from "../shared/database/schemas/Company.js";

connect("mongodb://127.0.0.1:27017/test");

const Company = model("companies", companySchema);

const company = new Company({ 
    name: 'Microsoft', 
    products: [
        { 
            name: 'Windows' 
        }
    ]
});

company.save();

console.log(company);