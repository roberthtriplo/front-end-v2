import API from "./config";
import ENDPOINTS from "./endpoints";

const PriceService = {
  save: (data: any) => new Promise((resolve, reject) => {
    API.put(ENDPOINTS.QUOTES, data)
    .then(
        res => res.data
    )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )
  })
}

export default PriceService;