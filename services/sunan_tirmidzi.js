const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function get(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM sunan_tirmidzi LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(sunan_tirmidzi) {
  const result = await db.query(
    `INSERT INTO sunan_tirmidzi 
    (kitab, arab, terjemah) 
    VALUES 
    (${sunan_tirmidzi.kitab}, ${sunan_tirmidzi.arab}, ${sunan_tirmidzi.terjemah}`
  );

  let message = "Error in creating Sunan Tirmidzi ";

  if (result.affectedRows) {
    message = "Sunan Tirmidzi  created successfully";
  }

  return { message };
}

async function update(id, sunan_tirmidzi) {
  const result = await db.query(
    `UPDATE sunan_tirmidzi 
    SET kitab="${sunan_tirmidzi.kitab}", arab=${sunan_tirmidzi.arab}, terjemah=${sunan_tirmidzi.terjemah}
    WHERE id=${id}`
  );

  let message = "Error in updating Sunan Tirmidzi";

  if (result.affectedRows) {
    message = "Sunan Tirmidzi updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM sunan_tirmidzi WHERE id=${id}`);

  let message = "Error in deleting Sunan Tirmidzi";

  if (result.affectedRows) {
    message = "Sunan Tirmidzi deleted successfully";
  }

  return { message };
}

module.exports = {
  get,
  create,
  update,
  remove,
};
