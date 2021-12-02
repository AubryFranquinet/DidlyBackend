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

    return allUsers;
}

async function getUserByName(name) {
    const db = await SQLite.open("./db/database");
    const Users= await db.get("SELECT * FROM Users WHERE first_name=?", [
        name,
    ]);
    console.log(Users);

    db.close();
    return Users;
}

async function insertEvent(name) {
    const db = await SQLite.open("./db/database");
    const inputEvent = await db.get("INSERT INTO dates_by_event VALUES(id, event_id, event_date);");
    console.log(inputEvent);

    db.close();
    return Users;
}





