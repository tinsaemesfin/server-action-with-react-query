'use server'
import {db} from "@/server";
const GetProducts  = async () => {
    
    try{
       const products = await db.query.products.findMany();  
       const plainProducts = JSON.parse(JSON.stringify(products));
       console.log(plainProducts)
       return {products:plainProducts};
    }
    catch(err){
        console.log(err);
        // return {error: err.toString()};
    }
}

export default GetProducts;