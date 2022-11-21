import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";

// Open a database
const db = new DB("test.db");
db.execute(`
  DROP TABLE IF EXISTS people;
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

// Run a simple query
for (const name of ["Peter Parker", "Clark Kent", "Bruce Wayne"]) {
    db.query("INSERT INTO people (name) VALUES (?)", [name]);
}

// Print out data in table
for (const [name] of db.query("SELECT name FROM people")) {
    console.log(name);
}

// Close connection
db.close();