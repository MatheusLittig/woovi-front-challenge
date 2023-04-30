"use client"

import { format, fx } from "@woovi/helpers"
import { Button, Display, Input, Select } from "@woovi/ui"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useStore } from "@res/adapters/react/use-store"

const validationSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  creditCard: z
    .string()
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Cartão de crédito inválido")
    .nonempty("Cartão de crédito obrigatório"),
  expiration: z.string().nonempty("Data de vencimento obrigatória"),
  cvv: z.string().length(3),
})

type ValidationSchema = z.infer<typeof validationSchema>

const CreditCardForm = () => {
  const { state, reset, onSelectInstallment } = useStore("payment", store => ({
    reset: () => store.dispatch("reset", undefined),
    onSelectInstallment: (id: number) => {
      console.log(id)

      const selected = state.installments.options.find(i => i.amount === id)

      store.dispatch("setSelected", id)
      store.dispatch("setInstaments", {
        selected,
      })
    },
  }))
  const route = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async data => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(data)
        reset()
        route.push("/")
      }, 1500)
    )

    return
  }

  console.log(state)

  return (
    <form
      style={{ gap: "1.75rem" }}
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Nome completo"
          full
          id="name"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-400">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Input
          id="cpf"
          {...register("cpf")}
          type="text"
          placeholder="CPF"
          maxLength={14}
          onChange={e => (e.target.value = fx.mask.cpf(e.target.value))}
          full
        />
        {errors.cpf && (
          <span className="text-red-400">{errors.cpf.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Input
          {...register("creditCard")}
          placeholder="Cartão de crédito"
          id="credit_card"
          full
          maxLength={19}
          onChange={e => (e.target.value = fx.mask.credit_card(e.target.value))}
        />
        {errors.creditCard?.message && (
          <span className="text-red-400 text-bold">
            {errors.creditCard.message}
          </span>
        )}
      </div>

      <div className="flex items-center gap-7" style={{ gap: "1.75rem" }}>
        <div className="flex flex-col gap-3">
          <Input
            id="expiration"
            {...register("expiration")}
            placeholder="Vencimento"
            maxLength={5}
            full
            onChange={e =>
              (e.target.value = fx.mask.expiration(e.target.value))
            }
          />
          {errors.expiration?.message && (
            <span className="text-red-400">{errors.expiration.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Input
            id="cvv"
            {...register("cvv")}
            placeholder="CVV"
            full
            onChange={e => (e.target.value = fx.mask.cvv(e.target.value))}
            maxLength={3}
          />
          {errors.cvv?.message && (
            <span className="text-red-400">{errors.expiration.message}</span>
          )}
        </div>
      </div>

      <Select
        full
        defaultValue={state.installments.selected.amount}
        data={state.installments.options.map(i => ({
          id: i.amount,
          label: `${i.amount}x de ${format.currency("pt-BR", i.value)}`,
        }))}
        onSelectOpt={onSelectInstallment}
      />

      <Button type="submit" full disabled={isSubmitting}>
        <Display when={isSubmitting} fallback="Pagar">
          Enviando...
        </Display>
      </Button>
    </form>
  )
}

export default CreditCardForm
