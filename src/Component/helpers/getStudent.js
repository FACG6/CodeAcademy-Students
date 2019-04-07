import token from '../../token';

function getStudents(url) {
 return fetch(`${url}?access_token=${token}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Error, request failed, reload the page..`)
      } else {
        return res;
      }
    })
}


export default getStudents;