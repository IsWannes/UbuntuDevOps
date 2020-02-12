export class FootballPlayers {
    Players: string;
    Teams: string;
    Numbers: number;
    Price: number;

    constructor(public name: string, public team: string, number: number, price: number) {
        this.Players = name;
        this.Teams = team;
        this.Numbers = number;
        this.Price = price;
    }
}