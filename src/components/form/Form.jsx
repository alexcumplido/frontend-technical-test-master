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
    <form className={className.form} onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder={placeholder}
        className={className.input}
      />
      <InputError className={className.error} text={errorMessage} />

      <Button type={"submit"} className={className.button}>
        <Icon src={search} sizes={21} text={"Search"} />
      </Button>
    </form>
  );
}
