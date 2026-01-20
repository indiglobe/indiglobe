import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(it-solutions)/services/digital-marketing/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(it-solutions)/services/digital-marketing/"!</div>
}
