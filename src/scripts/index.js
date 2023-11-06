import '../css/style.css';
import {startGame} from "./GameCycle";
import PictureGitHub from "../img/github.png";
import PictureAnchor from "../img/anchor.png";

// document.querySelector('.modal').style.display = 'block';
//
// document.querySelector('.btn-primary').addEventListener('click', () => {
//     const name = document.querySelector('.inputName').value;
//
//     document.querySelector('.nameUser').textContent = name || 'User';
//     document.querySelector('.nameBot').textContent = 'Bot';
//
//     document.querySelector('.modal').style.display = 'none';
// });

let img = new Image();
img.src = PictureGitHub;
img.classList.add('img_footer');
document.querySelector('.link_footer').appendChild(img);

let imgAnchor = new Image();
imgAnchor.src = PictureAnchor;
imgAnchor.classList.add('anchor');
document.querySelector('.anchorBlock').appendChild(imgAnchor);

startGame(name);