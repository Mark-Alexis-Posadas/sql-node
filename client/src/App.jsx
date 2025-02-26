import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const id = 3;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);

  return <div>App</div>;
};

export default App;
