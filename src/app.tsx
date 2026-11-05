import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import ListaProdutos from "./pages/listaprodutos/ListaProdutos";
import Footer from "./Components/Footer/footer";
import Home from "./pages/home/home";


export default function app() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="produtos" element={<ListaProdutos/>}/>
            </Routes>
            <Footer />
        </>
    )
}
