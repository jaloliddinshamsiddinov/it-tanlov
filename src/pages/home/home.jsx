import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Hero from "./components/hero";
import Information from "./components/information";
import NotificationEmail from "./components/notificationEmail";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mt-[75px]"></div>
            <Hero />
            <Information/>
            <NotificationEmail/>
            <Footer/>
        </>
    )
}
