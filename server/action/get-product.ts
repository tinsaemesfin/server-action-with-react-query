'use server'
import {db} from "@/server";
const GetProducts  = async () => {
    
    try{
       const products = await db.query.products.findMany();  
       return products;
    }
    catch(err){
        console.log(err);
        
    }
}

export default GetProducts;