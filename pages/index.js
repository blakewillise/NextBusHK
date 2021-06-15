import dynamic from "next/dynamic"
import "../public/staic/sass/styles.scss";
import searchBar from "../components/searchBar"
import Tags from "../components/Tags"
import {RouteProvider} from "../components/RouteContext"
import {CSSTransistion} from "react-transition-group"

const MapWIthNoSSR = dynamic(()=>import ("../components/Map"),{ssr: false,});

const Home = (props) =>{
   <CSSTransition in {true} appear={true} timeout={1200} className={fade}>
<RouteProvider>

}