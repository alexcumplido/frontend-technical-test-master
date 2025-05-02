import validator from "validator";
import { GITHUB_API_REPO_URL } from "../constants/constants";
export const validate = (value, setError) => {
  const isValidUrl = validator.isURL(value, {
    protocols: ["https"],
    require_protocol: true,
    require_host: true,
  });

  const isSpecific = value.startsWith(GITHUB_API_REPO_URL);

  if (isValidUrl && isSpecific) {
    setError("");
    return true;
  } else {
    setError("Is Not Valid URL");
    return false;
  }
};
