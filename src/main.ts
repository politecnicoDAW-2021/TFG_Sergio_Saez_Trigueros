import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");

Amplify.configure({
  ...awsconfig,
  API: {
    graphql_headers: async () => {
      const session = await Auth.currentSession().catch(() => null);
      let headers = {};

      if (session) {
        const accessToken = session.getIdToken();

        if (accessToken) {
          headers["authorization"] = accessToken.getJwtToken();
        }
      }

      return headers;
    },
  },
});
