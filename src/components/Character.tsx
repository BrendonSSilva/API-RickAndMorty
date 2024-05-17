import React from "react";
import { CardCharacter } from "../assets/styles";
interface Props {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    image: string;
}

const nameIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>

const genderIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-affiliate" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
    <path d="M11.683 12.317l5.759 -5.759" />
    <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
    <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
    <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
    <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
</svg>

const originIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-planet" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" />
    <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
</svg>

const statusIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12h4l3 8l4 -16l3 8h4" />
</svg>

const specieIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-a-b-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z" />
    <path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z" />
    <path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
    <path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
    <path d="M8 7h-4" />
</svg>

const typeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-variable" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
    <path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
</svg>

class Character extends React.Component<Props> {


    render() {
        const { image, name, status, species, type, gender, origin } = this.props;

        return (
            <CardCharacter>
                <img src={image} alt={name} />
                <p><span aria-label='Name'>{nameIcon}</span> {name}</p>
                <p><span aria-label='Status'>{statusIcon}</span> {status}</p>
                <p><span aria-label='Specie'>{specieIcon}</span> {species}</p>
                <p><span aria-label='Gender'>{genderIcon}</span> {gender}</p>
                <details>
                    <summary>Details</summary>
                    {type && <p><span aria-label='Type'>{typeIcon}</span>{type}</p>}
                    <p><span aria-label='Origin'>{originIcon}</span> {origin}</p>
                </details>
            </CardCharacter>
        );
    }
}

export default Character;