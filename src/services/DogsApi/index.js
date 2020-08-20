export default class DogsApi {
  getDogs = (count) => {
    const arr = [...new Array(count)].map(() =>
      fetch("https://random.dog/woof.json?include=mp4,webm")
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Could not fetch random.dog, received ${response.status}`
            );
          }
          return response.json();
        })
        .then((body) => body.url)
    );

    return Promise.all(arr);
  };
}
