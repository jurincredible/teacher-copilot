# Spec

## Ülevaade

ClassOS-i esimene demo kirjeldab õpetaja ja õpilase vaadet ühe tunni ümber. Õpetaja leiab oma tunniplaanist või klasside loendist konkreetse tunni, avab tunni vaate ning saab tunni kohta salvestada heli, kontrollida või muuta tunni teemat, kokkuvõtet, konspekti, kodutööd ja kohalolekut. Õpilane saab sama tunni põhjal avada õppematerjali, puudutud tunni järele võtta ning teha enesekontrolli.

Esmane fookus on ühel õpetajal, tema klassidel, ühel konkreetsel tunnil ja selle tunni õpilasele nähtaval õppesisul. Lahendus võib demo jaoks kasutada ettevalmistatud aineid ja tunde, kui kasutajaväärtus on selgelt nähtav.

## Kasutajalood

- Õpetajana tahan näha oma päeva tunniplaani kalendrivaates, et liikuda kiiresti õige tunni juurde.
- Õpetajana tahan valida klassi ning näha selle klassi aasta jooksul toimunud tunde, et leida kiiresti viimane või vajalik tund.
- Õpetajana tahan tunni ajal avada konkreetse tunni vaate ja alustada helisalvestust, et tunni põhjal saaks hiljem automaatselt õppematerjali luua.
- Õpetajana tahan muuta tunni teemat, kokkuvõtet, kodutööd ja õppematerjali, et AI loodud sisu oleks enne jagamist kontrollitud.
- Õpetajana tahan lisada tunnile manusena töölehe, dokumendi või PDF-i, et koondada sama tunni juurde ka oma olemasolevad materjalid.
- Õpetajana tahan märkida õpilaste kohalolekut, puudumist ja hilinemist otse telefonist, et tunni info oleks kohe õiges kohas.
- Õpilasena tahan valida õppeaine ja tunni, et leida kiiresti vajaliku tunni õppematerjal.
- Õpilasena tahan näha tunni kokkuvõtet, võtmemõisteid ja kodutööd, et korrata tunnis õpitut.
- Õpilasena tahan puudutud tunni kohta saada eraldi järeleaitavat ülevaadet, et mõista, millest alustada.
- Õpilasena tahan teha tunni põhjal mini-viktoriini, et kontrollida, kas sain põhisisust aru.

## Funktsionaalsus

### 1. Kalendrivaade

- Õpetaja näeb päeva korraga, Google Calendari sarnase päevavaatena.
- Tunnid on listitud kronoloogilises järjekorras.
- Õpetaja saab valida ühe tunni.
- Tunni valimine viib klassi-tunni vaatesse.
- Kui praegu on valitud või ajakavas oleva tunni aeg, kuvab rakendus pop-up'i küsimusega: "Kas praegu on see tund?"

### 2a. Klassi vaade

- Ülemises vaates kuvatakse klassid, kellele õpetaja tunde annab.
- Kui õpetaja klikib klassile, kuvatakse selle klassi kõik tunnid jooksval õppeaastal.
- Ühe klassi kohta on õppeaastas ligikaudu 35 tundi.
- Tundide loend on vaikimisi keritud viimasele tunnile, mis on juba toimunud.

### 2b. Tunni vaade

- Kui praegu on tunni aeg, kuvatakse vaate ülemises osas nupp "Salvesta".
- "Salvesta" nupp alustab esimeses demos simuleeritud salvestust või ettevalmistatud häälefaili kasutamist.
- Kui live-tunni salvestuse UI on nähtav, saab õpetaja salvestust alustada, pausile panna, jätkata, lõpetada ja tulemuste genereerimise käivitada.
- "Teema" on üherealine tekstiväli tunni pealkirja jaoks.
- "Kokkuvõte" on suur tekstiväli tunni kirjelduse jaoks.
- "Konspekt" on detailsem õppematerjal või PDF-vaade, mis võib esimeses demos olla ettevalmistatud näidis või simuleeritud genereerimise tulemus.
- Detailsem õppematerjal peab toetama LaTeX-vormingut, kui tunni sisu sisaldab valemeid või eriala-spetsiifilist matemaatilist kirjaviisi.
- "Kodutöö" on muudetav mitmerealine tekstiväli, mis võib sisaldada ülesande ja oodatava väljundi kirjeldust.
- Kodutööl on tähtaeg, mille süsteem võib pakkuda automaatselt tunni konteksti põhjal, näiteks järgmiseks tunniks või järgmiseks nädalaks. Kui kalendri- või tunniplaaniandmed on olemas, peaks kodutöö maanduma loogiliselt järgmise seotud tunni juurde.
- Õpetaja saab tunnile lisada manuse töölehe, dokumendi või PDF-ina.
- Õpetaja näeb õpilaste nimekirja.
- Kohaloleku vaikimisi eeldus on, et õpilased on kohal.
- Iga õpilase rea juures on checkbox, toggle või sarnane kiire kontroll, millega õpetaja märgib puudujad.
- Õpetaja saab vajadusel kõik õpilased korraga kohalolijaks märkida või valiku kiiresti lähtestada.
- Hilinemise ja märkuse lisamine võib hilisemas versioonis olla rea lisategevus, näiteks swipe'i või detailvaate kaudu, kuid see ei ole esimese demo põhivoog.

### 3. Õpilase vaade

- Õpilane saab liikuda aine valikust sama aine tundide loendisse ja sealt konkreetse tunni detailvaatesse.
- Õpilasele kuvatakse tunni pealkiri, aine, kuupäev ja kestus või muu lühike tunni meta-info.
- Tunni detailvaates näeb õpilane õpetaja poolt jagamiseks sobivaks kinnitatud kokkuvõtet, võtmemõisteid ja kodutööd.
- Puudunud õpilase jaoks on eraldi "puudusin tunnist" või sarnane järeleaitav sektsioon, mis tõstab esile kõige olulisema, mida tunnist kaasa võtta.
- Tunni sisu võib sisaldada matemaatilisi valemeid või eriala-spetsiifilist vormistust; need peavad olema õpilasele loetavad, mitte lähtekoodina segavad.
- Õpilane saab teha tunni põhjal mini-viktoriini, mis annab kohe tagasisidet õige või vale vastuse kohta.
- Viktoriin on enesekontrolliks, mitte hindamiseks; selle tulemus ei lähe õpetajale automaatse hindena ega raportina.
- Õpilase vaade kasutab sama ühe klassitunni õppesisu, mille õpetaja on loonud, üle vaadanud või demoandmetena ette valmistanud.

## Mida see ei tee

- Rakendus ei tee õpetaja eest lõplikku otsust, milline kokkuvõte, konspekt või kodutöö õpilastele jagatakse.
- Rakendus ei hinda õpetaja kvaliteeti.
- Rakendus ei hinda õpilasi automaatselt.
- Õpilase mini-viktoriin ei ole hindeline kontrolltöö ega adaptiivne õppeplatvorm.
- Õpilase vaade ei sisalda esimeses demos vestluslikku AI-õpetajat ega võimalust tunni kohta vabatekstina küsimusi küsida.
- Rakendus ei asenda eKooli, Stuudiumi ega kogu kooli tunniplaani- ja haldussüsteemi.
- Hackathoni demos ei pea olema ehitatud kogu õppeaasta tegelikku andmemudelit; klassi umbes 35 tunni vaade võib töötada demoandmetega.
- Esimeses demos ei pea olema mitu õpilasele nähtavat ainet või mitut erinevat õpilase vaate disaini; piisab ühest klassitunnist, kui see näitab põhiväärtuse ära.

## Visuaalne visioon

Õpetaja esimene vaade on praktiline tööpäevavaade, mitte turunduslik avaleht. UI peab tunduma tuttav nagu kalender ja klassipäevik: vasakul või ülemises osas on päeva tunnid, klassivaates on õpetaja klassid ning tunni vaates on kõige nähtavamad tegevused salvestamine, teema, kokkuvõte, konspekt, kodutöö, manus ja kohaloleku märkimine.

Tunni vaade peab toimima ka telefonis, sest kohalolekut, puudumist ja hilinemist peab saama tunnis kiiresti märkida. Vormiväljad peavad olema selged ja muudetavad; AI loodud sisu peab tunduma mustandina, mida õpetaja saab enne jagamist üle vaadata.

Õpilase vaade peab tunduma õppimise tööriistana, mitte haldusvaatena. Aine, tund ja õppesisu peavad olema kiiresti leitavad; detailvaates peab rõhk olema loetaval kokkuvõttel, järeleaitaval ülevaatel, mõistetel, kodutööl ja enesekontrollil. Õpilane ei pea nägema õpetaja töövoo tehnilisi samme ega salvestuse töötlemise detaile.

## Edge case'id ja riskid

- Kui rakendus pakub pop-up'is valet tundi, peab õpetaja saama selle tagasi lükata ja valida õige tunni.
- Kui tund ei ole praegu toimumas, ei tohiks "Salvesta" nupp jätta muljet, et salvestamine on automaatselt kohustuslik.
- Helisalvestus ja sellest tehtud PDF on privaatsusrisk; kasutajale peab olema selge, mida salvestatakse, mida säilitatakse ja mida kustutatakse.
- AI loodud kokkuvõte, konspekt ja kodutöö võivad sisaldada faktivigu, mistõttu õpetaja muutmisvõimalus on kohustuslik.
- Õpilaste nimed ja kohaloleku info ei tohi sattuda loodavasse õppematerjali ega jagatavasse PDF-i, kui see ei ole teadlikult vajalik.
- Telefonis kohaloleku märkimine peab olema kiire; liiga palju staatusevalikuid või kinnitusi muudaks voo ebamugavaks.
- Õpilasele nähtav materjal peab olema õpetaja kontrollitud või selgelt demoandmetena ette valmistatud; AI toorväljundit ei tohiks esitada autoriteetse õppematerjalina.
- Viktoriini tagasiside peab vältima eksitavat muljet, et süsteem hindab õpilast või saadab tulemuse õpetajale.
- Valemeid või erivormingut sisaldav õppesisu peab olema loetav ka telefonis; halvasti renderdatud valem võib muuta materjali kasutuks.

## Avatud küsimused

- Kuidas on õppeaasta ja umbes 35 tunni demoandmed struktureeritud: kas need on staatilised või kasutaja saab neid muuta?
- Kas hilinemine ja individuaalsed märkused peavad jõudma esimesse demosse või jäävad need kohaloleku laienduseks?
