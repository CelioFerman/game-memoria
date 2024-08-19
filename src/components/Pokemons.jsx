import Abra from '../assets/Abra.png';
import Alakazam from '../assets/Alakazam.png';
import Arbok from '../assets/Arbok.png';
import Arcanine from '../assets/Arcanine.png';
import Beedrill from '../assets/Beedrill.png';
import Bellsprout from '../assets/Bellsprout.png';
import Blastoise from '../assets/Blastoise.png';
import Bulbasaur from '../assets/Bulbasaur.png';
import Butterfree from '../assets/Butterfree.png';
import Caterpie from '../assets/Caterpie.png';
import Charizard from '../assets/Charizard.png';
import Charmander from '../assets/Charmander.png';
import Charmeleon from '../assets/Charmeleon.png';
import Clefable from '../assets/Clefable.png';
import Clefairy from '../assets/Clefairy.png';
import Cloyster from '../assets/Cloyster.png';
import Dewgong from '../assets/Dewgong.png';
import Diglett from '../assets/Diglett.png';
import Farfetchd from '../assets/Farfetchd.png';
import Fearow from '../assets/Fearow.png';
import Gastly from '../assets/Gastly.png';
import Gengar from '../assets/Gengar.png';
import Gloom from '../assets/Gloom.png';
import Golduck from '../assets/Golduck.png';
import Growlithe from '../assets/Growlithe.png';
import Haunter from '../assets/Haunter.png';
import Ivysaur from '../assets/Ivysaur.png';
import Jigglypuff from '../assets/Jigglypuff.png';
import Kadabra from '../assets/Kadabra.png';
import Machamp from '../assets/Machamp.png';
import Machop from '../assets/Machop.png';
import Mankey from '../assets/Mankey.png';
import Meowth from '../assets/Meowth.png';
import Nidoran from '../assets/Nidoran.png';
import NidoranFemea from '../assets/NidoranFemea.png';
import Nidorina from '../assets/Nidorina.png';
import Ninetales from '../assets/Ninetales.png';
import Persian from '../assets/Persian.png';
import Pidgey from '../assets/Pidgey.png';
import Pikachu from '../assets/Pikachu.png';
import Ponyta from '../assets/Ponyta.png';
import Psyduck from '../assets/Psyduck.png';
import Raichu from '../assets/Raichu.png';
import Rapidash from '../assets/Rapidash.png';
import Rattata from '../assets/Rattata.png';
import Sandshrew from '../assets/Sandshrew.png';
import Seel from '../assets/Seel.png';
import Shellder from '../assets/Shellder.png';
import Slowbro from '../assets/Slowbro.png';
import Spearow from '../assets/Spearow.png';
import Squirtle from '../assets/Squirtle.png';
import Venusaur from '../assets/Venusaur.png';
import Vileplume from '../assets/Vileplume.png';
import Vulpix from '../assets/Vulpix.png';
import Wartortle from '../assets/Wartortle.png';
import Wigglytuff from '../assets/Wigglytuff.png';

const pngPokemons = [
    Abra,
    Alakazam,
    Arbok,
    Arcanine,
    Beedrill,
    Bellsprout,
    Blastoise,
    Bulbasaur,
    Butterfree,
    Caterpie,
    Charizard,
    Charmander,
    Charmeleon,
    Clefable,
    Clefairy,
    Cloyster,
    Dewgong,
    Diglett,
    Farfetchd,
    Fearow,
    Gastly,
    Gengar,
    Gloom,
    Golduck,
    Growlithe,
    Haunter,
    Ivysaur,
    Jigglypuff,
    Kadabra,
    Machamp,
    Machop,
    Mankey,
    Meowth,
    Nidoran,
    NidoranFemea,
    Nidorina,
    Ninetales,
    Persian,
    Pidgey,
    Pikachu,
    Ponyta,
    Psyduck,
    Raichu,
    Rapidash,
    Rattata,
    Sandshrew,
    Seel,
    Shellder,
    Slowbro,
    Spearow,
    Squirtle,
    Venusaur,
    Vileplume,
    Vulpix,
    Wartortle,
    Wigglytuff,
];

export const uniqueCards = pngPokemons.map((
    png,
    idPair
) => ({
    png,
    idPair,
}));

export const pairOfCards = [
    ...uniqueCards,
    ...uniqueCards
].map((card, id) => ({
    ...card,
    id
})

);