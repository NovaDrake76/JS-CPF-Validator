  const validateCNPJ = (cnpj: string) => {
    const cnpjAux = cnpj.replace(/\D/g, "");
    if (cnpjAux.length == 14) {
      let CNPJDigits = cnpjAux.substring(0, 12);
      let verifyingDigits = cnpjAux.substring(12);

      let cnpjArray = CNPJDigits.split("");
      let weight = 5;
      let sum = 0;
      for (let i = 0; i < cnpjArray.length; i++) {
        sum += parseInt(cnpjArray[i]) * weight;
        weight--;
        if (weight < 2) {
          weight = 9;
        }
      }

      let resto = sum % 11;

      let firstVerifyingDigit = resto < 2 ? 0 : 11 - resto;

      CNPJDigits = CNPJDigits + firstVerifyingDigit;
      cnpjArray = CNPJDigits.split("");
      weight = 6;
      sum = 0;
      for (let i = 0; i < cnpjArray.length; i++) {
        sum += parseInt(cnpjArray[i]) * weight;
        weight--;
        if (weight < 2) {
          weight = 9;
        }
      }

      resto = sum % 11;

      let secondVerifyingDigit = resto < 2 ? 0 : 11 - resto;

      let verifyingDigitsCNPJ = firstVerifyingDigit.toString();
      verifyingDigitsCNPJ += secondVerifyingDigit.toString();

      if (verifyingDigitsCNPJ == verifyingDigits) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
