const axios = require('axios');

const client_id = process.env.GITHUB_CLIENT_ID
const client_secret = process.env.GITHUB_CLIENT_SECRET

const githubLogin = (req, res) => {
  const redirect_uri = process.env.GITHUB_REDIRECT_URI
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${
      process.env.GITHUB_CLIENT_ID
    }&redirect_uri=${redirect_uri}`
  )
}

async function getAccessToken({ code, client_id, client_secret }) {
  const token = await axios.post(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`).then(res => {
    const text = res;
    let params = new URLSearchParams(text);
    const data = params.get("data");
    params = new URLSearchParams(data);
    return params.get('access_token')
  }).catch((err) => {
    return err
  })
  
  return token
}

async function fetchGitHubUser(token) {
  return await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  }).then(res => {return res.data}).catch(err => { return err});
  
}

const githubUser = async (req, res) => {
  const code = req.query.code
  const access_token = await getAccessToken({ code, client_id, client_secret })
  const user = await fetchGitHubUser(access_token);

  res.redirect(`/user/${user.login}`)
}

export { githubLogin, githubUser }