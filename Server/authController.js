const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = () => {
  console.log('made it here')
  if (!req.userDetails) return res.sendStatus(401);
  console.log(req.userDetails);
  const accessToken = jwt.sign(
    { "user": 'test' },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30s'}
  )
  const refreshToken = jwt.sign(
    { "user": 'test' },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d'}
  )
  res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
  res.json({ userDetails, accessToken })
}

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.user = decoded.username;
      next();
    }
  )
}

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(
    { "user": 'test' },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30s'}
      )
      res.json({ accessToken })
    }
  )
}

const handleLogout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
}

module.exports = { handleLogin, verifyJWT, handleRefreshToken, handleLogout }