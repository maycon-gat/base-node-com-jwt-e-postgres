const jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res) {
    try {
      const usuario = { id: 1, email: "teste@teste.com", senha: "123456" };
      jwt.sign(
        { id: usuario.id, adicionais: `Incluir info adicionais neste payload` },
        process.env.JWT_SECRET,
        { expiresIn: "12h" },
        (err, token) => {
          if (err) {
            res.status(500).json({
              message: "Falha ao gerar token",
            });
          } else {
            res.status(200).json({
              token: token,
              usuario: {
                id: usuario.id,
                email: usuario.email,
              },
            });
          }
        }
      );
    } catch (error) {
      res.status(401).json({
        message: "Campos 'email' ou 'senha' inválidos",
      });
    }
  },
};
