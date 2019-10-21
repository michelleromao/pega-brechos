const pool = require('../config/database');

class Users {
  // constructor(id, nome, email, endereco, nota, telefone) {
  //   this.id = id,
  //   this.nome = nome,
  //   this.email = email,
  //   this.endereco = endereco,
  //   this.nota = nota,
  //   this.telefone = telefone,
  // }

  static async create(data) {
    const { nome, email, senha } = data;
    const client = await pool.connect();
    const { rows: user } = await client.query(
      'INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha],
    );
    await client.release();
    return user;
  }
}

module.exports = Users;
