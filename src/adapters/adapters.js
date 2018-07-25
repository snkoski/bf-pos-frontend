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

export const createFetch = (url, data) => {

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  return fetch(url, options)
    // dispatch(reservationsIsLoading(true));



    // .then((response) => {
    //   if(!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   dispatch(reservationsIsLoading(false));
    //
    //   return response;
    // })

      .then(response => response.json())
      //  .then(result => {
      //    console.log(result)
      //   dispatch(createReservation(result))
      // })
  };
