const BASE_URL =
  (process.env.NODE_ENV === "development" && "http://localhost:1337") || (process.env.NODE_ENV === "production" && "https://trx.dmkt.ca")

export { BASE_URL }
