import { SignUpButton, SignInButton} from "@clerk/clerk-react";
import Button from "./Button";

function User() {
    return (
        <>
          <SignUpButton>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        </SignUpButton>
            
                <Button className="hidden lg:flex" href="#login">
                <SignInButton>
                    Sign In
                   </SignInButton>
               </Button>
       
      
        </>
    )
}



const AuthButton = () => { 
    
    return (
        <>
         <User/>
        
        </>
    )
};
 
export default AuthButton