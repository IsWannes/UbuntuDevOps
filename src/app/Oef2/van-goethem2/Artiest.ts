export class Artiest {

Naam : string;
Geboortedatum : string;
Woonplaats : string;
Liedje : string;

constructor(public naam: string, public geboortedatum: string, public woonplaats: string, public liedje: string) {
    this.Naam = naam;
    this.Geboortedatum = geboortedatum;
    this.Woonplaats = woonplaats;
    this.Liedje = liedje;
}
}