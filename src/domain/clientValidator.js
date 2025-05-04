import validator from "validator";
import { GITHUB_API_REPO_URL } from "../infrastructure/constants/constants.js";
export const validate = (value) => {
  const isValidUrl = validator.isURL(value, {
    protocols: ["https"],
    require_protocol: true,
    require_host: true,
  });

  const isSpecific = value.startsWith(GITHUB_API_REPO_URL);

  if (isValidUrl && isSpecific) {
    return true;
  } else {
    return false;
  }
};
