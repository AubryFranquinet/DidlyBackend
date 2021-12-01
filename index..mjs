// Import the SQLite module
import SQLite from "sqlite-async";

async function getAllUsers() {
    // Create a connection to the db
    const db = await SQLite.open("./db/database");

    // Create an SQL query
    const allUsers = await db.all(
        "SELECT * FROM Users ORDER BY first_name ASC"
    );
    console.log(allUsers);

    // When the transaction is over, we close the connection to the DB
    db.close();

    return allEmployees;
}