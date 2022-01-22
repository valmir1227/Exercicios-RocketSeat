const userLogin = "valmir1227";

function getUserInfo() {
  const url = `https://api.github.com/users/${userLogin}`;
  const userName = document.getElementById("userName");
  const userAvatar = document.getElementById("userAvatar");
  const userAvatarPost = document.getElementById("userAvatarPost");
  axios
    .get(url)
    .then((response) => {
      userName.textContent = response.data.name;
      userAvatar.src = response.data.avatar_url;
      userAvatarPost.src = response.data.avatar_url;
    })
    .catch((error) => console.log(error));
}

getUserInfo();

function getUserRepositories() {
  const repositoriesUrl = `https://api.github.com/users/${userLogin}/repos`;

  const repositoryTitle = document.getElementById("repositoryTitle");
  const repositoryLink = document.getElementById("repositoryLink");
  const repoLanguage = document.getElementById("repoLanguage");
  const numberForks = document.getElementById("numberForks");
  const stars = document.getElementById("stars");
  const repoDescription = document.getElementById("repoDescription");

  const repositoryTitle2 = document.getElementById("repositoryTitle2");
  const repositoryLink2 = document.getElementById("repositoryLink2");
  const repoLanguage2 = document.getElementById("repoLanguage2");
  const numberForks2 = document.getElementById("numberForks2");
  const stars2 = document.getElementById("stars2");
  const repoDescription2 = document.getElementById("repoDescription2");
  axios
    .get(repositoriesUrl)
    .then((response) => {
      let repositoryData = response.data;

      repositoryTitle.textContent = repositoryData[0].name;
      repositoryLink.href = `https://github.com/valmir1227/${repositoryData[0].name}`;

      repoLanguage.textContent = repositoryData[0].language;
      numberForks.textContent = repositoryData[0].forks;
      stars.textContent = repositoryData[0].stargazers_count;
      repoDescription.textContent = repositoryData[0].description;

      repositoryTitle2.textContent = repositoryData[0].name;
      repositoryLink2.href = `https://github.com/valmir1227/${repositoryData[0].name}`;

      repoLanguage2.textContent = repositoryData[-1].language;
      numberForks2.textContent = repositoryData[-1].forks;
      stars2.textContent = repositoryData[-1].stargazers_count;
      repoDescription2.textContent = repositoryData[-1].description;
    })
    .catch((error) => console.log(error));
}

getUserRepositories();
