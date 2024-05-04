const earth = ["Moon"]
const mars = ["Phobos","Deimos"]
const jupiter = ["Ganymede","Callisto","Io","Europa","Amalthea","Himalia","Thebe","Metis"]
const saturn = ["Titan","Rhea","Iapetus","Dione","Tethys","Enceladus","Mimas","Hyperion","Phoebe","Janus","Epimetheus","Prometheus","Pandora","Helene","Atlas","Pan","Telesto","Calypso","Daphnis","Methone"]
const uranus = ["Titania","Oberon","Umbriel","Ariel","Miranda","Puck"]
const neptune = ["Triton","Proteus","Nereid","Larissa","Galatea","Despina"]
const pluto = ["Charon","Hydra","Nix"]
const planets = [earth, mars, jupiter, saturn, uranus, neptune, pluto];

start();

function start() {
    const selectedPlanet = planets[(Math.ceil(Math.random() * planets.length)) - 1];
    const selectedMoon = selectedPlanet[(Math.ceil(Math.random() * selectedPlanet.length)) - 1]
}

function darkMode() {

}
