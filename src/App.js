import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UserContext from "./Providers/Auth";
import FAQPage from "./pages/FAQPage";
import CartPage from "./pages/CartPage";
import CollectionsId from "./pages/CollectionsId";

export default function App() {
    const [userToken, setUserToken] = useState(null);
    const [userInfos, setUserInfos] = useState('');
    const [serverItems, setServerItems] = useState("");
    const [cartItems, setCartItems] = useState([]);
    let contador = 0;

    return (
        <UserContext.Provider value={{ userToken, setUserToken, userInfos, setUserInfos, serverItems, setServerItems, cartItems, setCartItems, contador }} >
            <BrowserRouter>
                <GlobalStyles />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/collections" element={<CollectionsPage />} />
                    <Route path="/collections/:index" element={<CollectionsId />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}