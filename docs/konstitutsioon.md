# Konstitutsioon

## Probleem

Õpetaja igapäevane tund tekitab palju väärtuslikku teadmist, kuid suur osa sellest jääb hetkel õpetaja pähe, tunnis kohapeale või hajusatesse materjalidesse. Pärast tundi on õpilasel sageli raske taastada, mida tunnis tegelikult seletati, millised näited olid olulised ja kuidas materjal testiks või iseseisvaks õppimiseks kokku siduda.

Õpetaja jaoks on probleem selles, et tunni järel kvaliteetse kokkuvõtte, kordamismaterjali, viktoriini või jagatava PDF-i tegemine võtab aega. Kooli jaoks on probleem laiem: kui mitmed õpetajad õpetavad aasta-aastalt sarnast sisu, siis kooli tegelik teadmistebaas ei ole struktureeritud ega taaskasutatav.

## Sihtrühm

Esmane sihtrühm on aineõpetaja, kes teeb tunnis suulist seletust, kasutab oma materjale ning tahab tunni järel kiiresti saada õpilastele jagatava õppimist toetava tulemuse.

Teisene kasusaaja on õpilane, kes eelistab detailset, struktureeritud ja enda tempos kasutatavat õppematerjali. Kolmas võimalik kasusaaja on koolijuht või õppejuht, kes tahab aru saada, millist teadmist koolis tegelikult õpetatakse ja kuidas seda ühtlustada või taaskasutada.

## Kontekst

Täna on paljud kooli digitööriistad nagu eKool ja Stuudium eelkõige administratiivsed: hinded, puudumised, kodutööd, suhtlus. Need ei talleta tunni sisulist "ajutegevust": kuidas õpetaja teemat selgitas, millised seosed tekkisid, millised kohad vajavad kordamist ja milline õppematerjal konkreetsest tunnist välja kasvas.

Teacher Copilot uurib, kas tunnis tekkivast audio- või tekstipõhisest sisendist saab teha kohese õppimist toetava tulemuse: kokkuvõte, detailne PDF, kordamisküsimused, flashcard'id või viktoriin. Pikemas plaanis võib mitme õpetaja kasutuse korral tekkida kooli digitaalne teadmistebaas, kuid hackathoni prototüüp peab valima ühe selge esimese kasutusloo.

## Põhimõtted ja piirangud

- Prototüüp peab lähtuma päris õpetaja ja päris õpilase õppimisvajadusest, mitte ainult AI-demo efektist.
- Esimene väärtus peab tekkima ühe tunni või ühe õppesisendi põhjal.
- Lahendus peab olema õpetajale ajavõit, mitte uus halduskoormus.
- Õpilasele loodud materjal peab olema piisavalt detailne, kontrollitav ja õppimiseks kasutatav.
- Privaatsus ja nõusolek on keskne risk, eriti kui sisendiks on tunni audio. Prototüüp peab selgelt näitama, mis andmetega töötab ja mida ei salvesta.
- Süsteem ei tohi jätta muljet, et see hindab õpetaja kvaliteeti või õpilasi automaatselt ilma inimliku kontrollita.
- Hackathoni skoobis tuleb vältida kogu eKooli/Stuudiumi asendamise ehitamist; see võib olla tulevikuvisioon, mitte esimene toode.
- Keel peab sobima Eesti koolikontekstiga. Esimene demo võib olla eesti või inglise keeles, aga sihtrühma jaoks peab lõplik kasutus olema eesti keeles arusaadav.

## Edu kriteeriumid

- Õpetaja saab ühest tunnisisendist kiiresti kvaliteetse, õpilasele jagatava õppematerjali.
- Õpilane saab kasutada loodud materjali kordamiseks, testi ettevalmistuseks või tunnist puudumise kompenseerimiseks.
- Demo näitab selgelt, miks see on õpetajale ajasääst ja õpilasele õppimises päriselt kasulik.
- Prototüüp teeb nähtavaks vähemalt ühe tulevikuväärtuse koolile: näiteks teadmiste taaskasutus, klassidevaheline järjepidevus, õppematerjalide ühtlustamine või kooli sisuline teadmistebaas.
- Lahenduse privaatsusmudel on piisavalt selge, et kooli esindaja saab aru, milliseid riske peab enne päris kasutust hindama.

## Tootehüpoteesid

- Kui õpetaja saab tunnist automaatselt hea kokkuvõtte ja õppematerjali, siis ta on valmis seda töövoogu katsetama.
- Kui õpilane saab õpetaja tegeliku tunni põhjal detailse PDF-i, flashcard'id või lühiviktoriini, siis osa õpilasi kasutab seda õppimise kinnistamiseks.
- Kui koolis tekib mitme õpetaja tundidest struktureeritud teadmistebaas, siis kool võib näha väärtust õppesisu järjepidevuses ja taaskasutuses.
- Esimene maksevalmidus võib tulla koolilt, kui lahendus seostub õpetajate ajasäästu, õppematerjalide kvaliteedi või kooli teadmuse korrastamisega.

## Avatud küsimused

### Esimene kasutaja ja esimene töövoog

- Kes on hackathoni demo esimene kasutaja: õpetaja, õpilane või koolijuht?
- Kas esimene prototüüp algab audio üleslaadimisest, õpetaja märkmetest, slaididest/PDF-ist või juba olemasolevast transkriptist?
- Mis on esimene "wow" väljund: detailne PDF, tunni kokkuvõte, quiz, flashcard'id, kodutöö ettepanek või õpetaja jaoks tunniplaan?
- Kas demo peaks näitama ühe õpetaja ühte tundi või kooliülesemat mitme tunni/materjali vaadet?

### Õpilase väärtus

- Milline õpilane seda päriselt kasutaks: tugev õpilane, puudunud õpilane, eksamiks valmistuja, HEV/toe vajadusega õpilane või keeleliselt nõrgem õpilane?
- Kas õpilase UI on esimeses versioonis vajalik või piisab õpetaja loodud jagatavast lingist/PDF-ist?
- Kas viktoriinide ja flashcard'ide eesmärk on enesekontroll või õpetajale tagasiside kogumine?
- Kas õpilane peaks saama küsida materjali kohta küsimusi või oleks see juba järgmine etapp?

### Õpetaja väärtus

- Millist tööd õpetaja täna pärast tundi teeb, mida Copilot peaks vähendama?
- Kui palju aega peab lahendus säästma, et õpetaja tajuks seda päris väärtusena?
- Kas õpetaja peab saama AI väljundit enne jagamist muuta ja kinnitada?
- Mis oleks õpetaja jaoks lubamatu viga: faktiviga, liiga üldine kokkuvõte, vale toon, privaatsusrisk või liiga pikk töövoog?

### Kooli väärtus

- Mis on kooli jaoks kõige ostetavam väärtus: õpetajate ajasääst, õpilaste parem kordamine, õppesisu ühtlustamine, teadmistebaas või juhtimisülevaade?
- Kas kool tahaks näha õppeainete ja klasside lõikes sisulist kaarti sellest, mida tegelikult õpetatakse?
- Kas "kooli digitaalne aju" on hackathoni loos põhiväärtus või tulevikuvisioon, mida mainitakse ainult laiendusena?
- Milliseid riske kool näeks, kui tundide sisu hakkab talletuma ja analüüsitavaks muutuma?

### Privaatsus ja usaldus

- Kas audio salvestatakse, kustutatakse kohe pärast töötlust või kasutatakse ainult lokaalselt/transkripti kaudu?
- Kelle nõusolekut on vaja: õpetaja, õpilased, lapsevanemad, kool?
- Kas prototüüp peab töötama ilma päris õpilaste häälteta, näiteks näidisandmete peal?
- Milline sõnastus teeb koolile selgeks, et tegu on õppematerjali loomise tööriista, mitte jälgimis- või hindamissüsteemiga?

### Skoop ja positsioneering

- Kas me ehitame "teacher copilot'i" või laiemat kooli operatsioonisüsteemi esimest seemet?
- Kas eKooli/Stuudiumi konkurendi idee jääb teadlikult tulevikuvisiooniks?
- Milline üks kasutuslugu peab hackathoni lõpuks olema nii hea, et selle põhjal saab edasi uurida maksevalmidust?
- Mis jääb esimesest demost kindlasti välja, isegi kui see tundub põnev?
