# Ilmastonmuutokseen liittyvän tiedon visualisointityökalu

Tekijät:
Tomi Kääriäinen - T0mppa,
Matti Nurmela - mattinurmela,
Emilia Virta - Empppu,
Lassi Väisänen - LassiVaisanen

Visualisaatio 1:n toteuttamiseen osallistuivat kaikki, viimeistelystä vastasi Lassi Väisänen. Visualisaation 2:n on toteuttanut Matti Nurmela. Visualisaation 3:n on toteuttanut Tomi Kääriäinen. Visualisaation 4:n on toteuttanut Lassi Väisänen. Visualisaation 5:n on toteuttanut Emilia Virta. Web-sovelluksen kotisivun ja sen toiminnallisuudet kuten käyttäjän luomisen, sisäänkirjautumisen sekä käyttäjän poistamisen on toteuttanut Emilia Virta. Web-sovelluksen käyttöliittymän ulkonäön sekä muotoilun on toteuttanut Tomi Kääriäinen. 


## ESITTELY

Tämä on Oulun ammattikorkeakoulun 2. vuoden ohjelmistokehityksen opiskelijoiden toteuttama web-ohjelmoinnin sovellusprojekti. Tavoitteena projektissa oli suunnitella ja ohjelmoida ilmastonmuutoksen datavisualisointityökalu. Projekti tehtiin ryhmätyönä jaotellen jokaiselle ryhmän jäsenelle omat osa-alueet. Projektin kaikki jäsenet toimivat Full Stack -kehittäjinä työstäen sekä frontend- että backend-puolta.
Projektissa käytettiin Java-ohjelmointikieltä tietokantapalvelimen toteutukseen ja JavaScriptiä ja sen React-kirjastoa datan visualisointiin selaimessa. Ohjelmointiympäristönä projektissa käytettiin Visual Studio Codea. Tietokantaohjelmistona käytettiin MySQL-ohjelmistoa. Java koodissa toteutettiin tietokantahaut, joita voidaan käyttää HTTP-kutsuilla JavaScript-koodissa.
Projektin tehtävänannon vaatimuksiin kuului käyttäjänhallinta, joka mahdollistaa sovelluksen käyttäjien luomisen, poistamisen ja sisäänkirjautumisen. Lisäksi vaatimuksiin sisältyi responsiivisen käyttöliittymän toteuttaminen, visualisointitietojen tallentaminen ja lataaminen, sekä käyttäjäkohtaisen visualisointinäkymän luominen ja poistaminen. Viimeisenä vaatimuksena sovelluksen julkaisu julkisessa internetissä pilvipalvelualustalla.


## SOVELLUKSEN ARKKITEHTUURI

Tietokanta rakentuu tauluista, joissa on tarvittava data visualisointien luomiseen. Tietokannan rakenne on hyvin yksinkertainen, sillä kaikissa käyttötapauksissa tietokantahaut palauttavat kokonaisen taulun tai osan siitä, eikä tauluilla ole keskenään riippuvaisuuksia.
JavaScript koodissa näkymän luominen tapahtuu hakemalla tarvittu data tietokannasta HTTP-kutsulla, jolloin se tallennetaan JavaScript Object -tyyppiseen taulukkoon. Chart.js sisältää rakenteen kaavioiden luomisen asettamalla sille tyypin ja erilaisia asetuksia. Alla kuvassa 1 viivakaavio on luotu käyttämällä dataa kolmesta eri tietokantataulusta.
<br>
<br>

![photoVisu1](https://user-images.githubusercontent.com/103136095/235738856-8cd50389-1ab9-463b-9a02-3525cdc08d1b.png)
> Kuva 1. Näkymä visualisaatiosta 1.
<br>

## KÄYTTÖÖNOTTO

Käyttöönotto aloitetaan kloonaamalla repositorio, siirry kloonattuun kansioon ja asenna riippuvaisuudet.
```
npm install
```
![installPhoto](https://user-images.githubusercontent.com/103136095/235739117-14ff062f-415f-4c09-acf7-92612d7bb5a4.png )


Käynnistä MySQL-palvelin.           
Käynnistä Java-ohjelma, joka tarjoaa tarvittavat tietokantahaut HTTP:n välityksellä.
Avaa kloonatun kansion auth-client-kansio ja käynnistä ohjelma suorittamalla komento 
```
npm start
```
Visual Studio Coden terminaalissa.
Käyttöönotto on valmis, kun selain avautuu osoitteeseen localhost: 3000 ja näyttää web-sovelluksen etusivun.
<br>
<br>

![homePage](https://user-images.githubusercontent.com/103136095/235739417-58ce40de-f9d9-40a2-a480-0f8b1b75b4cf.png)

> Kuva 2. ClimateView’n kotisivu.

Rekisteröityminen tapahtuu painamalla SignUp-nappia. Tämä ohjaa käyttäjän uudelle sivulle, jossa itse varsinainen käyttäjän luominen tapahtuu. Uusi käyttäjä syöttää haluamansa käyttäjänimen sekä salasanan niille tarkoitettuihin kenttiin. Rekisteröityminen tallentuu MySQL-tietokantaan.
Kun käyttäjä on rekisteröitynyt, siirretään hänet automaattisesti sisäänkirjautumissivulle syöttämään käyttäjätunnus ja salasana. Käyttäjän autentikointi on tehty käyttämällä bearer-tokenia.
Käyttäjän kirjautuessa sisään token ja käyttäjänimi tallentuu automaattisesti selaimen työmuistiin, josta se on käytettävissä käyttäjän tietojen hakua varten. Työmuistia käytetään myös käyttäjän poistamisessa. 
Halutessaan käyttäjä voi poistaa oman käyttäjänsä, jolla on sillä hetkellä sisään kirjautuneena.
<br>
<br>

![photoVisu5](https://user-images.githubusercontent.com/103136095/235740247-4d5aad6b-dbab-436c-9c39-73001199f550.png )

> Kuva 3. Visualisaatio 5 näkymä. 


Visualisaationäkymiin pääsee painamalla yläpalkissa näkyvää ”Visualization Graphs” -painiketta. Visualisaatioiden etusivulle tulee näkyviin painikkeet, josta valitaan, haluaako käyttäjä nähdä visualisaatiot lämpötilatiedoista ja CO2-pitoisuuksia (V1–V3) vai päästölähteistä (V4–V5). Kun käyttäjä on tehnyt valinnan, ohjautuu selain näyttämään halutut visualisaatiot. Kuvassa 3 näkyy visualisaatio 5, joka näyttää CO2-päästöt aloittain.
<br>
<br>

![about](https://user-images.githubusercontent.com/103136095/235740409-ac496123-c49c-4c03-9246-a1f279d191c7.png)

> Kuva 4. About sivulla on tietoa projektista.

