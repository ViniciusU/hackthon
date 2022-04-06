const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const squats = await db.all(`SELECT * FROM questions`);

    await db.close();

    return squats;
  },

  async delete(id) {
    const db = await Database()

    await db.run(`DELETE FROM questions WHERE id = ${id}`)

    await db.close()
  },

  async create(newQuestion) {
    const db = await Database()

    await db.run(`INSERT INTO questions(
      question,
      answer
    ) VALUES (
      "${newQuestion.question}",
      ${newQuestion.answer}
     
    )`)

    await db.close()
  },
};
