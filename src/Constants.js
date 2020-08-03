// Constants.js
const prod = {
    url: {
        API_URL: "",
        FRONT_END_URL: ""
     }
   };
const dev = {
    url: {
        API_URL: "http://localhost:3000", // rails - start first
        FRONT_END_URL: "http://localhost:3001" // react
    }
   };
export const config = process.env.NODE_ENV === "development" ? dev : prod;
