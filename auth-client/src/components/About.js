import React from 'react'


export default function Home() {
    return (
        <div className="project-description">
            <h2>Esittely</h2>
            <p>
            Tämä on Oulun ammattikorkeakoulun 2. vuoden ohjelmistokehityksen opiskelijoiden toteuttama web-ohjelmoinnin sovellusprojekti.
            Tavoitteena projektissa oli suunnitella ja ohjelmoida ilmastonmuutoksen datavisualisointityökalu. 
            </p>
            <p>
            Projekti tehtiin ryhmätyönä jaotellen jokaiselle ryhmän jäsenelle omat osa-alueet. 
            Projektin kaikki jäsenet toimivat Full Stack -kehittäjinä työstäen sekä frontend- että backend-puolta.
            </p>
            <p>
            Projektissa käytettiin Java-ohjelmointikieltä tietokantapalvelimen toteutukseen ja JavaScriptiä ja sen React-kirjastoa datan visualisointiin selaimessa.
            Ohjelmointiympäristönä projektissa käytettiin Visual Studio Codea. Tietokantaohjelmistona käytettiin MySQL-ohjelmistoa. 
            Java koodissa toteutettiin tietokantahaut, joita voidaan käyttää HTTP-kutsuilla JavaScript-koodissa
            </p>
        </div>
    );
}