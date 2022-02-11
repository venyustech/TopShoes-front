import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserContext from "./Providers/Auth";

export default function App() {
    const [userToken, setUserToken] = useState(null);
    const [userInfos, setUserInfos] = useState('');

    return (
        <UserContext.Provider value={{ userToken, setUserToken, userInfos, setUserInfos }} >
            <BrowserRouter>
                <GlobalStyles />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}