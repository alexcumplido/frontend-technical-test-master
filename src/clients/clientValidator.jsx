import validator from "validator";

export const validate = (value, setError) => {
  const urlBase = "https://api.github.com/repos/";
  const isValidUrl = validator.isURL(value, {
    protocols: ["https"],
    require_protocol: true,
    require_host: true,
  });

  const isSpecific = value.startsWith(urlBase);

  if (isValidUrl && isSpecific) {
    setError("");
    return true;
  } else {
    setError("Is Not Valid URL");
    return false;
  }
};
