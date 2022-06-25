import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Table from "./Table";

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [activeNavigation, setActiveNavigation] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/${activeNavigation}`);
        if (!response.ok) throw Error("Error: Could not get resource");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [activeNavigation]);

  return (
    <>
      <header>
        <Navigation
          activeNavigation={activeNavigation}
          setActiveNavigation={setActiveNavigation}
        />
      </header>
      <main>
        {fetchError && !isLoading && (
          <p className="fetch-error">{fetchError}</p>
        )}
        {isLoading && <p className="loading">Loading...</p>}
        {!fetchError && !isLoading && <Table items={items} />}
      </main>
    </>
  );
}

export default App;
