import { connect, model } from "mongoose";

import companySchema from "../shared/database/schemas/CompanyWithMiddleman.js";

connect("mongodb://127.0.0.1:27017/test");

model("companies", companySchema);
