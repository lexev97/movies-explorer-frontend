class InputValidator {
  static isEmpty(input) {
    return input === undefined || input.length <= 0;
  }

  static isToShort(input, length) {
    return input === undefined || input.length < length;
  }

  static isToLong(input, length) {
    return input === undefined || input.length > length;
  }

  static passIsToShort(input, length) {
    return input === undefined || input.length < length;
  }

  static isEmail(input) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(input);
  }

  static isName(input) {
    const nameRegex = /[\d\W\_]*[^a-яё -]/gi;
    return nameRegex.test(input);
  }
}

export default InputValidator;
