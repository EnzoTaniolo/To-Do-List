import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SignUpForm } from './sign-up-form'

export default function signUp() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <h1>Sign-Up</h1>
      </CardHeader>

      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}
