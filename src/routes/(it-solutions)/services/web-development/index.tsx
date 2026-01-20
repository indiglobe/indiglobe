import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(it-solutions)/services/web-development/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(it-solutions)/services/web-development/"!</div>
}
