import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

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


export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session }, } = await supabase.auth.getSession();

    if (session) {
      loggedIn = true;
    }
  } catch (error) {
    console.error('Home: Error', error)
  } finally {
    if (loggedIn) {
      redirect("user-app", RedirectType.replace);
    }
  }

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <Tabs defaultValue="account" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Inscreva-se</TabsTrigger>
          <TabsTrigger value="password">Entrar</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="flex justify-center items-center">
              <CardTitle>
                <img className="h-40 w-40 rounded-full" src="logomarca.png" alt="" />
              </CardTitle>
              <CardDescription>
                Tenha tudo em um só lugar. Inscreva-se no <span className="font-extrabold">All In One. </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Inscreve-se</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
