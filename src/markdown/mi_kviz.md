<!-- extends layouts/mdLayout.pug -->
 
<!-- block title -->
<!-- ++title("Backend helper") -->

<!-- block mdContent -->

# Mesterséges intelligencia kvíz megoldások

- [Mesterséges intelligencia kvíz megoldások](#mesterséges-intelligencia-kvíz-megoldások)
  - [2](#2)
    - [1. Hogyan NEM csökkenthető egy állapottér modell bonyolultsága?](#1-hogyan-nem-csökkenthető-egy-állapottér-modell-bonyolultsága)
    - [2. Mitől NEM függ egy reprezentációs gráf bonyolultsága?](#2-mitől-nem-függ-egy-reprezentációs-gráf-bonyolultsága)
    - [3. Melyik NEM része a probléma dekompozíciós modellnek?](#3-melyik-nem-része-a-probléma-dekompozíciós-modellnek)
    - [4. Milyen egy dekompozíciós operátor?](#4-milyen-egy-dekompozíciós-operátor)
    - [5. Az alábbiak közül melyek NEM elemei az állapottér modellnek? (2)](#5-az-alábbiak-közül-melyek-nem-elemei-az-állapottér-modellnek-2)
    - [6. Mely állítások igazak az állapotgráfra az alábbiak közül? (3)](#6-mely-állítások-igazak-az-állapotgráfra-az-alábbiak-közül-3)
    - [7. Az alábbi feladat-modellezések közül melyeknél NEM egyezett meg a problématér a reprezentációs gráf startcsúcsból kivezető útjaival? (2)](#7-az-alábbi-feladat-modellezések-közül-melyeknél-nem-egyezett-meg-a-problématér-a-reprezentációs-gráf-startcsúcsból-kivezető-útjaival-2)
    - [8. Melyik ok-okozati összefüggések igazak az alábbiak közül? (2)](#8-melyik-ok-okozati-összefüggések-igazak-az-alábbiak-közül-2)
    - [9. Hogyan csökkenthető egy állapottér modellben a műveletek kiszámítási bonyolultsága? (2)](#9-hogyan-csökkenthető-egy-állapottér-modellben-a-műveletek-kiszámítási-bonyolultsága-2)
    - [10. Mely fogalmak kapcsolhatók egymáshoz?](#10-mely-fogalmak-kapcsolhatók-egymáshoz)
    - [11. Melyek a feltételei a visszafelé haladó keresésnek?](#11-melyek-a-feltételei-a-visszafelé-haladó-keresésnek)
    - [12. Mi célt szolgál a probléma-redukciós operátor?](#12-mi-célt-szolgál-a-probléma-redukciós-operátor)
  - [3](#3)
    - [1. Az alábbi módszerek közül melyiknél változhat futás közben a globális munkaterület mérete?](#1-az-alábbi-módszerek-közül-melyiknél-változhat-futás-közben-a-globális-munkaterület-mérete)
    - [2. Melyik állítás NEM igaz a lokális keresésekre az alábbiak közül? (2)](#2-melyik-állítás-nem-igaz-a-lokális-keresésekre-az-alábbiak-közül-2)
    - [3. Tekinthető-e a hegymászó módszer a tabu keresés speciális változatának? (2)](#3-tekinthető-e-a-hegymászó-módszer-a-tabu-keresés-speciális-változatának-2)
    - [4. Hány helyen használ a szimulált hűtés algoritmusa véletlenített módszert?](#4-hány-helyen-használ-a-szimulált-hűtés-algoritmusa-véletlenített-módszert)
    - [5. Mely állítások igazak az alábbiak közül? (2)](#5-mely-állítások-igazak-az-alábbiak-közül-2)
    - [6. Melyek az alábbiak közül a tabu keresés hátrányai? (2)](#6-melyek-az-alábbiak-közül-a-tabu-keresés-hátrányai-2)
    - [7. Mely állítások NEM igazak a lokális keresésre az alábbiak közül? (2)](#7-mely-állítások-nem-igazak-a-lokális-keresésre-az-alábbiak-közül-2)
    - [8. Melyek az alábbiak közül a hegymászó módszer hátrányai? (3)](#8-melyek-az-alábbiak-közül-a-hegymászó-módszer-hátrányai-3)
    - [9. Hogyan hat a heurisztika információ tartalma egy kereső rendszer futási idejére? (3)](#9-hogyan-hat-a-heurisztika-információ-tartalma-egy-kereső-rendszer-futási-idejére-3)
    - [10. Mely algoritmusok születtek a hegymászó módszer zsákutcában való beragadásának elkerülésére? (3)](#10-mely-algoritmusok-születtek-a-hegymászó-módszer-zsákutcában-való-beragadásának-elkerülésére-3)
    - [11. Mi a lokális keresések általános vezérlési stratégiája?](#11-mi-a-lokális-keresések-általános-vezérlési-stratégiája)
    - [12. A tabu keresésnél használt kiértékelő függvény, amellyel össze tudjuk hasonlítani az aktuális csúcs gyerekeit, heurisztikus stratégiának számít?](#12-a-tabu-keresésnél-használt-kiértékelő-függvény-amellyel-össze-tudjuk-hasonlítani-az-aktuális-csúcs-gyerekeit-heurisztikus-stratégiának-számít)
  - [4](#4)
    - [1. Mely fogalmak kapcsolhatók egymáshoz a visszalépéses keresés esetén?](#1-mely-fogalmak-kapcsolhatók-egymáshoz-a-visszalépéses-keresés-esetén)
    - [2. Mit tartalmaz a visszalépéses keresések globális munkaterülete?](#2-mit-tartalmaz-a-visszalépéses-keresések-globális-munkaterülete)
    - [3. Melyek a visszalépéses keresés keresési szabályai?](#3-melyek-a-visszalépéses-keresés-keresési-szabályai)
    - [4. Mi a visszalépéses keresés általános vezérlési stratégiája?](#4-mi-a-visszalépéses-keresés-általános-vezérlési-stratégiája)
    - [5. Melyik állítás NEM igaz a visszalépéses keresés második változatára az alábbiak közül?](#5-melyik-állítás-nem-igaz-a-visszalépéses-keresés-második-változatára-az-alábbiak-közül)
    - [6. Melyek az alábbiak közül a visszalépéses keresés hátrányai? (2)](#6-melyek-az-alábbiak-közül-a-visszalépéses-keresés-hátrányai-2)
    - [7. Képzelje maga elé a 4-királynő probléma 2. állapottér modelljének állapotfáját. (Minden csúcsból négy él vezet ki.) Hány startcsúcsból kivezető utat vizsgál meg ebben a visszalépéses keresés második változata, ha a mélységi korlát 2?](#7-képzelje-maga-elé-a-4-királynő-probléma-2-állapottér-modelljének-állapotfáját-minden-csúcsból-négy-él-vezet-ki-hány-startcsúcsból-kivezető-utat-vizsgál-meg-ebben-a-visszalépéses-keresés-második-változata-ha-a-mélységi-korlát-2)
    - [8. Mely állítások igazak a visszalépéses keresés második változatára az alábbiak közül? (2)](#8-mely-állítások-igazak-a-visszalépéses-keresés-második-változatára-az-alábbiak-közül-2)
    - [9. Mely állítások NEM igazak a visszalépéses keresés második változatára az alábbiak közül? (2)](#9-mely-állítások-nem-igazak-a-visszalépéses-keresés-második-változatára-az-alábbiak-közül-2)
    - [10. Melyek az alábbiak közül a visszalépéses keresés előnyei? (3)](#10-melyek-az-alábbiak-közül-a-visszalépéses-keresés-előnyei-3)
    - [11. Mely állítások NEM igazak az alábbiak közül? (2)](#11-mely-állítások-nem-igazak-az-alábbiak-közül-2)
    - [12. Képzelje maga elé a Hanoi tornyai probléma állapotgráfját három korong esetén. A startcsúcsból kivezető utak közül hányat vizsgál meg a visszalépéses keresés második változata, ha a mélységi korlát 3?](#12-képzelje-maga-elé-a-hanoi-tornyai-probléma-állapotgráfját-három-korong-esetén-a-startcsúcsból-kivezető-utak-közül-hányat-vizsgál-meg-a-visszalépéses-keresés-második-változata-ha-a-mélységi-korlát-3)

## 2

### 1. Hogyan NEM csökkenthető egy állapottér modell bonyolultsága? 

* **Y** *Csökkentjük a célállapotok számát*
* X Szigorítjuk az állapotok invariáns tulajdonságát.
* X Szigorítjuk a műveletek értelmezési tartományát.
* X Növeljük az állapotok számát, de új műveleteket vezetünk be.

### 2. Mitől NEM függ egy reprezentációs gráf bonyolultsága? 

* X A köreinek gyakoriságától, és hosszuk sokféleségétől
* X A csúcsai ki-fokának számától.
* **Y** *A csúcsai be-fokának számától.*
* X A csúcsainak és éleinek számátó
 
### 3. Melyik NEM része a probléma dekompozíciós modellnek?

* X A kiinduló probléma leírása.
* X Dekompozíciós műveletek definiálása.
* X Az egyszerű problémák megadása.
* **Y** *Az állapotok definiálása.*

### 4. Milyen egy dekompozíciós operátor?

* X Egy problémát több problémának a halmazára képez le.
* X Egy probléma-sorozatot részsorozatokra bont fel.
* X Egy problémát megadott problémák egyikével helyettesít
* **Y** *Egy problémát több problémának a sorozatára képez le.*

### 5. Az alábbiak közül melyek NEM elemei az állapottér modellnek? (2) 

* **Y** *heurisztika*
* X kezdő állapot vagy annak leírása
* X műveletek
* **Y** *állapotgráf*

### 6. Mely állítások igazak az állapotgráfra az alábbiak közül? (3)

* **Y** *Startcsúcsa a kezdőállapotot szimbolizálja.*
* **Y** *Élei a műveletek végrehajtásait szimbolizálják.*
* **Y** *Csúcsai az állapotokat szimbolizálják.*
* X Célcsúcsai a modellezett feladat megoldásai.

### 7. Az alábbi feladat-modellezések közül melyeknél NEM egyezett meg a problématér a reprezentációs gráf startcsúcsból kivezető útjaival? (2)

* **Y** *n-királynő probléma*
* X Hanoi-tornyai probléma
* **Y** *integrál számítás*
* X 8-as kirakó játék

### 8. Melyik ok-okozati összefüggések igazak az alábbiak közül? (2)

* **Y** *Az állapotgráf csúcsainak száma kihat a megoldó algoritmus hatékonyságára.*
* X Az optimális megoldások száma kihat az állapotgráf bonyolultságára.
* X A megoldó algoritmus számítási bonyolultsága kihat a problématér bonyolultságára.
* **Y** *Az állapotgráfbeli körök hossza és száma kihat a problématér bonyolultságára.*

### 9. Hogyan csökkenthető egy állapottér modellben a műveletek kiszámítási bonyolultsága? (2)

* X Szigorítjuk a műveletek előfeltételét.
* **Y** *Szigorítjuk az állapotok invariáns állítását.*
* X Több heurisztikát építünk be a modellbe.
* **Y** *Az állapotokat extra információval egészítjük ki.*

### 10. Mely fogalmak kapcsolhatók egymáshoz?

* dekompozíciós operátor - hiperél
* állapot - csúcs
* művelet - irányított él
* dekompozíciós folyamat - hiperút

### 11. Melyek a feltételei a visszafelé haladó keresésnek?

* X A reprezentációs gráf startcsúcsából valamelyik célcsúcsba vezető úton kétirányú élek legyenek.
* **Y** *A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert valamelyik célállapot.*
* X A reprezentációs gráf startcsúcsából az összes célcsúcsba vezető úton kétirányú élek legyenek.
* X A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert az összes célállapot.

### 12. Mi célt szolgál a probléma-redukciós operátor?

* X Egy problémát egyszerűbb problémákra vezet vissza.
* X MEgadja, hogy egy állapot mely állapotokból érhető el egy állapottér modellben.
* X Egy állapottér modell egy műveletének inverzze.
* **Y** *Az állapottér modell egy műveletére megadja, hogy a művelet segítségével mely állapotokból lehet eljutni adott állapotok egyikébe.*


## 3

### 1. Az alábbi módszerek közül melyiknél változhat futás közben a globális munkaterület mérete?

* X Hegymászó módszernél. 
* X Véletlen újra indított hegymászó módszernél.     
* X Szimulált hűtésnél.  
* **Y** *Tabu keresésnél.*


### 2. Melyik állítás NEM igaz a lokális keresésekre az alábbiak közül? (2)

* X Memóriája az aktuális csúcs környezetének tárolására korlátozódik.  
* X Az aktuális csúcs környezetéből választja az új aktuális csúcsot.      
* **Y** *Csak egy lokálisan legjobb megoldást képes megtalálni.*
* **Y** *Ezek mohó stratégiájú algoritmusok.*

### 3. Tekinthető-e a hegymászó módszer a tabu keresés speciális változatának? (2)

* **Y** *Igen, amennyiben a hegymászó módszer tulajdonképpen egy egyelemű tabu halmazt használ, amely az előző aktuális csúcsot tárolja csak.*
* **Y** *Nem, amennyiben a hegymászó módszer nem tárolja el az eddig megtalált legjobb kiértékelő függvényértékű csúcsot.*
* X Nem, mert a tabu keresés véletlen módon választ új csúcsot.  
* X Nem, mert a tabu keresés felismeri a köröket, a hegymászó algoritmus nem.


### 4. Hány helyen használ a szimulált hűtés algoritmusa véletlenített módszert?

* X Három. A következő aktuális csúcs kiválasztásához, annak elfogadásához, és a hűtési ütemterv változtatásához.  
* X Egy. A következő aktuális csúcs kiválasztásához.      
* **Y** *Kettő. A következő csúcs kiválasztásához, illetve annak elfogadásához.*
*  X Nulla. Ez ugyan egy nem-determinisztikus módszer, de nem használ véletlenítést.


### 5. Mely állítások igazak az alábbiak közül? (2)

* X A heurisztika garantálja, hogy az algoritmus az optimális megoldást találja meg.  
* X A heurisztika garantálja, hogy az algoritmus hatékonysága jobb lesz.     
* **Y** *A heurisztikát a feladatot megoldó algoritmusba közvetlenül építjük be.*
* **Y** *A heurisztika egyszerre csökkentheti az algoritmus memória igényét és a futási idejét.*


### 6. Melyek az alábbiak közül a tabu keresés hátrányai? (2)

* **Y** *A tabu halmaz méretét csak kísérletezéssel lehet beállítani.*
* X Képes felismerni, és elkerülni a kisebb köröket.      
* X Kicsi a memória igénye  
* **Y** *Zsákutcába érve a keresés megáll.*


### 7. Mely állítások NEM igazak a lokális keresésre az alábbiak közül? (2)

* **Y** *Talál megoldást, ha van megoldás*
* X Erősen összefüggő gráfokban nem akadnak el.     
* X Kicsi memóriát használnak.  
* **Y** *Körmentes gráfokban nem akad el.*


### 8. Melyek az alábbiak közül a hegymászó módszer hátrányai? (3)

* **Y** *Körök mentén végtelen működésbe kezdhet.*
* X Kicsi a memória igénye.       
* **Y** *Zsákutcába érve a keresés megáll.*
* **Y** *Nem garantál optimális megoldást*


### 9. Hogyan hat a heurisztika információ tartalma egy kereső rendszer futási idejére? (3)

* **Y** *Minél kisebb az információ tartalma, annál gyorsabban tud új lépést választani.*
* **Y** *Nagyobb információ tartalom mellett egy lépés futási ideje nő.*
* **Y** *Nagyobb információ tartalom mellett a lépések száma csökkenhet.*
* X Minél nagyobb az információ tartalma, annál jobb lesz a hatékonysága. 


### 10. Mely algoritmusok születtek a hegymászó módszer zsákutcában való beragadásának elkerülésére? (3)

* **Y** *Lokális nyaláb keresés (local beam search)*
* **Y** *Szimulált hűtés algoritmusa*
* X Tabu keresés  
* **Y** *Véletlen újraindított keresés (random restart search)*


### 11. Mi a lokális keresések általános vezérlési stratégiája?

* X Az aktuális csúcs(ok) környezetéből válasszuk a legjobb csúcsot (csúcsokat)!
* X Az aktuális csúcs szomszédjai közül válasszuk a legjobb csúcsot!    
* X Az aktuális csúcs környezetéből válasszuk a legjobb csúcsot!  
* **Y** *Az aktuális csúcs(ok) környezetéből válasszunk egy (vagy több) viszonylag jó csúcsot!*

### 12. A tabu keresésnél használt kiértékelő függvény, amellyel össze tudjuk hasonlítani az aktuális csúcs gyerekeit, heurisztikus stratégiának számít?

* X Nem, mert ilyen függvényt minden tabu keresés használ 
* X Nem, mert ezt csak az olyan feladatoknál használhatjuk, amelyek állapottér modell-lel rendelkeznek. Ez tehát egy modell-függő stratégia.    
* X A heurisztikának nincs köze a vezérlési stratégiához.
* **Y** *Igen, ez a függvény a konkrét feladatból származik.*

## 4

### 1. Mely fogalmak kapcsolhatók egymáshoz a visszalépéses keresés esetén?

* globális munkaterület - irányított út
* keresési szabály - visszalépés
* másodlagos vezérlési stratégia - sorrendi szabály  
* második változat - mélységi korlátfigyeés

### 2. Mit tartalmaz a visszalépéses keresések globális munkaterülete?

* X Ez  eddig bejárt részgráfot és külön annak a startcsúcsból kiinduló egyik útját annak csúcsaiból kivezető még nem vizsgált élekkel együtt.
* **Y** *A startcsúcsból kiinduló egyik utat és annak csúcsaiból kivezető még nem vizsgált éleket.*
* X A reprezentációs gráfot és külön annak a startcsúcsból kiinduló egyik útját.
* X Ez eddig bejárt startcsúcsból kiinduló utakat azok csúcsaiból kivezető még nem vizsgált élekkel együtt. 


### 3. Melyek a visszalépéses keresés keresési szabályai?

* X A nyilvántartott út utolsó csúcsának kiterjesztése, illetve az utolsó él elvétele.
* X A nyilvántartott út kiterjesztése, illetve a visszalépés.
* **Y** *A nyilvántartott út végcsúcsából kivezető egyik él hozzávétele az úthoz, illetve az út utolsó élének elvétele.*
* X A nyilvántartott úthoz egy újabb kivezető él hozzávétele, illetve az utolsó él elvétele.

### 4. Mi a visszalépéses keresés általános vezérlési stratégiája?

* X A továbblépést meghatározó sorrendi és a vágó szabályok.
* X Zsákutcába jutva mindig a visszalépés szabályát kell választani.
* X A visszalépés szabálya mindig elsőbbséget élvez a többi keresési szabállyal szemben. 
* **Y** *A visszalépés szabályát csak a legvégső esetben válasszuk.*

### 5. Melyik állítás NEM igaz a visszalépéses keresés második változatára az alábbiak közül?

* X A körfigyelés elhagyása végtelen fák esetén mindenképpen gyorsítja a megoldás megtalálását. 
* X A körfigyelés elhagyása növeli a memória igényét. 
* X A körfigyelés elhagyása kicsi mélységi korlát mellett gyorsíthatja a futási időt.
* **Y** *A körfigyelés elhagyása mindenképpen gyorsítja a megoldás megtalálását.*

### 6. Melyek az alábbiak közül a visszalépéses keresés hátrányai? (2)

* X Nehéz az implementációja. 
* X Nagy a memória igénye. 
* **Y** *Kezdetben hozott rossz döntést csak sok visszalépés árán korrigálja.*
* **Y** *Ugyanazt a részgráfot többször is bejárja.*

### 7. Képzelje maga elé a 4-királynő probléma 2. állapottér modelljének állapotfáját. (Minden csúcsból négy él vezet ki.) Hány startcsúcsból kivezető utat vizsgál meg ebben a visszalépéses keresés második változata, ha a mélységi korlát 2?

* X 8
* X 20
* X 16
* **Y** *21*

### 8. Mely állítások igazak a visszalépéses keresés második változatára az alábbiak közül? (2)


* X Minden 𝛿-gráfban talál megoldást, ha van. 
* **Y** *Minden 𝛿-gráfban terminál.*
* X Minden 𝛿-gráfban megmutatja, hogy van-e megoldás.
* **Y** *Minden 𝛿-gráfban talál megoldást, ha annak hossza rövidebb, mint a mélységi korlát.*

### 9. Mely állítások NEM igazak a visszalépéses keresés második változatára az alábbiak közül? (2)

* X A mélységi korlát figyelés önmagában is elég ahhoz, hogy garantáltan termináljon.
* **Y** *Képes megtalálni a legrövidebb megoldást, ha van.*
* X Ha van megoldás a mélységi korláton belül, akkor talál megoldást. 
* **Y** *A körfigyelés önmagában is elég ahhoz, hogy garantáltan termináljon.*

### 10. Melyek az alábbiak közül a visszalépéses keresés előnyei? (3)

* **Y** *Ha van (mélységi korálton belül) megoldása, akkor talál egyet.*
* **Y** *Mindig terminál.*
* **Y** *Kicsi a memória igénye.*
* X Véges 𝛿-gráfban optimális megoldást talál. 


### 11. Mely állítások NEM igazak az alábbiak közül? (2)

* **Y** *A sorrendi szabály egy heurisztikus vezérlési stratégia.*
* X A sorrendi és a vágó szabály egyaránt épülhet heurisztikára. 
* X A mélységi korlát felfogható egy speciális vágó szabálynak. 
* **Y** *Vágó szabály nem alkalmazható sorrendi szabályokkal együtt.*

 
### 12. Képzelje maga elé a Hanoi tornyai probléma állapotgráfját három korong esetén. A startcsúcsból kivezető utak közül hányat vizsgál meg a visszalépéses keresés második változata, ha a mélységi korlát 3?

* X 14
* X 9
* X 8
* **Y** *15*

