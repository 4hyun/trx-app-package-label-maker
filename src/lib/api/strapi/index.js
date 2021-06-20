import { BASE_URL } from "./config"

const fetchStrapi = async (resPath) => {
  if (!resPath) throw new Error("Invalid resPath: " + resPath)
  return fetch(`${BASE_URL}${resPath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_STRAPI_AUTH}`,
    },
  })
}

export default fetchStrapi
