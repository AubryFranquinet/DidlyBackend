CREATE TABLE events(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_author VARCHAR(255) NOT NULL,
    event_description VARCHAR(255) NOT NULL
    -- creation_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- last_modification DATE,
    -- num_modification INTEGER NOT NULL DEFAULT (0)
);

CREATE TABLE dates_by_event(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    event_id INT NOT NULL,
    event_date DATE NOT NULL
);

CREATE TABLE attendees_by_date(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    date_id INT NOT NULL,
    attendee VARCHAR(255) NOT NULL,
    available TINYINT(1) NOT NULL
);