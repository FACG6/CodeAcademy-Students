function getStudents(url) {
  return fetch(`${url}`)
    .then(res => {
      if (res.status !== 200) {
     return 'Error'
      } else {
        return res;
      }
    })
}

export default getStudents;
