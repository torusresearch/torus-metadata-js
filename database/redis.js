const log = require("loglevel");
const redis = require("redis");

const { REDIS_PORT, REDIS_HOSTNAME } = process.env;
const client = redis.createClient({ host: REDIS_HOSTNAME, port: REDIS_PORT });

client.on("error", (error) => {
  log.error(error);
});

client.on("ready", () => {
  log.info("Connected to redis");
});

module.exports = client;
