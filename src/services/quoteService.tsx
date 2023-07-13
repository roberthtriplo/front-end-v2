import API from "./config";
import ENDPOINTS from "./endpoints";

const QuoteService = {
  get: (id: number) => new Promise((resolve, reject) => {
    API.get(ENDPOINTS.QUOTES+id)
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
  save: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.USERS+"add", data)
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
  update: (data: any) => new Promise((resolve, reject) => {
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
  }),
  getTuCarro: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.QUOTES+"tucarro", data)
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
  getOlx: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.QUOTES+"olxautos", data)
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
  sendPDF: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.PDF, data)
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

export default QuoteService;