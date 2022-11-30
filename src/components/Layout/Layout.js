// import { useRouter } from "next/router";
import { Outlet, useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import ScrollUp from "../ScrollUp/ScrollUp";
import Footer from "./Footer";
import FooterTwo from "./FooterTwo";
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";


export default function Layout({ children }) {
	let {pathname} = useLocation();
	// console.log(location)
	return (
		<>
			{pathname === "/index-three" ? <NavbarTwo /> : <Navbar />}
				<main><Outlet/></main>
			{pathname === "/index-two" ? <FooterTwo /> : <Footer />}
			<ScrollUp />
			<Preloader />
		</>
	);
}
