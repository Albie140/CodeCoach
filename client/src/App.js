import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Add from "./pages/AddHooks";
// import Edit from "./pages/Edit";

import RegisterButtons from "./components/RegisterButtons";
import ProgressBar from "./components/ProgressBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUpGrader from "./components/SignUpGrader";

function App() {
  // const [search, setSearch] = useState("");

  // const handleSearch = event => {
  //   event.preventDefault();

  //   console.log(event.target.previousSibling.value);

  //   setSearch(event.target.previousSibling.value);
  // }

  return (
    <section className="container-fluid">
      {/* <Router>
        <Header> */}
          {/* <Nav search={search} handleSearch={handleSearch} /> */}
        {/* </Header>
        <Main>
          <Route exact path="/" component={() => <Home search={search} />} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} /> */}
        {/* </Main>
      </Router> */}


      < Header />
      <RegisterButtons />
      <ProgressBar />
      <Login />
      <SignUp />
      <SignUpGrader />
      <Footer />
    </section>
  );
}

export default App;