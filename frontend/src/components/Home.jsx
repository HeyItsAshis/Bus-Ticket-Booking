import NavigationBar from "./NavigationBar";
import About from "./About";
import SearchBox from "./Searchbar";
import Slider from "./Slider";
import HangingIcons from "./Common/hangingIcon";
import Footer from "./Common/Footer";
import FaqList from "./FaqList";
const Home = () => {
    return (
        <>
        <div className="body bg-img p-0 m-0">
        <NavigationBar/>
        <Slider/>
        <SearchBox/>
        <About/>
        <HangingIcons/>
        <FaqList/>
        <Footer/>
        </div>
        </>
    )

}

export default Home;