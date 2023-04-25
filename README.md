# Ilmastonmuutokseen liittyvän tiedon visualisointityökalu

Tekijät:
Tomi Kääriäinen - T0mppa,
Matti Nurmela - mattinurmela,
Emilia Virta - Empppu,
Lassi Väisänen - LassiVaisanen

Visualisaatio 1:n toteuttamiseen osallistuivat kaikki, viimeistelystä vastasi Lassi Väisänen. Visualisaation 2:n on toteuttanut Matti Nurmela. Visualisaation 3:n on toteuttanut Tomi Kääriäinen. Visualisaation 4:n on toteuttanut Lassi Väisänen. Visualisaation 5:n on toteuttanut Emilia Virta. Web-sovelluksen kotisivun ja sen toiminnallisuudet kuten käyttäjän luomisen sekä sisäänkirjautumisen on toteuttanut Emilia Virta. Web-sovelluksen käyttöliittymän ulkonäön sekä muotoilun on toteuttanut Tomi Kääriäinen.


## ESITTELY

Tämä on Oulun ammattikorkeakoulun 2. vuoden ohjelmistokehityksen opiskelijoiden toteuttama web-ohjelmoinnin sovellusprojekti. Tavoitteena projektissa oli suunnitella ja ohjelmoida ilmastonmuutoksen datavisualisointityökalu. Projekti tehtiin ryhmätyönä jaotellen jokaiselle ryhmän jäsenelle omat osa-alueet. Projektin kaikki jäsenet toimivat Full Stack -kehittäjinä työstäen sekä frontend- että backend-puolta.
Projektissa käytettiin Java-ohjelmointikieltä tietokantapalvelimen toteutukseen ja JavaScriptiä ja sen React-kirjastoa datan visualisointiin selaimessa. Ohjelmointiympäristönä projektissa käytettiin Visual Studio Codea. Tietokantaohjelmistona käytettiin MySQL-ohjelmistoa. Java koodissa toteutettiin tietokantahaut, joita voidaan käyttää HTTP-kutsuilla JavaScript-koodissa.
Projektin tehtävänannon vaatimuksiin kuului käyttäjänhallinta, joka mahdollistaa sovelluksen käyttäjien luomisen, poistamisen ja sisäänkirjautumisen. Lisäksi vaatimuksiin sisältyi responsiivisen käyttöliittymän toteuttaminen, visualisointitietojen tallentaminen ja lataaminen, sekä käyttäjäkohtaisen visualisointinäkymän luominen ja poistaminen. Viimeisenä vaatimuksena sovelluksen julkaisu julkisessa internetissä pilvipalvelualustalla.

## SOVELLUKSEN ARKKITEHTUURI

Tietokanta rakentuu tauluista, joissa on tarvittava data visualisointien luomiseen. Tietokannan rakenne on hyvin yksinkertainen, sillä kaikissa käyttötapauksissa tietokantahaut palauttavat kokonaisen taulun tai osan siitä, eikä tauluilla ole keskenään riippuvaisuuksia.
JavaScript koodissa näkymän luominen tapahtuu hakemalla tarvittu data tietokannasta HTTP-kutsulla, jolloin se tallennetaan JavaScript Object -tyyppiseen taulukkoon. Chart.js sisältää rakenteen kaavioiden luomisen asettamalla sille tyypin ja erilaisia asetuksia. Alla kuvassa 1 viivakaavio on luotu käyttämällä dataa kolmesta eri tietokantataulusta.

## KÄYTTÖÖNOTTO

Käyttöönotto aloitetaan kloonaamalla repositorio, siirry kloonattuun kansioon ja asenna riippuvaisuudet.
```
npm install
```
Käynnistä MySQL-palvelin.           
Käynnistä Java-ohjelma, joka tarjoaa tarvittavat tietokantahaut HTTP:n välityksellä.
Avaa kloonatun kansion auth-client-kansio ja käynnistä ohjelma suorittamalla komento 
```
npm start
```
Visual Studio Coden terminaalissa.
Käyttöönotto on valmis, kun selain avautuu osoitteeseen localhost: 3000 ja näyttää web-sovelluksen etusivun.
