import * as core from "@actions/core";
import { NetlifyAPI } from "netlify";

const run = async () => {
  try {
    const netlifyToken = core.getInput("netlifyToken");
    const siteId = core.getInput("siteId");
    const deployId = core.getInput("deployId");
    core.setSecret("netlifyToken");

    const netlifyClient = new NetlifyAPI(netlifyToken);

    await netlifyClient.restoreSiteDeploy({
      site_id: siteId,
      deploy_id: deployId,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
