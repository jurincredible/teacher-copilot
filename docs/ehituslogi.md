# Ehituslogi

## Kirjutamise reegel

Lisa siia ainult otsused, avastused, kompromissid ja spec'i muutused, mis aitavad järgmisel Codexi sessioonil aru saada, miks projekt on sellises seisus.

## Logi

### 2026-05-08

- Konstitutsiooni esimene tööversioon loodud kasutaja hackathoni-arutelu põhjal. Fookus jäeti teadlikult avatuks kolme võimaliku väärtuskihi vahel: õpetaja ajasääst, õpilase õppematerjalid ja kooli digitaalne teadmistebaas.
- Otsus: eKooli/Stuudiumi asendamine käsitletakse praegu tulevikuvisioonina, mitte hackathoni prototüübi esimese skoobina.
- Täpsustatud konstitutsiooni fookus: hackathoni demos on kaks vaadet, õpetaja ja õpilane. Koolijuhi vaade, kooliülene analüütika ja Class OS-i laiem operatsioonisüsteemi mõte jäävad tulevikuvisiooniks.
- Otsus: demo keskendub ühele õpetajale, ühele klassile ja ühele tunnile. Õpetaja saab AI väljundit enne jagamist muuta; õpilase põhiväärtus on tunni materjal ja enesekontrolli viktoriin.
- Privaatsuspõhimõte: audio kustutatakse pärast töötlust ning säilitatavast kirjalikust õppesisust eemaldatakse ebavajalikud isikunimed ja õpilastega seostatavad detailid.
- Rahastuse hüpotees: õpetaja ega lapsevanem ei ole esmane maksja; tõenäoline maksja on kool, koolipidaja, riik või haridusprogramm. Hackathoni eesmärk on esmalt tõestada kasutusväärtust.
- Spec'i lisati õpetaja vaate töövoog: kalendrivaade, klassivaade ja tunni vaade koos salvestuse, teema, kokkuvõtte, automaatse konspekti PDF-i, kodutöö, manuse ja kohaloleku märkimisega.
- Spec'i integreeriti õpilase vaade üldistatud kujul: aine ja tunni valik, tunni õppesisu, puudutud tunni järeleaitav ülevaade, võtmemõisted, kodutöö ja enesekontrolli mini-viktoriin. Detailne tehniline Expo/React Native kirjeldus jäeti spec'ist välja, sest olemasolev dokument hoiab kasutajavaate ja nõuete taset.
- Kasutaja täpsustas avatud küsimusi: projekti nimi on ClassOS; esimene demo kasutab simuleeritud salvestust ja ettevalmistatud tunniandmeid; õpetaja saab esimeses versioonis muuta kokkuvõtet, kodutööd ja kohalolekut, kuid PDF/konspekt ja viktoriin ei pea kohe muudetavad olema; detailne õppematerjal peab toetama LaTeX-it; õpilase vaates piisab esialgu ühest klassitunnist ja viktoriini tulemus on lokaalne hetketagasiside.
- Otsus: olemasolev Teacher Copilot proto asendati ClassOS-i telefonikeskse staatilise SPA prototüübiga failides `index.html`, `styles.css` ja `app.js`. Põhjus: hackathoni demo peab olema kiiresti QR-koodiga telefonis avatav ning staatiline variant väldib build-chain'i riski.
- Disainisuund: tume, minimalistlik, Linearist inspireeritud tööriista-UI; mitte turunduslik avaleht. Rollivahetus õpetaja ja õpilase vahel paikneb hamburgeri menüüs, nagu kasutaja täpsustas.
- Kompromiss: QR-koodi renderdamiseks kasutatakse kliendis avalikku QR-pildi endpoint'i `api.qrserver.com`, sest projektis ei ole sõltuvusi ega kohalikku QR generaatorit. Demo URL kuvatakse ka tekstina.
- Kontroll: `python -m http.server 4173 --bind 0.0.0.0` vastas lokaalselt `200`; HTML/JS ID-suitsukontroll kinnitas, et kõik `app.js` ID-viited on `index.html` failis olemas. `node --check app.js` ei olnud võimalik, sest WindowsApps Node käivitus lõppes veaga `Access is denied`.
- Konspekti renderdus loeb nüüd kogu `assets/2026-03-24_10-50.tex` faili brauseris, teisendab peamised LaTeX struktuurid HTML-iks ning avab konspektikaardi klikkimisel suurema modal-akna. Kõrvalrepo `C:\Users\juri-mikk.udam\Code\reaal-elektromagnetism` on ligipääsetav; sealne `.latexmkrc` on kasulik PDF buildi jaoks, kuid prototüübi brauserivaates kasutati väikest kliendipoolset renderdajat, et demo ei sõltuks LaTeX build-chain'ist.

### 2026-05-09

- Annotatsioonide põhjal täpsustati õpetaja vaadet: päevavaates kuvatakse praegune kellaaeg, "Genereeri tulemused" nupp eemaldati, kohaloleku kokkuvõte kasutab vormi "Kõik kohal" või "Puudub: X" ning kodutöö tähtaeg integreeriti kodutöö plokki.
- Lisati uus "Nädala tunnid" vaade 5 tööpäeva valikuga; iga päev näitab kuupäeva, nädalapäeva ja õpetaja tundide arvu. Menüü järjestus muudeti kujule: avatud tund, päeva tund, nädala tunnid, klassid ja ajalugu, QR-kood.
- Uute annotatsioonide põhjal muudeti õpetaja alumine navigatsioon järjestusse Tund, Päev, Nädal, Klassid, kuid vaikimisi avaneb endiselt Päev vaade. Nädalapäeva valik avab vastava Päev vaate placeholder-tundidega. Klassikaardid kuvavad 35 tunni ajaloo ja kerivad tänase 8. mai ehk 25. tunni juurde. Visuaal viidi Notioni-laadseks heledaks tööriista-UI-ks pastelsete rõhkudega.
- Järgmiste annotatsioonide põhjal eemaldati pastelsed kaardigradiendid ja lisati Notioni-laadne neutraalne hele/tume režiim. Täpsustati kohaloleku toggle'i semantika: paremal tähendab kohal, vasakul punase taustaga tähendab puudub. Kodutöö tähtajale lisati valikuline kellaaeg, avaldamisnupp muudeti mitmusesse ning menüü sildid lühendati kujule Tund, Päev ja Nädal.
- Viimaste annotatsioonide põhjal viidi tume režiim hamburgeri menüüsse, eemaldati kellaaja väljalt brauseri time-input'i ikoon, lõpetati konspekti eelvaate teksti fade ning klasside 35 tunni ajalugu muudeti accordioniks, mis avaneb valitud klassikaardi all ja sulgub sama kaardi kordusvajutusel. Õpilase vaatesse lisati alumine navigatsioon Tund, Päev, Nädal ja Ained. Rollivärvid fikseeriti: õpetajal `#D96B3B`, `#E9A43A`, `#F2ECE6`; õpilasel `#F96854`, `#F3C65F`, `#F3D5CC`.
- Õpilase Ained vaade muudeti ainekeskseks: esialgu kuvatakse ainult Füüsika ja Matemaatika, aine avab 35 tunni loendi ning tunni valimine viib Tund vaatesse. Rollivahetus maandub nüüd Päev vaatesse. Päeva tundidele lisati tunniplaani järjekorranumbrid ning õpilase nädala/päeva sildid muudeti "Nädala tunnid", "Tänased tunnid" ja "X tundi". Värvisüsteemi lisati rollipõhistele põhivärvidele mitu tagasihoidlikku ainetooni.
- Päevakava tekstiveerg joondati vasakule ühtlase algusega. Primaarsed nupud viidi tumedamale Microsoft Edge'i sinisele, õigete viktoriinivastuste tagasiside rohelisele joonele ning õpilase nädala vaade kasutab nüüd 5-7 tunniga päevi ja kogutundide päisepilli.
- Õpilase päeva tunninuppude tekstipaigutus muudeti ülemisest servast algavaks grid-paigutuseks ning nupule anti lisakõrgus, et aine rida ei lõikuks telefonivaates alumise servaga.
- Annotatsioonide põhjal eemaldati rakendusest nähtav QR-koodi avamise UI nii ülaribalt kui hamburgeri menüüst. Õpilase päeva tunniloendi sisemine kõrguspiirang eemaldati, et viies tund ei jääks väikese kerimisala taha peitu.
- Annotatsiooni põhjal muudeti rakenduse vaikimisi avanev teema tumedaks; hamburgeri menüü teemanupu algtekst on nüüd "Hele režiim".
