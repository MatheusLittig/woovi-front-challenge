import { z } from "zod"

const PaymentSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  total: z.number(),
  term: z.string(),
  options: z.array(
    z.object({
      amount: z.number(),
      value: z.number(),
      total: z.number(),
      promo: z.string().nullable(),
    })
  ),
})

export type Payment = z.infer<typeof PaymentSchema>

const CreditCardSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform(str =>
      str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    ),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF Inválido"),
  credit_card: z
    .string()
    .regex(
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/
    ),
  due_at: z.date(),
  installments: z.object({
    amount: z.number(),
    value: z.number(),
  }),
})

export { CreditCardSchema, PaymentSchema }
