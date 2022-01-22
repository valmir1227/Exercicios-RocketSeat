const url = "https://api.github.com/users/valmir1227";

function getUserInfo() {
  axios
    .get(url)
    .then((response) => {
      let data = response.data;

      userName.textContent = response.data.name;
      userImage.src = response.data.avatar_url;
      followers.textContent = response.data.followers + " Seguidores";
      following.textContent = response.data.following + " Seguindo";
      repositorys.textContent = response.data.public_repos + " Repositórios";
    })
    .cath((error) => console.log(error));
}

window.onload = getUserInfo;

function generateRandomColor() {
  const cardBackground = document.querySelector(".card");
  var result =
    "#" +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  cardBackground.style.backgroundColor = result;
  console.log(result);
}

btn.addEventListener("click", generateRandomColor);
