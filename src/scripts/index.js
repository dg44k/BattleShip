import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import {startGame} from "./GameCycle";
import PictureGitHub from "../img/github.png";
import PictureAnchor from "../img/anchor.png";

let img = new Image();
img.src = PictureGitHub;
img.classList.add('img_footer');
document.querySelector('.link_footer').appendChild(img);

let imgAnchor = new Image();
imgAnchor.src = PictureAnchor;
imgAnchor.classList.add('anchor');
document.querySelector('.anchorBlock').appendChild(imgAnchor);

startGame();