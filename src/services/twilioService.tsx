import API from "./config";
import ENDPOINTS from "./endpoints";

const TwilioService = {
  sendCotizacion: (data: any) => new Promise((resolve, reject) => {
    API.post(ENDPOINTS.TWILIO+'cot', data)
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

export default TwilioService;