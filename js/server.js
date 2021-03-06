

export const getData = function(onSuccess, onError){
  const promise = fetch('https://22.javascript.pages.academy/code-and-magick/data');
  promise
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(`${res.status} — ${res.statusText}`)
    }
  })
  .then((body) => {
    onSuccess(body);
  })
  .catch(onError)
}

export const loadData = function(data, onSuccess, onError){
 fetch('https://22.javascript.pages.academy/code-and-magick', {
  method: 'POST',
  body: data,
 }).then(onSuccess).catch(onError)


}
