# Konstitutsioon

## Probleem

Õpetaja igapäevane tund tekitab palju väärtuslikku teadmist, kuid suur osa sellest jääb hetkel õpetaja pähe, tunnis kohapeale või hajusatesse materjalidesse. Pärast tundi on õpilasel sageli raske taastada, mida tunnis tegelikult seletati, millised näited olid olulised ja kuidas materjal testiks või iseseisvaks õppimiseks kokku siduda.

Õpetaja jaoks on probleem selles, et tunni järel kvaliteetse kokkuvõtte, kordamismaterjali, kodutöö kirjelduse, viktoriini või jagatava PDF-i tegemine võtab aega. Samuti peab õpetaja tagantjärele meenutama, mis tunnis täpselt toimus, kes puudus, mida lubati järgmiseks korraks ja mida peaks õpilastele või eKooli/Stuudiumi kaudu edasi andma.

Õpilase jaoks on probleem selles, et tunni sisu kaob pärast tundi kiiresti: puudunud õpilane ei saa terviklikku ülevaadet ning kontrolltööks valmistuv õpilane peab ise otsustama, mis oli oluline. Kooli jaoks on potentsiaalne probleem laiem, kuid hackathoni prototüüp seda veel ei lahenda: kui mitmed õpetajad õpetavad aasta-aastalt sarnast sisu, siis kooli tegelik teadmistebaas ei ole struktureeritud ega taaskasutatav.

## Sihtrühm

Esmane sihtrühm on aineõpetaja, kes teeb tunnis suulist seletust, kasutab oma materjale ning tahab tunni järel kiiresti saada õpilastele jagatava õppimist toetava tulemuse. Hackathoni demos on õpetajal oma vaade.

Teine sihtrühm on õpilane, kellel on oma vaade. Esmane õpilase kasutusjuht on kontrolltööks valmistumine või puudutud tunni järele õppimine. Õpilase väärtus ei pruugi piirduda ainult nende kahe olukorraga, sest uus töövoog võib tekitada ka õppimisharjumusi, mida täna ei ole võimalik jälgida.

Koolijuht, õppejuht ja kooliülene teadmistebaas jäävad hackathoni demos tulevikuvisiooniks.

## Kontekst

Täna on paljud kooli digitööriistad nagu eKool ja Stuudium eelkõige administratiivsed: hinded, puudumised, kodutööd, suhtlus. Need ei talleta tunni sisulist "ajutegevust": kuidas õpetaja teemat selgitas, millised seosed tekkisid, millised kohad vajavad kordamist ja milline õppematerjal konkreetsest tunnist välja kasvas.

Teacher Copilot uurib, kas tunnis tekkivast audio- või tekstipõhisest sisendist saab teha kohese õppimist toetava tulemuse: kokkuvõte, detailne PDF, kordamisküsimused, flashcard'id, viktoriin ja kodutöö kirjeldus. Pikemas plaanis võib mitme õpetaja kasutuse korral tekkida kooli digitaalne teadmistebaas, kuid hackathoni prototüüp keskendub ühele õpetajale, ühele klassile ja ühele tunnile.

Ideaalne tuleviku töövoog algab sellest, et õpetaja avab rakenduse enne tundi. Rakendus saab aru, mis päev, kellaaeg ja tund parasjagu on, ning pakub õpetajale võimalust siseneda õigesse tundi, muuta tunni infot ja alustada salvestust. Tunni vaates näeb õpetaja õpilasi ning saab kiiresti märkida kohaloleku, puudumise või hilinemise. Hackathoni demos võib see töövoog olla osaliselt simuleeritud: tund võib olla juba toimunud ning tulemused võivad olla ette genereeritud või näidisandmete põhjal loodud.

## Hackathoni fookus

Hackathoni demos on kaks kasutajavaadet:

- Õpetaja vaade: õpetaja näeb ühe tunni tulemust, saab AI loodud kokkuvõtet ja PDF-i kontrollida, muuta ning valmistada ette ekspordi eKooli/Stuudiumi või muu jagamise jaoks.
- Õpilase vaade: õpilane näeb konkreetse tunni õppematerjali, kodutööd ning saab teha enesekontrolliks viktoriini. Flashcard'id on kasulik sekundaarne võimalus, kuid mitte peamine demo väärtus.

Demo ei keskendu koolijuhile, mitmele klassile, kooliülesele analüütikale ega eKooli/Stuudiumi asendamisele. Kui aega jääb, võib audio üleslaadimine või mini-tunni salvestamine olla lisavõimalus, kuid demo põhiväärtus peab töötama ka ettevalmistatud ühe tunni andmete peal.

## Põhimõtted ja piirangud

- Prototüüp peab lähtuma päris õpetaja ja päris õpilase õppimisvajadusest, mitte ainult AI-demo efektist.
- Esimene väärtus peab tekkima ühe tunni või ühe õppesisendi põhjal.
- Lahendus peab olema õpetajale ajavõit, mitte uus halduskoormus.
- Õpilasele loodud materjal peab olema piisavalt detailne, kontrollitav ja õppimiseks kasutatav.
- Privaatsus ja nõusolek on keskne risk, eriti kui sisendiks on tunni audio. Prototüüp peab selgelt näitama, mis andmetega töötab ja mida ei salvesta.
- Audio kustutatakse pärast töötlust. Säilitatakse ainult kirjalik õppesisu või kokkuvõte ning ka sellest tuleb eemaldada GDPR-i mõttes ebavajalikud isikunimed ja õpilastega seostatavad detailid.
- Süsteem ei tohi jätta muljet, et see hindab õpetaja kvaliteeti või õpilasi automaatselt ilma inimliku kontrollita.
- Hackathoni skoobis tuleb vältida kogu eKooli/Stuudiumi asendamise ehitamist; see võib olla tulevikuvisioon, mitte esimene toode.
- Keel peab sobima Eesti koolikontekstiga. Esimene demo võib olla eesti või inglise keeles, aga sihtrühma jaoks peab lõplik kasutus olema eesti keeles arusaadav.
- AI väljund on mustand. Õpetaja peab saama enne eksporti või jagamist muuta kokkuvõtet, PDF-i, kodutööd ja muid õpilasele minevaid osi.
- Lubamatud riskid on faktivead, privaatsusriskid, õpilaste nimeline mainimine õppematerjalis ning liiga pikk või ebamugav töövoog.

## Edu kriteeriumid

- Õpetaja saab ühe toimunud tunni põhjal kiiresti kvaliteetse, kontrollitava ja õpilasele jagatava õppematerjali.
- Õpetaja saab muuta AI loodud väljundit enne, kui see eksporditakse või õpilasele nähtavaks tehakse.
- Õpilane saab kasutada loodud materjali kordamiseks, kontrolltööks valmistumiseks või puudutud tunni kompenseerimiseks.
- Õpilane saab teha loodud materjali põhjal enesekontrolli viktoriini.
- Demo näitab selgelt, miks see on õpetajale ajasääst ja õpilasele õppimises päriselt kasulik.
- Prototüüp vihjab tulevikuväärtusele koolile, näiteks teadmiste taaskasutus, klassidevaheline järjepidevus, õppematerjalide ühtlustamine või kooli sisuline teadmistebaas, kuid ei ehita seda veel välja.
- Lahenduse privaatsusmudel on piisavalt selge, et kooli esindaja saab aru, milliseid riske peab enne päris kasutust hindama.

## Tootehüpoteesid

- Kui õpetaja saab tunnist automaatselt hea kokkuvõtte ja õppematerjali, siis ta on valmis seda töövoogu katsetama.
- Kui õpilane saab õpetaja tegeliku tunni põhjal detailse PDF-i, flashcard'id või lühiviktoriini, siis osa õpilasi kasutab seda õppimise kinnistamiseks.
- Kui koolis tekib mitme õpetaja tundidest struktureeritud teadmistebaas, siis kool võib näha väärtust õppesisu järjepidevuses ja taaskasutuses.
- Esimene maksevalmidus võib tulla koolilt, kui lahendus seostub õpetajate ajasäästu, õppematerjalide kvaliteedi või kooli teadmuse korrastamisega.

## Rahastuse hüpotees

Eesti kontekstis ei ole realistlik eeldada, et õpetaja maksab sellise tööriista eest ise. Kui lahendus peab looma võrdse ligipääsu õppimise toetamisele, ei tohiks ka õpilase või lapsevanema makse olla esimene eeldus. Esmane maksja on tõenäoliselt kool, koolipidaja, riik või mõni haridusprogramm.

Hackathoni esimene eesmärk on seega pigem kontseptsiooni tõestamine: kas õpetajad ja õpilased kasutaksid sellist töövoogu ning kas loodav väärtus on piisavalt selge, et hiljem rahastusmudelit uurida.

## Avatud küsimused

- Kas hackathoni demos on vaja päriselt audio üleslaadimist/salvestamist või piisab simuleeritud salvestusest ja ettevalmistatud tunniandmetest?
- Milline on minimaalne nõusoleku ja privaatsuse sõnastus, mis teeb selgeks, et audio kustutatakse ning õpilasi ei jälgita ega hinnata?
- Kui õpetaja muudab AI väljundit, siis millised osad peavad olema muudetavad esimeses demos: kokkuvõte, PDF, kodutöö, viktoriin, kohalolek?
- Kuidas mõõta või näidata demo käigus õpetaja ajasäästu, kui päris kasutusandmeid veel ei ole?
- Milline rahastuslugu on pitch'is kõige usutavam: kooli ost, kohaliku omavalitsuse/koolipidaja ost, riiklik programm või esialgu ainult proof of concept?
- Kas nimi peaks olema Teacher Copilot, Teacher and Student Copilot või Class OS?

## Teadlikult skoobist väljas

- Koolijuhi või õppejuhi vaade.
- Mitme klassi, mitme õpetaja või kooliülene analüütika.
- Õpetaja kvaliteedi automaatne hindamine.
- Õpilaste automaatne hindamine või õpetajale õpilaste tulemuste raportimine viktoriinide põhjal.
- Õpilase võimalus materjali kohta vestluslikult küsimusi küsida.
- eKooli või Stuudiumi asendamine tervikliku kooli operatsioonisüsteemina.
