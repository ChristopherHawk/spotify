
const token = localStorage.getItem('tokenSpotify');
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}
if (token) headers.Authorization = `Bearer ${token}`

export const fetchSpotify = async (uri) => {
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


