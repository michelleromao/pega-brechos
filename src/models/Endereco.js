const pool = require('../config/database');

class Endereco {
  static async create(data) {
    const client = await pool.connect();
    const {
      cep, rua, bairro, cidade, uf, numero, complemento,
    } = data;
    const { rows: endereco } = await client.query(
      'INSERT INTO endereco (cep, rua, bairro, cidade, uf, numero, complemento) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [cep, rua, bairro, cidade, uf, numero, complemento],
    );
    await client.release();
    return endereco;
  }

  static async findAll() {
    const client = await pool.connect();
    const { rows: enderecos } = await client.query('SELECT * FROM endereco');
    await client.release();
    return enderecos;
  }

  static async findById(cep) {
    const client = await pool.connect();
    const { rows: endereco } = await client.query('SELECT * FROM endereco WHERE cep = $1', [cep]);
    await client.release();
    return endereco;
  }

  static async findByIdAndUpdate(cep, data) {
    const client = await pool.client();
    const { rows: endereco } = await client.query('SELECT * FROM endereco WHERE cep = $1', [cep]);
    if (endereco) {
      const {
        rua, bairro, cidade, uf, numero, complemento,
      } = data;
      const { rows: novoEndereco } = await client.query(
        'UPDATE endereco set rua = $1, bairro = $2, cidade = $3, uf = $4, numero = $5, complemento = $6 RETURNING *',
        [rua, bairro, cidade, uf, numero, complemento],
      );
      await client.release();
      return novoEndereco;
    }
    return endereco;
  }

  static async findByIdAndDelete(cep) {
    const client = await pool.connect();
    const { rows: endereco } = await client.query('SELECT * FROM endereco WHERE cep = $1', [cep]);
    if (endereco) {
      await client.query('DELETE FROM endereco WHERE cep = $1', [cep]);
      await client.release();
      return endereco;
    }
    return endereco;
  }
}

module.exports = Endereco;
