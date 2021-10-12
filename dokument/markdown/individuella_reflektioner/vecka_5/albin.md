# Individuell reflektion för vecka 5

## What do I want to learn or understand better?

Jag känner att jag ännu inte har greppat koden som Kresimir och de andra har skrivit.
Jag vill kunna veta översiktligt hur koden fungerar.
Jag tänker sätta mig ner med Kresimir nästa vecka och snygga till mappstrukturen, så jag tänkte att jag kunde passa på att lära mig hur koden fungerar.

Jag vill även fortfarande lära mig hur HTTP protokollet fungerar.
Våran lösning fungerar just nu, men jag känner att om vi kommer vilja göra lite mera de sista veckorna så kommer vi behöva ha kunskaper om hur HTTP fungerar för att till exempel skicka requests.
Jag tänker sätta mig ner nästa vecka och läsa på, när jag inte arbetar med mina deliverables.

## How can I help someone else, or the entire team, to learn something new?

Den här veckan har jag jag inte känt att jag har haft möjlighet att lära mina gruppkamrater om något.
Det jag har gjort är att se till att saker och ting har fungerat runt om kring, som till exempel arbeta med Overleaf, så de kan fokusera på att lära sig och arbeta.

## What is my contribution towards the team’s use of Scrum?

Jag har bara fokuserat på deliveries den här veckan.
Då jag inte har posterna som scrum master eller PO den här veckan, så har det inte legat på mig att göra det.

## What is my contribution towards the team’s deliveries?

Jag har även sammanställt data över befolkningsmängden i de olika åldersgrupperna från SCB.
Datan fanns inte tillgängligt direkt via SCB, utan krävde att man manuellt sammanställde datan så att den passade in på datan vi har på personer som har fått sin första Covid-19-vaccinspruta.
Jag har gjort detta manuellt för att vi ville ha datan så snabbt som möjligt.
Men detta är självklart inte hållbart i längden om det skulle vara så att man behövde hämta in statistik från fler olika källor.
Det vekrar dock som att CSV filen behöver omstruktureras för att det ska vara möjligt för de andra att injicera datan på ett enkelt sätt.
Då filen är är på runt 380 rader med data kommer jag antingen behöva sitta länga och copy-pasta, eller använda ett verktyg som AWK för att lösa uppgiften.

Jag har även suttit med att titta på kodstilsstandarder och CI pipelines med Github, och hittat verktyget Standard.js.
Tanken är att vi ska anamma en kodstilsstandard, och enforca den i projektet.
Antingen gör vi det manuellt vid kod reviews, eller automatiskt i en CI pipeline some triggas varje gång en pull request skapas.
Jag är osäker på om en CI pipeline hade skapat värde om vi införde det nu.
Därför tycker jag att vi endast inför kodstilen nu, och lägger till ett steg i review processen att man ska kontrollera kodstilen.

## Vad har jag gjort för kursadministrativt arbete?

Jag har lyckats lösa problematiken med synkroniseringen mellan Overleaf och Github.
Problemet ledde till att våra mötesanteckninar och reflektioner som vi skrev i LaTeX inte hamnade i git repots main-branch.
Det massor av timmar för att att hantera flera olika forks av git repositoriet som var ganska ur synk med varandra, och det förekom flera olika merge konflikter.
Det som tog tid var att säkerställa att inget arbete gick förlorat när jag löste problemet.
Men jag löste problemet, och omorganiserade repot samt satte upp lite regler för att förhindra att problemet uppkommer i framtiden.
