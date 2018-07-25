export const patchFetch = (url, id, data) => {

  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify( data )
    }
  return fetch(url + id, options)
    .then(resp => resp.json())
}
