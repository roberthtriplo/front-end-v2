import API from "./config";
import ENDPOINTS from "./endpoints";

const MakeService = {
    getAll: () => new Promise((resolve, reject) => {
        API.get(ENDPOINTS.MAKES)
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

export default MakeService;