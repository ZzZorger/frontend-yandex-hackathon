fetch('api/login/')
  .then((response) => response.json())
  .then((commits) => console.log(commits));
