import API from "./config";
import ENDPOINTS from "./endpoints";

const CarsService = {
    getAll: (order: any) => new Promise((resolve, reject) => {
        API.post(ENDPOINTS.CARS+'s/all', {"order": order})
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
    getById: (id: any) => new Promise((resolve, reject) => {
      API.get(ENDPOINTS.CARS+'byId/'+id)
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
    updateSeparate: (data: any) => new Promise((resolve, reject) => {
      API.post(ENDPOINTS.CARS+'separate', data)
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
  getMakes: () => new Promise((resolve, reject) => {
    API.get(ENDPOINTS.CARS+'get-makes/')
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
  getYearsByMake: (make: any) => new Promise((resolve, reject) => {
    API.get(ENDPOINTS.CARS+'get-years-by-make/'+make)
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
  getModelsByYear: (make: any, year: any) => new Promise((resolve, reject) => {
    API.get(ENDPOINTS.CARS+'get-models-by-year/'+make+'/'+year)
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
  getVersionsByModel: (make: any, model: any) => new Promise((resolve, reject) => {
    API.get(ENDPOINTS.CARS+'get-versions-by-model/'+make+'/'+model)
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
  getCarro: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.CARS+"p/get-car-filter", data)
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
}

export default CarsService;