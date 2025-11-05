import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Button>
      Shadcn Works
    </Button>
  </div>
}
