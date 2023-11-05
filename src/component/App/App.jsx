import { Suspense, lazy} from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Header, Section } from "./App.styled";
// import { Home } from "../Home/home";

const Home = lazy(() => import('../Home/home'));
const Catalog = lazy(() => import("../Catalog/catalog"));
const Favorite = lazy(() => import("../Favorite/favorite"));

export const App = () => {


  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Section>
        <Header>
          <nav className="nav">
            <NavLink className={"button-8"} to="/">
              Home
            </NavLink>
            <NavLink className={"button-8"} to="/catalog">
              Catalog
            </NavLink>
            <NavLink className={"button-8"} to="/favorite">
              Favorite
            </NavLink>
          </nav>
        </Header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/favorite" element={<Favorite/>} />
            <Route path="*" element={<h1>Page is not exist</h1>} />
          </Routes>
        </main>
      </Section>
    </Suspense>
  );
};
