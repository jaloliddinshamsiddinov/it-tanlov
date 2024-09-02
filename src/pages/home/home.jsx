import Navbar from "../../components/navbar";
import Hero from "./components/hero";
import Information from "./components/information";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mt-[75px]"></div>
            <Hero />
            <Information/>
        </>
    )
}
