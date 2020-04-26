//import Raven from "raven-js";
function init() {
  /* Raven.config(
    "https://628be1f2f8954f7cac5287c14a4772b4@o383769.ingest.sentry.io/5214152",
    {
      release: "1-0-0",
      environment: "development",
    }
  ).install(); */
}

function log(error) {
  console.log(error);
  //Raven.captureException(error);
}

export default {
  init,
  log,
};
