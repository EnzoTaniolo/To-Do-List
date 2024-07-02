import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function signUp() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <h1 className="">Sign-Up</h1>
      </CardHeader>

      <CardContent>
        <form action="" className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" />
            <Link href="/auth/sign-in">
              <p className="mt-2 text-right text-xs underline font-semibold">
                Already registered? Sign-in
              </p>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button>Sign-Up</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
