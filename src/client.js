const FetchSpotify = async (uri) => {
  const accessToken = 'BQAEyyworCcF1vaWYzFaIE-MLiZPbY_V2otcixHSUjUBBciZ2q4C38l8aLWYqP9xucWxF9vXs1RamV3xURIWa75roeyy7rI5VVkoZsE5wAI26w2QXtAzlN8xxI2-WXmP2rg8KZr-TiBkDaSVgbRTfCEW6nwI1tAUkyWffsP-QNm_Yq1Ga6Vk7DUnAom1RpOfHnCaGjwg29OVC4gUVLiPssXnaTUq8Yq92olqOH1YMcgru3Ljl-xT0udtfUoxkWsCWAxjTLHa1FPrv9R-PWTS1-i-VAZwi-rz62U'
   return fetch(
    `https://api.spotify.com/v1/${uri}`,{
      method: 'GET', 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${accessToken}`
  }
})
};

export default FetchSpotify

