# Spec

## Ülevaade

Teacher Copiloti esimene demo kirjeldab õpetaja vaadet, kus õpetaja leiab oma tunniplaanist või klasside loendist konkreetse tunni, avab tunni vaate ning saab tunni kohta salvestada heli, kontrollida või muuta tunni teemat, kokkuvõtet, konspekti, kodutööd ja kohalolekut. Esmane fookus on ühel õpetajal, tema klassidel ja ühel konkreetsel tunnil.

See spec'i versioon kirjeldab eeskätt õpetaja vaadet. Õpilase vaade on konstitutsioonis oluline demo osa, aga vajab eraldi täpsustamist.

## Kasutajalood

- Õpetajana tahan näha oma päeva tunniplaani kalendrivaates, et liikuda kiiresti õige tunni juurde.
- Õpetajana tahan valida klassi ning näha selle klassi aasta jooksul toimunud tunde, et leida kiiresti viimane või vajalik tund.
- Õpetajana tahan tunni ajal avada konkreetse tunni vaate ja alustada helisalvestust, et tunni põhjal saaks hiljem automaatselt õppematerjali luua.
- Õpetajana tahan muuta tunni teemat, kokkuvõtet, kodutööd ja õppematerjali, et AI loodud sisu oleks enne jagamist kontrollitud.
- Õpetajana tahan lisada tunnile manusena töölehe, dokumendi või PDF-i, et koondada sama tunni juurde ka oma olemasolevad materjalid.
- Õpetajana tahan märkida õpilaste kohalolekut, puudumist ja hilinemist otse telefonist, et tunni info oleks kohe õiges kohas.

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
- "Salvesta" nupp alustab hääle salvestamist ja tekitab häälefaili.
- "Teema" on üherealine tekstiväli tunni pealkirja jaoks.
- "Kokkuvõte" on suur tekstiväli tunni kirjelduse jaoks.
- "Konspekt" on PDF, mis tekitatakse automaatselt "Salvesta" nupuga saadud helifailist.
- "Kodutöö" on üherealine tekstiväli, mis võib sisaldada ülesande ja oodatava väljundi kirjeldust.
- Õpetaja saab tunnile lisada manuse töölehe, dokumendi või PDF-ina.
- Õpetaja näeb õpilaste nimekirja.
- Iga õpilase rea juures on toggle switch või sarnane kiire kontroll, millega saab telefonist määrata, kas õpilane puudus või hilines.

## Mida see ei tee

- See spec'i osa ei kirjelda veel õpilase vaate detailset kasutajakogemust.
- Rakendus ei tee õpetaja eest lõplikku otsust, milline kokkuvõte, konspekt või kodutöö õpilastele jagatakse.
- Rakendus ei hinda õpetaja kvaliteeti.
- Rakendus ei hinda õpilasi automaatselt.
- Rakendus ei asenda eKooli, Stuudiumi ega kogu kooli tunniplaani- ja haldussüsteemi.
- Hackathoni demos ei pea olema ehitatud kogu õppeaasta tegelikku andmemudelit; klassi umbes 35 tunni vaade võib töötada demoandmetega.

## Visuaalne visioon

Õpetaja esimene vaade on praktiline tööpäevavaade, mitte turunduslik avaleht. UI peab tunduma tuttav nagu kalender ja klassipäevik: vasakul või ülemises osas on päeva tunnid, klassivaates on õpetaja klassid ning tunni vaates on kõige nähtavamad tegevused salvestamine, teema, kokkuvõte, konspekt, kodutöö, manus ja kohaloleku märkimine.

Tunni vaade peab toimima ka telefonis, sest kohalolekut, puudumist ja hilinemist peab saama tunnis kiiresti märkida. Vormiväljad peavad olema selged ja muudetavad; AI loodud sisu peab tunduma mustandina, mida õpetaja saab enne jagamist üle vaadata.

## Edge case'id ja riskid

- Kui rakendus pakub pop-up'is valet tundi, peab õpetaja saama selle tagasi lükata ja valida õige tunni.
- Kui tund ei ole praegu toimumas, ei tohiks "Salvesta" nupp jätta muljet, et salvestamine on automaatselt kohustuslik.
- Helisalvestus ja sellest tehtud PDF on privaatsusrisk; kasutajale peab olema selge, mida salvestatakse, mida säilitatakse ja mida kustutatakse.
- AI loodud kokkuvõte, konspekt ja kodutöö võivad sisaldada faktivigu, mistõttu õpetaja muutmisvõimalus on kohustuslik.
- Õpilaste nimed ja kohaloleku info ei tohi sattuda loodavasse õppematerjali ega jagatavasse PDF-i, kui see ei ole teadlikult vajalik.
- Telefonis kohaloleku märkimine peab olema kiire; liiga palju staatusevalikuid või kinnitusi muudaks voo ebamugavaks.

## Avatud küsimused

- Kas hackathoni demos peab "Salvesta" nupp päriselt heli salvestama või võib see esimeses versioonis simuleerida juba olemasoleva häälefaili kasutamist?
- Kas "Konspekt" PDF peab esimeses demos olema päriselt genereeritav või võib see olla ettevalmistatud näidisfail, mida kuvatakse tunni tulemusena?
- Millised täpsed staatusevalikud on õpilase real: kohal, puudus, hilines või ainult puudus/hilines toggle'id?
- Kas "Kodutöö" peab esimeses versioonis olema ainult üherealine tekstiväli või vajab see hiljem pikemat kirjeldust ja tähtaega?
- Kuidas on õppeaasta ja umbes 35 tunni demoandmed struktureeritud: kas need on staatilised või kasutaja saab neid muuta?
- Milline peab olema õpilase vaade, mis kasutab sama tunni kokkuvõtet, konspekti, kodutööd ja viktoriini?
