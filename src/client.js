
const token = localStorage.getItem('tokenSpotify');
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}
if (token) headers.Authorization = `Bearer ${token}`

export const fetchSpotify = async (uri) => {
  const accessToken = 'BQDM5dMsjX4l04m0leOV_solQh4CJgZuek50UOuqfl_ha69U1X6ChQy6CiYeI1m_LNS1OM4XJnVv7BaxNL9-dAtdBnVwMhGQ4xnNycOMskzEubpC52SURh7tC_xUs5dAdn0OpVY8wREZiKncNhXR5bKXYZmejoNAcvGsqOJHLv4t5d_Kg4z68u70NIzGsaWOE04syQvMb5f6xeeEvVwgOpO2UdvG-jxzt6SfCEkiuh-SR1rJwKWkN6DKSN8ejxqa7DnGh378rwx5d6CQs2r6PvXWzG462fFsoVs'
  return fetch(
    `https://api.spotify.com/v1/${uri}`, {
    method: 'GET',
    headers
  })
  .then(res => {
    if (res.status === 401) {
      localStorage.setItem("tokenSpotify", "");
      alert("Token invalido o expirado.");
      window.location.reload();
    }
    return res.json();
  })
};


