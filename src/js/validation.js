import { t } from "src/boot/i18n";

const simpleFieldMaxLength = 64;
export const confirmCodeLength = 6;

export class RegularExpressions {
  static emailAddressRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))/;
  static emailDomainRegEx = /((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

export class Validation extends RegularExpressions {
  static valueExistValidation = val => !!val || t("errors.fieldRequired");
  static valueMaxLengthValidation = val => val.length <= simpleFieldMaxLength || t("errors.tooLongValue");
  static passwordMinLengthValidation = val => val.length >= 8 || t("errors.shortPassword");

  static emailDomainValidation = val => this.emailDomainRegEx.test(val) || t("errors.invalidEmailDomain");
  static emailAddressValidation = val => this.emailAddressRegEx.test(val) || t("errors.invalidEmailAddress");
  static emailValidation = val => this.emailRegEx.test(val) || t("errors.invalidEmail");

  static confirmCodeValidation = val => val.length === confirmCodeLength || t("errors.confirmCode");
  static checkConfirmCode = val => new Promise(resolve => setTimeout(() => resolve(val === "111111" || t("errors.confirmCodeIsntRight")), 1000));
}

export class Rules extends Validation {
  static simpleRule = [this.valueExistValidation, this.valueMaxLengthValidation];
  static passwordRule = [this.valueExistValidation, this.valueMaxLengthValidation, this.passwordMinLengthValidation];
  static emailRule = [this.valueExistValidation, this.valueMaxLengthValidation, this.emailValidation];
  static emailDomainRule = [this.valueExistValidation, this.valueMaxLengthValidation, this.emailDomainValidation];
  static confirmCodeRule = [this.valueExistValidation, this.confirmCodeValidation, this.checkConfirmCode];
}

export const validationMixin = {
  beforeCreate() {
    let keys = Object.keys(Rules);
    let values = Object.values(Rules);
    for (let i = 0; i < keys.length; i++) {
      this[keys[i]] = values[i];
    }
  }
};
