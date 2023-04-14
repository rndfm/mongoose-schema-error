import { connect, model } from "mongoose";

import companySchema from "../shared/database/schemas/CompanyWithMiddleman.js";

connect("mongodb://127.0.0.1:27017/test");

const Company = model("companiesWithMiddleman", companySchema);

const company = new Company({
    name: 'Microsoft',
    middleman: {
        products: [
            { 
                name: 'Windows'
            }
        ]
    }
});

company.save();

console.log(company);