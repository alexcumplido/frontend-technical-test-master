import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { InputError } from "../inputError/InputError";
import search from "../../assets/images/search.svg";
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
    <form className={className} onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder={placeholder}
        className={`${className}__input`}
      />
      <InputError className={`${className}__error-show`} text={errorMessage} />

      <Button type={"submit"} className={`${className}__submit`}>
        <Icon src={search} sizes={21} text={"Search"} />
      </Button>
    </form>
  );
}
