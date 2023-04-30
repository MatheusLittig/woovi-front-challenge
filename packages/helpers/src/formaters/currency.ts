const langCurr = {
  "pt-BR": "BRL",
  "en-US": "USD",
  "es-ES": "EUR",
  "fr-FR": "EUR",
  "ja-JP": "JPY",
  /** add more currencies for later */
}

const currency = (lang: keyof typeof langCurr, value: number) =>
  Intl.NumberFormat(lang, {
    currency: langCurr[lang],
    style: "currency",
  }).format(value)

export { currency }
