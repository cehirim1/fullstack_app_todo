/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HtKmYoOO7rV
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useLoginMutation, useSignupMutation } from "@/store/API/UserAuthAPI";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { toast as reactToastify } from "react-toastify";
import { useDispatch } from "react-redux";
import { userToken } from "@/store/slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();
  const [
    signup,
    { isError: signupIsError, data: signupData, error: signupError },
  ] = useSignupMutation();

  const [loginData, setLoginData] = useState({ email: "", password: "" }); //state for existing users
  const [user, setUser] = useState({ email: "", password: "" }); //stores state for new users

  //handles new user submission
  const signupSubmit = async (event) => {
    event.preventDefault();

    await reactToastify.promise(signup(user).unwrap(), {
      pending: "Creating account...",
      success: "Account created!",
      error: "Uh oh! Something went wrong.",
    });
  };

  //retrieves new user information
  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //handles login submit event for existing users
  const loginSubmit = async (event) => {
    event.preventDefault();

    await reactToastify
      .promise(login(loginData).unwrap(), {
        pending: "Logging in...",
        success: "Logged in!",
        error: "Uh oh! Something went wrong.",
      })
      .then((res) => dispatch(userToken(res?.token)))
      .then(() => navigate("/dashboard"));
  };

  //gets user information for existing users
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  if (isError) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <>
      <div key="1" className="shadow-md rounded-lg p-4 max-w-md mx-auto mt-4">
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
            <form onSubmit={signupSubmit} className="py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  onChange={updateUser}
                  value={user.email}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  required
                  type="password"
                  onChange={updateUser}
                  value={user.password}
                />
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
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </>
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
