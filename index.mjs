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
    const inputEvent = await db.exec("INSERT INTO dates_by_event VALUES(id, event_id, event_date);");
    console.log(inputEvent);

    db.close();
    return Users;
}

async function insertUser(name) {
    const db = await SQLite.open("./db/database");
    const inputUser = await db.exec("INSERT INTO Users VALUES(id, first_name, last_name, email, password);");
    console.log(inputUser);

    db.close();
    return Users;
}

async function getAllEvents() {
    const db = await SQLite.open("./db/database");
    const allEvents = await db.all(
        "SELECT * FROM dates_by_event ORDER BY event_date ASC"
    );
    console.log(allEvents);

    db.close();
    return allEvents;
}

async function getAllEvents2() {
    const db = await SQLite.open('./db/michasbackend')

    const allEvents = await db.all(`SELECT * FROM events`)

    for (const event of allEvents) {
        const dates = await db.all(`SELECT event_date AS date, id FROM dates_by_event WHERE event_id=?`, [event.id])
        event.dates = dates

        for (const date of dates) {
            const attendees = await db.all(`SELECT attendee, available FROM attendees_by_date WHERE date_id=?`, [date.id])
            date.attendees = attendees
        }
    }

    console.log(JSON.stringify(allEvents, null, 2))
    db.close()

    return allEvents
}

