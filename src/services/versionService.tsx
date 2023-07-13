import API from "./config";
import ENDPOINTS from "./endpoints";

const VersionService = {
    getVersionsByModel: (modelId: number) => new Promise((resolve, reject) => {
      API.get(ENDPOINTS.VERSIONS+"/s/"+modelId)
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
    saveVersions: (data: any, modelId: number) => new Promise((resolve, reject) => {
      API.post(ENDPOINTS.VERSIONS+"/y/"+modelId, data)
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
    saveVersionsV2: (data: any, modelId: number) => new Promise((resolve, reject) => {
      API.post(ENDPOINTS.VERSIONS+"setversion/", data)
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

export default VersionService;