 "use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Register() {
  return (
    <main className="flex items-center justify-center bg-slate-300 lg:h-screen">
        <section className="text-black bg-white border-2 border-black outline-2 ">
        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="text-base font-poppins">Register</TabsTrigger>
        <TabsTrigger value="password" className="text-base font-poppins">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription >
            We're here to guide you every step of the way.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name" className="font-poppins">Full Name</Label>
              <Input id="name" placeholder="Sarah"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email"  className="font-poppins">Email</Label>
              <Input id="email" placeholder="@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username"  className="font-poppins">Username</Label>
              <Input id="username" placeholder="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password"  className="font-poppins">Password</Label>
              <Input id="username" placeholder="*****" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password"  className="font-poppins">Confirm Password</Label>
              <Input id="confirm-password" placeholder="*****" />
            </div>
          </CardContent>
          
          <CardFooter>
          <p>Got an Account? <u className="text-blue-500 ">Sign in</u>
          </p>
          </CardFooter>
          <CardFooter className=""><Button className="justify-center px-16 mx-auto bg-blue-500 rounded-2xl">Sign Up</Button></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
            We're here to guide you’re back
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="justify-center px-16 mx-auto bg-blue-500 rounded-2xl">Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </section>
        
    </main>
    
  )
}
