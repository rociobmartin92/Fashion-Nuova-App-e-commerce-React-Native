
import axios from "axios";


export const fetchList = async () => {
let data = []
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
data = response.data
    } catch (error) {
      return error
    }

return  data 

  };

