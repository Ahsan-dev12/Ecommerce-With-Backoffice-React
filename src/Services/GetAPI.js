const baseUrl = "http://localhost:500";

const GetAPIs ={
    
    getCate: async () => {
        
        try{
             const res = await fetch(`${baseUrl}/categories`);

             if(!res.ok){
                throw new Error("Fetching failed, try again");
                 
             }else{
                const result= await res.json();
                return result;
             }

        }
          
        catch(error){
            console.log("Error = ", error);
            return null;
        } 
    },


    getProduct : async () =>{

        try{
           
            const res = await fetch(`${baseUrl}/products`);

            if(!res.ok){
                throw new Error("Fetching failed, try again");
            }else{

                const result = await res.json();
                return result;
            }
        }catch(error){
            
            console.log(error);
            return null
        }
    }




};

export {GetAPIs};