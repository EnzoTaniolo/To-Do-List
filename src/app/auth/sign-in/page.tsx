import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SignInForm } from './sign-in-form'

export default function signIn() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <h1>Sign-In</h1>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  )
}
