const img = document.querySelector("[data-perfil] img");
const nome = document.querySelector("[data-perfil] h3");
const spans = Array.from(document.querySelectorAll(".icon-info"));

const url = "https://api.github.com/users/dynylson";

const fetchPerfil = async () => {
  try {
    const perfilResponse = await fetch(url);
    const perfilJson = await perfilResponse.json();
    const perfilArray = [
      perfilJson.location,
      perfilJson.company,
      perfilJson.login,
      perfilJson.twitter_username,
      perfilJson.html_url,
      perfilJson.email,
    ];
    img.src = perfilJson.avatar_url;
    nome.innerText = perfilJson.name;
    spans.reduce((acumulador, span) => {
      perfilArray[acumulador]
        ? (span.innerText = perfilArray[acumulador])
        : (span.innerText = "Não tem");
      return acumulador + 1;
    }, 0);
  } catch (erro) {
    console.log(erro);
  }
};

fetchPerfil();
