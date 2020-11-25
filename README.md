
# Web Scraping - API de Animes
<p  align="center">
<img  src="https://img.shields.io/github/languages/top/HallanCosta/api-animes?style=flat-square%22">
<img  src="https://img.shields.io/github/license/HallanCosta/api-animes">
</p>

  
<p  align="center">
<a  href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
<a  href="#collision-como-executar-a-api">Como executar</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#earth_americas-como-usar-as-rotas">Como usar rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#exclamation-explicação">Explicação das rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#movie_camera-api-em-funcionamento">Como funciona a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a  href="#books-dependências">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a  href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a  href="#computer-desenvolvimento">Author</a>
</p>

## :bookmark: Sobre
>:pushpin:
**Web scraping** ou **Web crawler**, nada mais é do que utilizar técnicas de desenvolvimento para extrair/obter informações de websites.
>
>Utilizando as rotas da api você consegue desfrutas de animes que a pagína **[Animes Online CC](https://animesonline.cc/tv/)** disponibiliza, alguns exemplos são:

- [X] Listar os animes e paginar está lista.

- [X] Pesquisar os animes e paginar está pesquisa.

- [X] Listar todos os episódios do anime desejado.

- [X] Assistir episódio do anime desejado.

**SCRAPPER**: [API Animes](api-animesonline-cc.herokuapp.com/)

## :collision: Como executar a API

1. Crie uma pasta e execute `git clone https://github.com/HallanCosta/api-animes.git .` para fazer um clone da api.

2. Execute os comando a seguir para instalar e iniciar.
```sh
# Instalação.
$ yarn install # ou npm install

# Execução.
$ yarn dev # ou npm run dev
```

## :earth_americas: Como usar as rotas

### Como acessar algumas das páginas do site : [AnimesOnlineCC](https://animesonline.cc/tv/)

### #01.
**Home:**  `https://api-animesonline-cc.herokuapp.com/`

---
### #02.
**Lista de animes:**  `https://api-animesonline-cc.herokuapp.com/animes`

**Lista de animes com paginação:**  `https://api-animesonline-cc.herokuapp.com/animes/page/:NUMERO_DA_PAGINA`

---
### #03.
**Lista de episódios:**  `https://api-animesonline-cc.herokuapp.com/episodes`

**Lista de episódios com paginação:**  `https://api-animesonline-cc.herokuapp.com/episodes/page/:NUMERO_DA_PAGINA`

---
### #04.
**Lista de gêneros:**  `https://api-animesonline-cc.herokuapp.com/genres`

**Listar animes por gênero:**  `https://api-animesonline-cc.herokuapp.com/genres/:ID_GENRE`

**Listar animes por gênero com paginação:**  `https://api-animesonline-cc.herokuapp.com/genres/:ID_GENRE/page/:NUMERO_DA_PAGINA`

---
### #05.
**Encontrar animes:**  `https://api-animesonline-cc.herokuapp.com/search/:NOME_DO_ANIME_PARA_PESQUISAR`

**Encontrar animes com paginação:**  `https://api-animesonline-cc.herokuapp.com/search/:NOME_DO_ANIME_PARA_PESQUISAR/page/:NUMERO_DA_PAGINA`

---
### #06.
**Episódios do anime:**  `https://api-animesonline-cc.herokuapp.com/anime/:ID_ANIME`

---
### #07.
**Episódio do anime para assistir:**  `https://api-animesonline-cc.herokuapp.com/episode/:ID_EPISODE`


## :exclamation: Explicação

#01.
A rota **Home** será retornado um JSON com os animes populares, últimos lançamentos de episódios e alguns animes recentes.

#02.
A rota **Lista de animes** será retornado um JSON com todos os animes e você pode fazer uma paginação utilizando a rota **Lista de animes com paginação**, em `:NUMERO_DA_PAGINA` você colocar o número da pagina.

#03.
A rota **Lista de episódios** será retornado um JSON com todos os animes e você pode fazer uma paginação utilizando a rota **Lista de episódios com paginação**, em `:NUMERO_DA_PAGINA` você deve colocar o número da pagina.

#04.
A rota **Lista de gêneros** será retornado um JSON com todos os animes e na rota **Listar animes  por gênero** retornará um JSON com todos os animes com o gênero escolhido, em `:ID_GENRE` você deve colocar um gênero... exemplo: "Sobrenatural", você pode fazer uma paginação utilizando a rota **Listar animes por gênero com paginação** e em `:NUMERO_DA_PAGINA` você deve colocar o número da pagina.

#05.
A rota **Encontrar animes** em `:NOME_DO_ANIME_PARA_PESQUISAR` como o nome diz, você deve colocar o  nome do anime que deseja buscar. Na rota ** Encontrar animes com paginação** você pode fazer uma paginação colocando em `:NUMERO_DA_PAGINA` o numero para paginar.

#06.
A rota **Episódios do anime** em `:ID_ANIME` você deve colocar o id do anime que as rotas anteriores fornecem, nela será retornado um JSON com todos os episódios desse anime e algumas outras informações como sinopse entre outras.

#07.
A rota **Episódio do anime para assistir** será retornado um JSON com as URLs dos animes dublado,  senão tiver retornará somente legendado. Em `:ID_EPISODE` você deve colocar o id que é retornado das rotas anteriores como **Episódios do anime** ou **Home**.

## :movie_camera: API em funcionamento
### Pesquisando um anime e assistindo:

**[API-ANIMESONLINE-CC](https://api-animesonline-cc.herokuapp.com)**
<img src="https://user-images.githubusercontent.com/60573155/100174439-36497080-2eab-11eb-9f16-59ccd2d55a59.gif" />

### vs

**[SITE ANIMESONLINE-CC](https://animesonline.cc/tv/)**

<img src="https://user-images.githubusercontent.com/60573155/100174444-377a9d80-2eab-11eb-8034-76fb063425ce.gif" />


## :books: Dependências

### 1. Dependências
- [x] Puppeteer
- [x] Express
- [x] Cors

### 2. Dependências de desenvolvimento
- [x] Babel
- [x] Typescript

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/HigorSnt/proffy/blob/master/LICENSE.md) para mais detalhes.

## :computer: Desenvolvimento
| Author |
|--|
| [<img src="https://avatars2.githubusercontent.com/u/60573155?s=115&v=3"><br><sub>@HallanCosta</sub>](https://github.com/HallanCosta) |