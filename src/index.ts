function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: [] // tripulação
    }
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada a missão`)
    return spaceship
}
function accelerate(targetSpeed: number, spaceship:{name: string, speed: number}) {
    if (spaceship.speed > targetSpeed ) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}
const spaceshipName = prompt('Insira o nome da nave a ser enviada.')
const spaceshiCaptain = prompt('Insira o nome do capitão da nave.')

 const currentShip = sendSpaceship(spaceshipName ,  spaceshiCaptain)

 const speed = Number(prompt('Insira a velocidade da qual deseja acelerar'))
 accelerate(speed, currentShip)