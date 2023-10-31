import '../css/style.css';
import {startGame} from "./GameCycle";
import PictureGitHub from "../img/github.png";

let img = new Image();
img.src = PictureGitHub;
img.classList.add('img_footer');
img.style.marginLeft = '10px';
document.querySelector('.link_footer>span').appendChild(img);

startGame();