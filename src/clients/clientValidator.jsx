import validator from "validator";

export const validate = (value, setError) => {
  const isValidUrl = validator.isURL(value, {
    protocols: ["https"],
    require_protocol: true,
    require_host: true,
  });

  const isSpecific = value.startsWith("https://api.github.com/repos/");

  if (isValidUrl && isSpecific) {
    return true;
  } else {
    setError("Is Not Valid URL");
    return false;
  }
};
