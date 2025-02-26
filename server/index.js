require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const app = express();

app.get("/books/:id", (req, res) => {
  //get all books
  // const getAllBooks = async () => {
  //   try {
  //     const [result, fields] = await db.query("SELECT * FROM books");
  //     console.log(result); // Log the books
  //     res.json(result); // Send the books as a response
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send("Server Error");
  //   }
  // };
  // getAllBooks();
  //Select all books published after the year 1950.
  // const { published_year } = req.params;
  // const filterBooks = async () => {
  //   try {
  //     const [result, fields] = await db.query(
  //       "SELECT * FROM books WHERE published_year > ?",
  //       [published_year]
  //     );
  //     res.send(result);
  //   } catch (error) {
  //     res.status(500).send("server error");
  //   }
  // };
  // filterBooks();
  // Update the genre of the book 1984 to Science Fiction.
  const { id } = req.params;

  const updateGenre = async () => {
    const { id } = req.params;
    try {
      const [result, field] = await db.query(
        "UPDATE books SET genre = 'Science Fiction' WHERE id = ?",
        [id]
      );
      res.json(result);
    } catch (error) {
      res.status(500).send("server error");
    }
  };

  updateGenre;
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
