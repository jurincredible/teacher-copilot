# ClassOS

Telefonikeskne hackathoni prototüüp, mis muudab ühe tunni salvestuse või demoandmete põhjal õpetaja poolt kontrollitavaks õppesisuks ja õpilasele kasutatavaks kordamismaterjaliks.

## Demo fookus

- Õpetaja näeb päeva tunniplaani, klasse ja ühe tunni detailvaadet.
- Õpetaja saab simuleeritud salvestust alustada, pausile panna, jätkata ja lõpetada.
- Õpetaja saab muuta teemat, kokkuvõtet, kodutööd, tähtaega ja kohalolekut.
- Õpetaja saab tunnile lisada manuse ning avaldada kontrollitud õppesisu õpilasele.
- Õpilane näeb sama tunni kokkuvõtet, konspekti, võtmemõisteid, kodutööd ja puudutud tunni järeleaitavat osa.
- Õpilane saab teha mini-viktoriini; tulemus on ainult lokaalne enesekontroll.
- Õpetaja ja õpilase vaate vahetamine käib hamburgeri menüüst.
- Demo QR on rakenduses eraldi nupuna, et telefoni peal kiirelt sama URL avada.

## Käivitamine

Staatiline demo töötab ilma build-sammuta:

```bash
python -m http.server 4173 --bind 0.0.0.0
```

Seejärel ava brauseris:

```text
http://127.0.0.1:4173
```

Telefoniga samas võrgus demo avamiseks kasuta arvuti lokaalset võrgu-IP-d kujul `http://<IP>:4173` või ava rakenduse QR-vaade.

## Tehniline seis

Prototüüp on teadlikult dependency-free:

- `index.html`
- `styles.css`
- `app.js`

See hoiab hackathoni demo väikese ja väldib build-chain'i riski. Kui prototüüp liigub edasi päris tootearendusse, on mõistlik järgmine samm React/Vite või Next.js struktuur koos püsiva andmemudeli, auth'i ja päris transkriptsioonivooga.

## Spec-driven töö

Projekti suund ja nõuded elavad `docs/` kaustas:

- `docs/konstitutsioon.md`
- `docs/spec.md`
- `docs/prd.md`
- `docs/ehituslogi.md`

Enne järgmisi arendusi loe need läbi ja uuenda PRD staatust ainult ehitatud ning kontrollitud nõuete kohta.
