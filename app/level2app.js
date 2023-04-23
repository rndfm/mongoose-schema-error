import Mongoose from "mongoose";
import companySchema from "../shared/database/schemas/CompanyWithMiddleman.js";

Mongoose.connect("mongodb://127.0.0.1:27017/test");

const Company = Mongoose.model("companiesWithMiddleman", companySchema);

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