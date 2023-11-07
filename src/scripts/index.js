import '../css/style.css';
import {startGame} from "./GameCycle";
import PictureGitHub from "../img/github.png";
import PictureAnchor from "../img/anchor.png";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.start').style.display = 'block';
    document.querySelector('.btn-primary').addEventListener('click', () => {
        const name = document.querySelector('.inputName').value;

        document.querySelector('.nameUser').textContent = name || 'User';
        document.querySelector('.nameBot').textContent = 'Bot';

        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal_block_start').style.display = 'none';

        let imgAnchor = new Image();
        imgAnchor.src = PictureAnchor;
        imgAnchor.classList.add('anchor');
        document.querySelector('.anchorBlock').appendChild(imgAnchor);

        startGame(name);
    })
});

let img = new Image();
img.src = PictureGitHub;
img.classList.add('img_footer');
document.querySelector('.link_footer').appendChild(img);
