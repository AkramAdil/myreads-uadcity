import "./App.css";
import { useState } from "react";
import BookListPage from "./components/BookListPage";
import SearchPage from "./components/SearchPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookListPage showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
