import React from 'react';
import Post from './components/post';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const RICK_IMAGE = 'https://i.axs.com/2019/11/rick-astley_11-12-19_7_5dcac7b590083.jpg';
const RISK_POST_IMAGE = 'https://miro.medium.com/max/3404/1*zV1SLF4waxut9ojmf2VvoA.png';
const RICARDO_IMAGE = 'https://vignette.wikia.nocookie.net/meme/images/d/de/Ricardo_Milos_dances_to_DotA_by_Basshunter/revision/latest/top-crop/width/220/height/220?cb=20190616154801';
const RICARDO_VS_JOHNY_IMAGE = 'https://i.ytimg.com/vi/gMYg-bgQWFk/maxresdefault.jpg';

const postList = [
  {
    name: "Anakin Skywalker",
    avatar: ANAKIN_IMAGE,
    nickname: "@who's_your_daddy",
    content:
      "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
    comments: 482,
    retweets: 146,
    likes: 768,
  },
  {
    name: "Rick Astley",
    avatar: RICK_IMAGE,
    nickname: "@disco_boy",
    content:
      "Make America disco again!",
    image: RISK_POST_IMAGE,
    date: "26 февр.",
    comments: 1498,
    retweets: 666,
    likes: 5767,
  },
  {
    name: "Ricardo Milos",
    avatar: RICARDO_IMAGE,
    nickname: "@ricardo_official",
    content:
      "So... Who will win, ladies?))",
    image: RICARDO_VS_JOHNY_IMAGE,
    date: "26 февр.",
    comments: 324,
    retweets: 55,
    likes: 987,
  }
]

function App() {
  return (
    <div>
      {postList.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}

export default App;
