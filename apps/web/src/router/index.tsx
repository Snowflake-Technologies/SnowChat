import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home() {

  return (

    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#1e1f22",
        color: "white"
      }}
    >

      <div>

        <h1>
          ❄️ SnowChat
        </h1>

        <p>
          Discord Alternative
        </p>

      </div>

    </div>

  );

}

export default function Router() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>

  );

}
