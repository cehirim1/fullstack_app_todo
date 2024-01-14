/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HtKmYoOO7rV
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useLoginMutation } from "@/store/API/UserAuthAPI";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function LoginForm() {
  const [login, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const loginSubmit = async (event) => {
    event.preventDefault();
    console.log(loginData);

    await login(loginData)
      .unwrap()
      .then((res) => console.log(res));
  };

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <div
      key="1"
      className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto mt-4"
    >
      <Tabs className="w-full" defaultValue="login">
        <TabsList className="flex border-b">
          <TabsTrigger className="flex-1 text-center py-2" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="flex-1 text-center py-2" value="signup">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form onSubmit={loginSubmit} className="py-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                placeholder="m@example.com"
                required
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <Input
                name="password"
                id="login-password"
                required
                type="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <Button className="w-full my-4" type="submit">
              Login
            </Button>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                <ChromeIcon className="mr-2 h-4 w-4" />
                Login with Google
              </Button>
              <Button className="w-full" variant="outline">
                Login with Facebook
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <div className="py-4">
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" required type="password" />
            </div>
            <Button className="w-full my-4" type="submit">
              Sign Up
            </Button>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                Sign up with Google
              </Button>
              <Button className="w-full" variant="outline">
                Sign up with Facebook
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
