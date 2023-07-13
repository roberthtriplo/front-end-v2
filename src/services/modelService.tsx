import API from "./config";
import ENDPOINTS from "./endpoints";

const ModelService = {
    getModelsByYear: (yearId: number) => new Promise((resolve, reject) => {
        API.get(ENDPOINTS.MODELS+"/s/"+yearId)
        .then(
            res => res.data
          )
          .then(
            data => resolve(data)
          )
          .catch(
            err => reject(err)
          )
    }),
    saveModels: (data: any, yearId: number) => new Promise((resolve, reject) => {
      API.post(ENDPOINTS.MODELS+"/y/"+yearId, data)
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

export default ModelService;