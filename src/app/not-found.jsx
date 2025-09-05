import { NotFoundPage } from 'nextra-theme-docs'

export default function CustomNotFound() {
  const body = (
    <div style={{ fontSize: '2.5em' }}>
      <h1>
        <strong>404:</strong> Página não encontrada.
      </h1>
    </div>
  )

  return (
    <NotFoundPage
      title="Página não encontrada"
      content="Reporte este problema se achar que é um erro."
      children={body}
    />
  )
}
