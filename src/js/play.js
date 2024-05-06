const earth = ["Moon"]
const mars = ["Phobos","Deimos"]
const jupiter = ["Ganymede","Callisto","Io","Europa","Amalthea","Himalia","Thebe","Metis"]
const saturn = ["Titan","Rhea","Iapetus","Dione","Tethys","Enceladus","Mimas","Hyperion","Phoebe","Janus","Epimetheus","Prometheus","Pandora","Helene","Atlas","Pan","Telesto","Calypso","Daphnis","Methone"]
const uranus = ["Titania","Oberon","Umbriel","Ariel","Miranda","Puck"]
const neptune = ["Triton","Proteus","Nereid","Larissa","Galatea","Despina"]
const pluto = ["Charon","Hydra","Nix"]
const planets = [earth, mars, jupiter, saturn, uranus, neptune, pluto];
const box = document.querySelectorAll('.box');
const boxes = document.querySelectorAll('.boxes');
let selectedPlanet;
let selectedMoon;
start();

function start() {
    selectedPlanet = planets[Math.floor(Math.random() * planets.length)];
    selectedMoon = selectedPlanet[Math.floor(Math.random() * selectedPlanet.length)];
    console.log(selectedMoon)

    for (let x = 0; x < selectedMoon.length * 6; x++) {
        box[x].style.display = 'block';
    }

    boxes.forEach((box) => {
        box.style.gridTemplateColumns = `repeat(${selectedMoon.length}, auto)`;
    });

    window.addEventListener('keydown', function(event) {
        for (const b of box) {
            if (b.textContent === '') {
                b.textContent = event.key;
                break;
            }
        }
    });
}
