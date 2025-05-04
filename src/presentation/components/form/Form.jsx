import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { InputError } from "../inputError/InputError";
import search from "../../../assets/images/search.svg";
import { GITHUB_API_PLACHOLDER } from "../../../infrastructure/constants/constants.js";
import "./form.css";

export function Form({
  handleSubmit,
  inputValue,
  setInputValue,
  errorMessage,
  placeholder,
  className,
}) {
  return (
    <form className={className.form} onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder={placeholder}
        className={className.input}
      />

      {errorMessage && (
        <InputError
          className={className.error}
          text={`Enter a valid url format: ${GITHUB_API_PLACHOLDER}`}
        />
      )}

      <Button type={"submit"} className={className.button}>
        <Icon src={search} sizes={21} text={"Search"} />
      </Button>
    </form>
  );
}
