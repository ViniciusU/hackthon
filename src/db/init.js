const Database = require('./config')

const initDb = {
   async init(){         

const db = await Database()

await db.exec(`CREATE TABLE squats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    squatId TEXT,
    avatar TEXT
)`);

await db.exec(`CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT, 
    answer INT
   
)`)

await db.run(`INSERT INTO squats (
    name, 
    squatId,
    avatar 
 ) VALUES (
     "Bonde do maluco",
     "2309",
     "https://avatars.githubusercontent.com/u/17316392"
 
);`);

await db.run(`INSERT INTO questions (
    question, 
    answer 
 ) VALUES (
     "Qual o valor de PI?",
     3.1415
 
);`)



await db.close()
    }


}


initDb.init()