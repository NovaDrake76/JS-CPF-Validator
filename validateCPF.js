  const validateCPF = (cpf: string) => {
    const cpfAux = cpf.replace(/\D/g, "");
    if (cpfAux.length == 11) {
      let CPFDigits = cpfAux.substring(0, 9);
      let verifyingDigits = cpfAux.substring(9);

      let cpfArray = CPFDigits.split("");
      let weight = 10;
      let sum = 0;
      for (let i = 0; i < cpfArray.length; i++) {
        sum += parseInt(cpfArray[i]) * weight;
        weight--;
      }

      let resto = sum % 11;

      let firstVerifyingDigit = resto < 2 ? 0 : 11 - resto;

      CPFDigits = CPFDigits + firstVerifyingDigit;
      cpfArray = CPFDigits.split("");
      weight = 11;
      sum = 0;
      for (let i = 0; i < cpfArray.length; i++) {
        sum += parseInt(cpfArray[i]) * weight;
        weight--;
      }

      resto = sum % 11;

      let secondVerifyingDigit = resto < 2 ? 0 : 11 - resto;

      let verifyingDigitsCPF = firstVerifyingDigit.toString();
      verifyingDigitsCPF += secondVerifyingDigit.toString();

      if (verifyingDigitsCPF == verifyingDigits) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
