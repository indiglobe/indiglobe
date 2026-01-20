import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(it-solutions)/services/tele-calling/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(it-solutions)/services/tele-calling/"!</div>
}
