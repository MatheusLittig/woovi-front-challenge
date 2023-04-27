export default function CheckoutPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  )
}
