const mask = {
  cpf: (text: string) => {
    return text
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  },

  credit_card: (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
  },

  expiration: (text: string) => {
    return text.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
  },

  cvv: (text: string) => {
    return text.replace(/\D/g, "")
  },
}

export { mask }
