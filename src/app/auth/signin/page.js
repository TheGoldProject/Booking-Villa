import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";

export default async function SignInPage(props) {
  return (
    <div className="flex flex-col gap-2 mt-20">
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <label htmlFor="email">
          Email
          <input name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" id="password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
// export default function SignIn() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex flex-col gap-6 w-[800px]">
//         <Card className="overflow-hidden">
//           <CardContent className="grid p-0 md:grid-cols-2">
//             <div className="p-6 md:p-8">
//               <div className="flex flex-col gap-6">
//                 <div className="flex flex-col items-center text-center">
//                   <h1 className="text-2xl font-bold">Welcome back</h1>
//                   <p className="text-balance text-muted-foreground">
//                     Login to your TG Villa account
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-4">
//                   <form action={actions.handleSignIn}>
//                     <Button variant="outline" className="w-full">
//                       <Image
//                         src="/icons/google.svg"
//                         alt="Google"
//                         width={20}
//                         height={20}
//                       />
//                       Login with Google
//                     </Button>
//                   </form>
//                 </div>
//                 <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//                   <span className="relative z-10 bg-background px-2 text-muted-foreground">
//                     Or continue with
//                   </span>
//                 </div>

//                 <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="m@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <div className="flex items-center">
//                     <Label htmlFor="password">Password</Label>
//                     <a
//                       href="#"
//                       className="ml-auto text-sm underline-offset-2 hover:underline"
//                     >
//                       Forgot your password?
//                     </a>
//                   </div>
//                   <Input id="password" type="password" required />
//                 </div>
//                 <Button type="submit" className="w-full">
//                   Login
//                 </Button>

//                 <div className="text-center text-sm">
//                   Don&apos;t have an account?{" "}
//                   <a href="#" className="underline underline-offset-4">
//                     Sign up
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="relative hidden bg-muted md:block">
//               <Image
//                 src="/images/villa/40.jpg"
//                 alt="Image"
//                 width={500}
//                 height={500}
//                 className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//               />
//             </div>
//           </CardContent>
//         </Card>
//         <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
//           By clicking continue, you agree to our{" "}
//           <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
//         </div>
//       </div>
//     </div>
//   );
// }
