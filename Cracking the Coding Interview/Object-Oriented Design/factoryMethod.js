// Provides interface for creating class isntance


function Ship(type) {
    if(type === 'pirate') {
        return new PirateShip();
    } else if(type === 'battle') {
        return new BattleShip();
    }
}