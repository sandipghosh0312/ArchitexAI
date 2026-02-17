import { Box } from "lucide-react"
import Button from "./ui/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
    const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>();

    const handleAuth = async () => {
        console.log(`Before processing auth: isSignedIn - ${isSignedIn}`)
        if (isSignedIn) {
            try {
                await signOut();
            } catch (error) {
                console.log(`puter sign out could not happen: ${error}`)
            }
        } else {
            try {
                await signIn();
            } catch (error) {
                console.log(`Puter sign in did not happen: ${error}`)
            }
        }
        console.log(`After processing auth: isSignedIn - ${isSignedIn}`)
    }

    return (
        <header className='navbar'>
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className="logo" />
                        <span className="name">ArcitexAI</span>
                    </div>

                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className="actions">
                    {
                        isSignedIn ? (
                            <>
                                <span className="greetings">
                                    {userName ? `Hi ${userName}` : 'Signed In'}
                                </span>
                                <Button className="btn" onClick={handleAuth}>Log Out</Button>
                            </>
                        ): (
                            <>
                                <Button onClick={ handleAuth } variant="ghost" size="sm">Sign In</Button>
                                <a href="#upload" className="cta">Get Started</a>
                            </>
                        )
                }
            </div>
        </nav>
    </header >
  )
}

export default Navbar