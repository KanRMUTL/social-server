const app = {
  db: {
    host: "ds021984.mlab.com",
    port: 21984,
    name: "server",
    username: "admin",
    password: "kan0841753818"
  },
  jwt: {
    APP_SECRET: "condom2018",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
