const userLogin = "valmir1227";

function getUserInfo() {
  const url = `https://api.github.com/users/${userLogin}`;
  axios.get(url).then((response) => {
    userName.textContent = response.data.name;
    userAvatar.src = response.data.avatar_url;
  });
}

getUserInfo();

function getUserRepositories() {
  const repositoriesUrl = `https://api.github.com/users/${userLogin}/repos`;

  axios.get(repositoriesUrl).then((response) => {
    let repositoryData = response.data;

    for (var i = 0; i < repositoryData.length; i++) {
      let repositoryNumber = repositoryData[i];
      repositoryTitle.textContent = repositoryNumber.name;
      repositoryLink.href = `https://github.com/valmir1227/${repositoryNumber.name}`;

      repoLanguage.textContent = repositoryNumber.language;
      numberForks.textContent = repositoryNumber.forks;
      stars.textContent = repositoryNumber.stargazers_count;
      repoDescription.textContent = repositoryNumber.description;
      console.log(repositoryNumber.description);

      if (repositoryNumber.description == null)
        repoDescription.textContent = "Sem descrição";
    }
  });
}

getUserRepositories();
