import API from "./config";
import ENDPOINTS from "./endpoints";

const YearService = {
    getYearByMake: (makeId: number) => new Promise((resolve, reject) => {
        API.get(ENDPOINTS.YEARS+"/s/"+makeId)
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

export default YearService;