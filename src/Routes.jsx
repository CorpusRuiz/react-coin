import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coin from './pages/Coin';
import Favoritos from './pages/Favoritos';

const createBrowserRouter = (routes) => {
    return () => (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Router>
    );
};

const router =  createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/coin/:id', element: <Coin /> },
    {path: '/favoritos', element: <Favoritos />}
]);

export default router