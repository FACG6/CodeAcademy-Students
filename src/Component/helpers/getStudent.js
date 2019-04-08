function getStudents(url) {
 return fetch(`${url}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Error, request failed, reload the page..`)
      } else {
        return res;
      }
    })
}

export default getStudents;
