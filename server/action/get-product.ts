import {db} from "@/server";
const GetProducts  = async () => {
    
    try{
       const products = await db?.query.products.findMany();  
       return products;
    }
    catch(err){
        console.log(err);
        return {error:err};
    }
}

export default GetProducts;