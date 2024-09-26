import {
  ArticleSection,
  BulletPoint,
  ContraindicationItem,
  SubList,
} from "@/components/ArticleSection";

const Anesthesia: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Główna sekcja */}
      <h1 className="text-4xl font-bolder text-gray-800 text-center mb-12">
        Znieczulenia
      </h1>

      {/* Kafelki */}
      <div className="flex-col md:flex-row flex justify-center items-center gap-3 md:gap-12 mb-5 md:mb-12">
        {/* Kafelka - Znieczulenia u dorosłych */}
        <div className="w-full md:w-1/2 max-w-sm shadow-lg rounded-lg bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Znieczulenie u dorosłych
          </h3>
          <img
            src="https://dpmed.pl/wp-content/uploads/2020/07/AdobeStock_132867660-1.jpeg"
            alt="Znieczulenie u dorosłych"
            className="w-full h-56 object-cover mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Znieczulenie stosowane podczas zabiegów chirurgicznych u dorosłych,
            dobierane w zależności od rodzaju operacji i stanu zdrowia pacjenta.
          </p>
        </div>

        {/* Kafelka - Znieczulenia u dzieci */}
        <div className="w-full md:w-1/2 max-w-sm shadow-lg rounded-lg bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Znieczulenie u dzieci
          </h3>
          <img
            src="https://polki.pl/foto/16_9_LARGE/jakie-znieczulenie-stosuje-sie-u-dzieci-1623848.jpg"
            alt="Znieczulenie u dzieci"
            className="w-full h-56 object-cover mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Znieczulenie u dzieci stosuje się, aby zminimalizować ból i stres
            związany z zabiegami medycznymi, zapewniając maksymalne
            bezpieczeństwo.
          </p>
        </div>
      </div>

      <nav className="bg-white shadow-md rounded-lg p-4 mb-8 w-full max-w-4xl">
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <ContraindicationItem>
            <a href="#dorosli" className="hover:text-blue-500">
              Znieczulanie dorosłych
            </a>
            <SubList>
              <BulletPoint>
                <a href="#dorosli1" className="hover:text-blue-500">
                  Znieczulanie ogólne - co to jest?
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli2" className="hover:text-blue-500">
                  Dadatkowe znieczulanie miejscowe
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli3" className="hover:text-blue-500">
                  Kto wykonuje znieczulenia?
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli4" className="hover:text-blue-500">
                  Rozmowa przedoperacyjna a znieczulanie
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli5" className="hover:text-blue-500">
                  Przeciwwskazania bezwzględne ogólnomedyczne u dorosłych do
                  znieczulenia w trybie ambulatoryjnym
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli6" className="hover:text-blue-500">
                  Badania dodatkowe przed operacją – czy zawsze są niezbędne?
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli7" className="hover:text-blue-500">
                  Zgoda na znieczulanie
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli8" className="hover:text-blue-500">
                  Ciąża a znieczulanie
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli9" className="hover:text-blue-500">
                  Świadek Jehowy
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli10" className="hover:text-blue-500">
                  Przygotowanie do zabiegu
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli11" className="hover:text-blue-500">
                  Przygotowanie pacjenta do znieczulenia
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli12" className="hover:text-blue-500">
                  Samopoczucie po zabiegu
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dorosli13" className="hover:text-blue-500">
                  Możliwe powikłania po znieczuleniu ogólnym
                </a>
              </BulletPoint>
            </SubList>
          </ContraindicationItem>

          <ContraindicationItem>
            <a href="#dzieci" className="hover:text-blue-500">
              Znieczulanie dzieci
            </a>
            <SubList>
              <BulletPoint>
                <a href="#dzieci1" className="hover:text-blue-500">
                  Przed znieczuleniem
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dzieci2" className="hover:text-blue-500">
                  Znieczulenie
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="#dzieci3" className="hover:text-blue-500">
                  Możliwe powikłania
                </a>
              </BulletPoint>
              <BulletPoint>
                <a href="dzieci4" className="hover:text-blue-500">
                  Zabiegi ambulatoryjne u dzieci – przeciwwskazania
                </a>
              </BulletPoint>
            </SubList>
          </ContraindicationItem>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 id="dorosli" className="text-4xl font-bold mb-6 text-gray-900">
          Znieczulenie dorosłych
        </h2>

        <ArticleSection title="Szanowni Państwo!">
          <p>
            Dla zainteresowanych znieczuleniem ogólnym przygotowałem szczegółowe
            informacje, które powinny wyjaśnić najczęściej poruszane w trakcie
            konsultacji anestezjologicznych problemy. Na wszelkie inne pytania
            dotyczące znieczulenia chętnie odpowiem przed wykonaniem
            znieczulenia do zabiegu lub w trakcie niezbędnych konsultacji
            kwalifikujących do zabiegu osoby z problemami zdrowotnymi.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli1" title="Znieczulenie ogólne – co to jest?">
          <p>
            Znieczulenie ogólne, zwane anestezją lub nieprawidłowo (choć
            popularnie) narkozą, jest niezbędnym elementem wykonywanych zabiegów
            i operacji. Głównym jego celem jest oszczędzenie zarówno dzieciom,
            jak i dorosłym wszelkich dolegliwości i stresu oraz stworzenie jak
            najlepszych warunków pracy lekarzom wykonującym zabieg.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli2" title="Dodatkowe znieczulenie miejscowe">
          <p>
            W wielu przypadkach znieczulenie ogólne jest łączone ze
            znieczuleniem miejscowym. Kombinacja taka zapewnia bardzo dobre
            działanie przeciwbólowe w czasie i po zabiegu, przyczynia się do
            zmniejszenia ilości podawanych w czasie zabiegu leków oraz zapewnia
            długi okres bezbolesności po zakończonym zabiegu operacyjnym.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli3" title="Kto wykonuje znieczulenie?">
          <p>
            Za przeprowadzenie znieczulenia, jak również utrzymanie podczas jego
            trwania podstawowych funkcji życiowych pacjenta (szczególnie
            oddychania i pracy serca) odpowiedzialny jest zgodnie z prawem i
            obowiązującymi standardami lekarz specjalista-anestezjolog, który
            posiada specjalistyczną wiedzę z zakresu anestezji (znieczulania) i
            intensywnej terapii medycznej, oraz pracuje w warunkach określonych
            w wytycznych dotyczących wyposażenia anestezjologicznego.
          </p>
        </ArticleSection>

        <ArticleSection
          id="dorosli4"
          title="Rozmowa przedoperacyjna a znieczulenie"
        >
          <p>
            U osób chorych, z obecnością schorzenia istotnie upośledzającego
            sprawność organizmu, rozmowę przedoperacyjną i kwalifikację do
            zabiegu anestezjolog przeprowadza w ramach konsultacji przed
            zabiegiem. U osób zdrowych lub z obecnością schorzenia bezobjawowego
            lub dobrze kontrolowanego stosowanymi lekami, rozmowa
            przedoperacyjna odbędzie się w dniu operacji. Najczęściej nie będą
            wymagane wtedy dodatkowe badania. Lekarz-anestezjolog przeprowadzi z
            Tobą wywiad, podczas którego zorientuje się w stanie Twojej kondycji
            zdrowotnej, dobierze rodzaj i objaśni przebieg czekającego Cię
            znieczulenia. W czasie tej rozmowy będziesz mógł zadać pytania i
            uzyskać wyjaśnienia dotyczące wszystkich interesujących Cię
            problemów dotyczących znieczulenia. Pamiętaj o zabraniu na rozmowę
            listy stosowanych leków i wyników badań zaleconych przy zgłoszeniu
            się do zabiegu lub operacji.
          </p>
        </ArticleSection>

        <ArticleSection
          id="dorosli5"
          title="Przeciwwskazania bezwzględne ogólnomedyczne u dorosłych do znieczulenia w trybie ambulatoryjnym"
        >
          <ul className="list-none pl-4 space-y-1">
            <BulletPoint>
              choroby układu krążenia w fazie niewyrównania (objawowe)
            </BulletPoint>
            <BulletPoint>niewydolność nere</BulletPoint>
            <BulletPoint>
              ostra lub przewlekła niewydolność układu oddechowego
            </BulletPoint>
            <BulletPoint>infekcje dróg oddechowych</BulletPoint>
            <BulletPoint>nieuregulowana cukrzyca</BulletPoint>
            <BulletPoint>
              wszelkie nieprawidłowości w budowie anatomicznej mogące utrudniać
              intubację i wentylację, w tym szczękościsk.
            </BulletPoint>
          </ul>
        </ArticleSection>

        <ArticleSection
          id="dorosli6"
          title="Badania dodatkowe przed operacją – czy zawsze są niezbędne?"
        >
          <p>
            W ostatnim czasie sporo zmieniło się w wymogach dotyczących
            wykonywania badań dodatkowych (i to nie z przyczyn ekonomicznych,
            tylko powrotu do racjonalnego myślenia). Wielu ludziom bałamutnie
            wydaje się (określenie to dotyczy także lekarzy), że im więcej
            zostanie wykonanych badań dodatkowych i konsultacji
            specjalistycznych, tym chory będzie bardziej bezpieczny w czasie
            operacji. Otóż bezpieczeństwo pacjenta zależy od:
          </p>

          <ul className="list-none pl-4 space-y-1">
            <BulletPoint>stanu fizycznego,</BulletPoint>
            <BulletPoint>
              charakteru schorzenia chirurgicznego i trybu operacji,
            </BulletPoint>
            <BulletPoint>
              choroby podstawowej i właściwej jej kontroli w okresie
              przedoperacyjnym (np. przyjmowanie leków z powodu nadciśnienia
              tętniczego),
            </BulletPoint>
            <BulletPoint>
              kompetencji lekarza chirurga, lekarza anestezjologa, zespołu
              operacyjnego i pooperacyjnego,
            </BulletPoint>
            <BulletPoint>występujących w czasie operacji powikłań,</BulletPoint>
            <BulletPoint>
              jakości sprzętu służącego wykonaniu znieczulenia i operacji,
            </BulletPoint>
            <BulletPoint>
              posiadanych leków oraz środków medycznych,
            </BulletPoint>
            <BulletPoint>
              informacji wynikających z badań dodatkowych i konsultacji
              specjalistycznych.
            </BulletPoint>
          </ul>

          <p className="font-semibold">Niemniej:</p>

          <ul className="list-none pl-4 space-y-1">
            <BulletPoint>
              Pacjenci, których stan zdrowia oceniany jest jako I i II stopień
              wg ASA – kwalifikowani do drobnych zabiegów w znieczuleniu
              ogólnym, których czas nie przekracza 60 minut – nie wymagają
              wykonania badań dodatkowych.
            </BulletPoint>
          </ul>

          <p className="font-semibold">
            Przy większych zabiegach i obciążonych pacjentach:
          </p>

          <ul className="list-none pl-4 space-y-1">
            <BulletPoint>
              Wykonujemy badania w zależności od badania i zgłaszanych chorób
              lub dolegliwości.
            </BulletPoint>
            <BulletPoint>
              Kobiety &lt; 40 roku życia, których stan fizyczny wynosi ASA I i
              II, kwalifikowane do zabiegu w znieczuleniu ogólnym lub
              przewodowym, którego czas przekracza 60 minut – powinny mieć
              wykonane podstawowe badanie morfologiczne (bez rozmazu krwinek
              białych).
            </BulletPoint>
            <BulletPoint>
              Każdy pacjent kwalifikowany do dużej operacji powinien mieć
              oznaczoną grupę krwi.
            </BulletPoint>
            <BulletPoint>
              Kobiety w wieku rozrodczym powinny mieć wykonany test ciążowy
              (próbka moczu).
            </BulletPoint>
            <BulletPoint>
              Badanie EKG należy wykonać mężczyznom, którzy przekroczyli 39 rok
              życia oraz kobietom, które przekroczyły 49 rok życia. Badanie EKG
              uważa się za aktualne, jeżeli od ostatniego wykonania nie upłynęły
              więcej niż 2 miesiące, a pacjent nie zgłaszał w tym czasie żadnych
              dolegliwości (wg W.Machały).
            </BulletPoint>
          </ul>
        </ArticleSection>

        <ArticleSection id="dorosli7" title="Zgoda na znieczulenie">
          <p>
            Każde znieczulenie wymaga wyrażenia osobnej, świadomej zgody przez
            pacjenta jeszcze przed zabiegiem. Podpisanie zgody na wykonanie
            operacji lub zabiegu nie jest tożsame z wyrażeniem zgody na
            wykonanie znieczulenia. Odbywa się to przez podpisanie stosownego
            dokumentu. W przypadku dzieci poniżej 18. roku życia zgodę taką
            podpisuje jeden z rodziców lub opiekunów prawnych. Pacjent pomiędzy
            13. a 18. rokiem życia również wyraża ustnie swoją wolę na wykonanie
            znieczulenia do zabiegu. Przed wyrażeniem zgody masz prawo do
            informacji o rodzaju proponowanego znieczulenia, wykonywanych
            czynnościach, możliwych powikłaniach, ryzyku w odniesieniu do
            Twojego stanu zdrowia, o przebiegu i postępowaniu w okresie
            pooperacyjnym. Zawsze możesz liczyć na uzyskanie informacji w
            interesującym Cię zakresie.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli8" title="Ciąża a znieczulenie">
          <p>
            Zabiegi planowe w trybie ambulatoryjnym staramy się znieczulać po I
            trymestrze ciąży (po 3 miesiącach od zapłodnienia). Jest to związane
            najczęściej z nieznanym wpływem stosowanych leków
            anestezjologicznych na rozwijający się płód. Po tym okresie uważa
            się, że zakończyło się kształtowanie narządów (organogeneza) i wpływ
            stosowanych leków na organizm dziecka jest minimalny i odwracalny.
            Oczywiście istnieją od tej reguły wyjątki, w postaci znieczuleń do
            stanów będących zagrożeniem zdrowia lub życia ciężarnej. Kobiety w
            wieku rozrodczym będą zawsze pytane przed zabiegiem o możliwość
            ciąży. W przypadku wątpliwości lepiej wykonać prosty i dostępny w
            aptekach test ciążowy.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli9" title="Świadek Jehowy">
          <p>
            Zabieg lub operacja jest najczęściej czynnością inwazyjną, z możliwą
            nagłą utratą większej ilości krwi. Dlatego może się zdarzyć
            konieczność transfuzji krwi lub preparatów krwiopochodnych. Jeżeli
            jesteś Świadkiem Jehowy lub nie wyrażasz zgody na takie
            postępowanie, będziesz proszony o potwierdzenie tego faktu w
            dokumentacji.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli10" title="Przygotowanie do zabiegu">
          <p>
            W dniu, w którym ma się odbyć znieczulenie, zastosuj się do
            poniższych zaleceń: Przez 6 godzin przed zabiegiem niczego nie jedz.
            W przypadku małych dzieci okres może być krótszy – 4 godziny. Nie
            pij płynów 4 godziny przed zabiegiem. Wyjątkowo (małe dzieci,
            upały!) do dwóch godzin przed zabiegiem możesz pić w niewielkich
            ilościach czyste płyny, tj. wodę, osłodzoną lub gorzką herbatę lub
            klarowne soki. Nie są polecane soki z owoców cytrusowych! Nie wolno
            pić żadnych napojów gazowanych i napojów mlecznych. Obecność płynów
            i pokarmów w żołądku może okazać się niebezpieczna dla zdrowia i
            życia, gdyż po znieczuleniu mogłyby się one przedostać do płuc. W
            żadnym wypadku nie wolno zataić przed zespołem anestezjologicznym
            faktu spożycia pokarmów lub płynów w zakazanym okresie, gdyż w ten
            sposób narażamy zdrowie, a być może i życie znieczulanego pacjenta!
          </p>
          <p>
            Ponadto przed zabiegiem nie pal papierosów. Ty w trakcie
            znieczulenia nic nie czujesz i daj nam też ten komfort. A może to
            będzie powód do rzucenia palenia? Przed większością zabiegów w
            znieczuleniu ogólnym będziesz proszony o wyjęcie protez zębowych,
            zdjęcie okularów, soczewek kontaktowych czy aparatu słuchowego.
            Postaraj się nie stosować makijażu, zwłaszcza szminki do ust.
            Zdejmij zegarek, spinki do włosów, o ile to możliwe, również
            biżuterię. Ubierz się w luźne, nieuciskające na klatkę piersiową i
            brzuch ubranie lub przed zabiegiem rozluźnij biustonosz i pasek od
            spodni. Przed samym znieczuleniem prosimy o całkowite oddanie moczu.
            W innym wypadku, po wybudzeniu, może wszystkich zaskoczyć obecność
            mokrej niespodzianki. PORZĄDNIE SIĘ UMYJ PRZED ZABIEGIEM! Będzie to
            Twój dowód szacunku dla nas.
          </p>
          <p>
            Udając się na zabieg w znieczuleniu ogólnym zabierz ze sobą dowód
            tożsamości. W przypadku dzieci wymagana jest obecność jednego z
            rodziców lub opiekunów prawnych (nie wystarczy ukochana babcia,
            starsze rodzeństwo czy najlepsza sąsiadka).
          </p>
        </ArticleSection>

        <ArticleSection
          id="dorosli11"
          title="Przygotowanie pacjenta do znieczulenia"
        >
          <p>
            Przed dłuższym znieczuleniem, na ok. pół godziny przed zabiegiem,
            podajemy pacjentowi najczęściej tabletkę (czasem zastrzyk, syrop do
            wypicia lub mikrowlewkę doodbytniczą u małych dzieci) o działaniu
            nasennym i uspokajającym. Pacjenci nazywają go „Głupim Jasiem”, ale
            my nie lubimy tej nazwy, zwłaszcza anestezjolodzy o imieniu Jan.
            Działanie takie nazywane jest premedykacją. W wyniku premedykacji
            uzyskujemy uspokojenie i niepamięć zdarzeń u pacjenta, co nazywamy
            sedacją. W niektórych wypadkach sedacja połączona jest z podaniem
            leku przeciwbólowego (sedoanalgezja) lub ze znieczuleniem
            miejscowym. Takie postępowanie (monitorowana opieka
            anestezjologiczna) jest czasem wystarczającym sposobem
            przeprowadzenia zabiegu u dorosłych. Przy krótkich znieczuleniach
            ambulatoryjnych u osób dorosłych najczęściej nie stosuje się
            premedykacji w związku ze znacznym wydłużeniem czasu powrotu
            sprawności psycho-fizycznej po zabiegu. Po przybyciu na salę
            operacyjną, do żyły (najczęściej na ręce) pielęgniarka wkłuje się
            miękką plastikową igłą (Venflon), do której podłączy tzw.
            „kroplówkę” i przez którą będą podawane leki potrzebne przy
            znieczuleniu. Czasem, gdy wyraźnie widać żyłę, u małych dzieci przed
            tą czynnością umieszczana jest na ręce folia z kremem znieczulającym
            miejsce wkłucia. Następnie pacjent jest monitorowany, czyli
            podłączany przed rozpoczęciem zabiegu do urządzenia kontrolującego
            czynność serca, ciśnienie tętnicze, ilość oddechów, wysycenie krwi
            tlenem i puls w tętnicy obwodowej, stężenie tlenu, dwutlenku węgla i
            gazów anestezjologicznych. O wszystkich tych czynnościach zostaniesz
            poinformowany z wyprzedzeniem. W wyjątkowych przypadkach z przyczyn
            wynikających z przebiegu zabiegu, lub dla poprawy komfortu
            znieczulenia, anestezjolog może w trakcie znieczulenia regionalnego
            dodatkowo wykonać znieczulenie ogólne.
          </p>
        </ArticleSection>

        <ArticleSection id="dorosli12" title="Samopoczucie po zabiegu">
          <p>
            Najczęściej jest bardzo dobre, ale czasem pacjent, szczególnie
            dziecko, może czuć się gorzej przez pewien czas. Ważna w tym okresie
            jest współpraca rodziców z zespołem anestezjologicznym, mająca na
            celu stworzenie poczucia bezpieczeństwa. Objawy typowe po
            znieczuleniu to: swędzenie nosa i oczu, drapanie w gardle, nadmierne
            pobudzenie. U osób z nadwrażliwością możliwe jest wystąpienie
            przejściowego skurczu oskrzeli. Niewielka część osób odczuwa zawroty
            głowy, przejściowe zaburzenia widzenia, mdłości lub może wymiotować.
            Możliwe są niewielkie dolegliwości bólowe w miejscu zabiegu.
            Wszystkie objawy są przejściowe i ustępują samoistnie lub po lekach
            najczęściej do godziny po zakończeniu znieczulenia. Po tym czasie,
            koniecznie w towarzystwie innej osoby można udać się do domu.
          </p>
          <p>
            Najczęściej jest bardzo dobre, ale czasem pacjent, szczególnie
            dziecko, może czuć się gorzej przez pewien czas. Ważna w tym okresie
            jest współpraca rodziców z zespołem anestezjologicznym, mająca na
            celu stworzenie poczucia bezpieczeństwa. Objawy typowe po
            znieczuleniu to: swędzenie nosa i oczu, drapanie w gardle, nadmierne
            pobudzenie. U osób z nadwrażliwością możliwe jest wystąpienie
            przejściowego skurczu oskrzeli. Niewielka część osób odczuwa zawroty
            głowy, przejściowe zaburzenia widzenia, mdłości lub może wymiotować.
            Możliwe są niewielkie dolegliwości bólowe w miejscu zabiegu.
            Wszystkie objawy są przejściowe i ustępują samoistnie lub po lekach
            najczęściej do godziny po zakończeniu znieczulenia. Po tym czasie,
            koniecznie w towarzystwie innej osoby można udać się do domu.
          </p>
        </ArticleSection>

        <ArticleSection
          id="dorosli13"
          title="Możliwe powikłania po znieczuleniu ogólnym"
        >
          <p>
            Nie można zapominać, że znieczulenie jest zabiegiem medycznym i
            zawsze istnieje ryzyko różnych powikłań. Jednak zabiegi wykonywane w
            znieczuleniu są znacznie mniej obciążające dla zdrowia i psychiki
            pacjenta z powodu braku impulsacji bólowej, niż zabiegi bez
            znieczulenia. Obecnie przyjmuje się, że ze względu na stosowany
            sprzęt i leki, obecność wykwalifikowanego personelu, zabezpieczenia
            w środki ratujące życie okres znieczulenia jest bezpieczniejszy niż
            czas wykonywania normalnych czynności życiowych, np. poruszania się
            po ulicy. Jednak najlepsze zabezpieczenia nie wyeliminują w 100%
            ryzyka związanego z obecnością niewykrytych schorzeń, ukrytych wad
            metabolicznych, patologicznych rekcji na stosowane środki czy
            wreszcie na możliwe powikłania wynikające z samego zabiegu.
            Zagrażające życiu powikłania występują rzadziej niż 1 na
            kilkadziesiąt tysięcy znieczuleń. Nieco częściej występują niegroźne
            powikłania związane z techniką zabiegu, z których najczęstsze to
            krwiaki i sińce w miejscu wkłucia i okolicy operowanej, uszkodzenie
            zębów, zwłaszcza ruszających się (np. mleczne u dzieci), przejściowy
            skurcz oskrzeli przy manipulacji w jamie ustnej, rzadko kiedy
            dochodzi do przejściowej dysfunkcji krtani (chrypka, trudności w
            połykaniu, ból) związanej z intubacją. Mam nadzieję, że te
            informacje spowodują u Państwa wzrost zaufania do znieczulenia
            ogólnego, które po spełnieniu powyższych kryteriów jest procedurą
            bezpieczną, umożliwiającą wykonanie niektórych zabiegów, chroniąca
            świadomość zwłaszcza dziecka przed negatywnymi konsekwencjami bólu i
            strachu, i dla wielu osób jest często jedyną akceptowalną formą
            wykonania niezbędnych czynności medycznych, dzięki którym jesteśmy
            długo zdrowi, piękni i szczęśliwi. Jeżeli ktoś potrzebuje mojej
            pomocy w realizacji swoich marzeń, do których potrzebny jest
            anestezjolog, to chyba się zobaczymy.
          </p>
        </ArticleSection>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 id="dzieci" className="text-4xl font-bold mb-6 text-gray-900">
          Znieczulenie dzieci
        </h2>

        <ArticleSection id="dzieci1" title="Przed znieczuleniem">
          <p>
            Znieczulenie dziecka nie jest tożsame ze znieczulaniem miniatury
            dorosłego. W Polsce anestezjologia pediatryczna jest częścią ogólnej
            anestezjologii i ze względu na liczne odrębności anatomiczne,
            fizjologiczne i psychiczne tylko część anestezjologów chce
            znieczulać dzieci. Ale również są tacy, którzy lubią znieczulać
            dzieci i doceniają ich naturalność w reakcjach z innymi ludźmi, a w
            przypadku dzieci z wrodzonymi czy nabytymi schorzeniami,
            wymagającymi często leczenia, uznają za konieczne zaoszczędzenie im
            wszelkich cierpień.
          </p>
          <p>
            Znieczulenie ogólne u dziecka jest trudną decyzją dla Rodziców.
            Jednak najczęściej świetnie rozumieją, że przy koniecznym dla
            zdrowia zabiegu u dzieci niepełnosprawnych lub niewspółpracujących,
            ochrona psychiki przed skutkami stresu i zniesienie bólu w warunkach
            gwarantujących jak największe bezpieczeństwo są nieocenionym
            dobrodziejstwem współczesnej nauki. Często jest to jedyny sposób na
            wykonanie koniecznego zabiegu!
          </p>
          <p>
            Przy zabiegach wymagających znieczulenia dziecka, z wielu powodów
            wskazany jest kontakt Rodziców z anestezjologiem. W wypadku dzieci
            zdrowych często wystarczy telefoniczny, a w przypadku wątpliwości,
            czy przy obecności istotnych chorób – osobisty z dzieckiem. W dniu
            znieczulenia dla bezpieczeństwa Twojego dziecka zastosuj się do
            poniższych zaleceń.
          </p>
          <p>
            Przez 6 godzin przed zabiegiem niczego nie podawaj do jedzenia i
            picia. W przypadku małych dzieci do 4 roku życia okres może być
            krótszy – 4 godziny. U tak małych dzieci przed znieczuleniem
            ambulatoryjnym dopuszczalne jest wypicie niewielkiej ilości czystego
            płynu na 2 godziny przed zabiegiem.
          </p>
          <p>
            Ubierz dziecko w luźne ubranko z dobrym dostępem do ramion i klatki
            piersiowej, godząc się na możliwość jego zabrudzenia w czasie
            zabiegu. Jeżeli w trakcie konsultacji otrzymaliście lek do
            premedykacji, na 20-30 minut przed przybyciem do Kliniki podajcie go
            dziecku. Wskazane jest oddanie moczu przed wyjazdem, a u małych
            dzieci założenie czystego pampersa.
          </p>
          <p>
            W przypadku dzieci wymagana jest obecność przy nim jednego z
            rodziców lub opiekunów prawnych. Dobrze by było, gdyby dziecko na
            zabieg pojechało ze swoją ulubioną zabawką, np. misiem. W przypadku
            dzieci bardzo ważne jest ich właściwe przygotowanie psychiczne do
            badania. Uwaga ta dotyczy szczególnie rodziców lub opiekunów tych
            dzieci, które ze względu na swój wiek lub dużą dojrzałość psychiczną
            rokują możliwość podjęcia współpracy z osobami wykonującymi
            znieczulenie. Prosimy o nieoszukiwanie dzieci przy wyjaśnianiu celu
            wizyty w Klinice.
          </p>
        </ArticleSection>

        <ArticleSection id="dzieci2" title="Znieczulanie">
          <p>
            Dziecko w obcych dla siebie warunkach chce być z osobami bliskimi.
            Świetnie to rozumiemy i dlatego dopóki można, przebywa blisko
            Rodziców. Udaje się nam czasami pozyskać zaufanie dziecka, ale
            często, pomimo premedykacji i Państwa pomocy, początek naszego
            spotkania bywa głośny i energiczny.
          </p>
          <p>
            Na szczęście, w większości przypadków podana przez Rodzica i
            połknięta często z oporami tabletka lub wypity syrop robią z dziecka
            miłego, zadowolonego, choć sennego osobnika. Nie jest to jednak
            metoda wychowawcza i takich preparatów później już do domu nie
            wydajemy! My też nie zawsze mamy natychmiastowe sukcesy w stosowaniu
            bezstresowych metod. W wyjątkowych przypadkach całkowitej negacji
            naszej pracy, musimy zastosować mikrowlewkę doodbytniczą lub szybkie
            wziewne znieczulenie ogólne, pomimo głośno wyrażanego
            niezadowolenia. Na szczęście zastosowana premedykacja często
            wystarcza do założenia niebieskiego lub różowego motylka, przez
            który podajemy środki znieczulające, a dodatkowo daje niepamięć
            wszystkich nieprzyjemnych zdarzeń. W przypadku dzieci akceptujących
            nasze postępowanie, o ile nie stoi na przeszkodzie brak widocznych
            żył, sensowne jest założenie w miejsce wkłucia maści znieczulającej.
          </p>
          <p>
            Samo znieczulenie i zabieg wykonujemy bez obecności Rodziców.
            Musicie nam zaufać, że chcemy jak najlepiej dla Waszego dziecka i w
            tym momencie musimy zajmować się tylko nim. W wielu przypadkach
            znieczulenie ogólne jest łączone ze znieczuleniem miejscowym.
            Kombinacja taka zapewnia bardzo dobre działanie przeciwbólowe w
            czasie i po zabiegu, przyczynia się do zmniejszenia ilości
            podawanych dziecku w czasie zabiegu leków oraz zapewnia długi okres
            bezbolesności po zakończonym zabiegu operacyjnym
          </p>
          <p>
            Po zabiegu, od momentu powrotu wszystkich czynności życiowych,
            będziecie znowu przy budzącym się dziecku i bardzo wtedy
            potrzebujemy Waszej pomocy w opiece nad nim. Prosimy wtedy o
            zapewnienie poczucia bezpieczeństwa często jeszcze nie w pełni
            świadomemu dziecku, chronienie go przed możliwością urazu. Tym
            bardziej że ze świadomością narasta stopień rozżalenia i tylko
            Rodzice są w stanie to uczucie poskromić. Ze względu na stosowane
            leki i techniki znieczulenia dziecko szybko wraca do pełnej
            wydolności i często już po 30 minutach od zakończenia znieczulenia
            może wrócić do domu. A tam może dostać pić, dwie godziny później
            jeść i – jeżeli będzie wskazane – proste leki przeciwbólowe (np.
            paracetamol w dowolnej formie). Takie postępowanie pozwoli na dużo
            milszą atmosferę przy ewentualnym kolejnym spotkaniu.
          </p>
        </ArticleSection>

        <ArticleSection title="Znieczulanie">
          <p>
            Dziecko w obcych dla siebie warunkach chce być z osobami bliskimi.
            Świetnie to rozumiemy i dlatego dopóki można, przebywa blisko
            Rodziców. Udaje się nam czasami pozyskać zaufanie dziecka, ale
            często, pomimo premedykacji i Państwa pomocy, początek naszego
            spotkania bywa głośny i energiczny.
          </p>
          <p>
            Na szczęście, w większości przypadków podana przez Rodzica i
            połknięta często z oporami tabletka lub wypity syrop robią z dziecka
            miłego, zadowolonego, choć sennego osobnika. Nie jest to jednak
            metoda wychowawcza i takich preparatów później już do domu nie
            wydajemy! My też nie zawsze mamy natychmiastowe sukcesy w stosowaniu
            bezstresowych metod. W wyjątkowych przypadkach całkowitej negacji
            naszej pracy, musimy zastosować mikrowlewkę doodbytniczą lub szybkie
            wziewne znieczulenie ogólne, pomimo głośno wyrażanego
            niezadowolenia. Na szczęście zastosowana premedykacja często
            wystarcza do założenia niebieskiego lub różowego motylka, przez
            który podajemy środki znieczulające, a dodatkowo daje niepamięć
            wszystkich nieprzyjemnych zdarzeń. W przypadku dzieci akceptujących
            nasze postępowanie, o ile nie stoi na przeszkodzie brak widocznych
            żył, sensowne jest założenie w miejsce wkłucia maści znieczulającej.
          </p>
          <p>
            Samo znieczulenie i zabieg wykonujemy bez obecności Rodziców.
            Musicie nam zaufać, że chcemy jak najlepiej dla Waszego dziecka i w
            tym momencie musimy zajmować się tylko nim. W wielu przypadkach
            znieczulenie ogólne jest łączone ze znieczuleniem miejscowym.
            Kombinacja taka zapewnia bardzo dobre działanie przeciwbólowe w
            czasie i po zabiegu, przyczynia się do zmniejszenia ilości
            podawanych dziecku w czasie zabiegu leków oraz zapewnia długi okres
            bezbolesności po zakończonym zabiegu operacyjnym
          </p>
          <p>
            Po zabiegu, od momentu powrotu wszystkich czynności życiowych,
            będziecie znowu przy budzącym się dziecku i bardzo wtedy
            potrzebujemy Waszej pomocy w opiece nad nim. Prosimy wtedy o
            zapewnienie poczucia bezpieczeństwa często jeszcze nie w pełni
            świadomemu dziecku, chronienie go przed możliwością urazu. Tym
            bardziej że ze świadomością narasta stopień rozżalenia i tylko
            Rodzice są w stanie to uczucie poskromić. Ze względu na stosowane
            leki i techniki znieczulenia dziecko szybko wraca do pełnej
            wydolności i często już po 30 minutach od zakończenia znieczulenia
            może wrócić do domu. A tam może dostać pić, dwie godziny później
            jeść i – jeżeli będzie wskazane – proste leki przeciwbólowe (np.
            paracetamol w dowolnej formie). Takie postępowanie pozwoli na dużo
            milszą atmosferę przy ewentualnym kolejnym spotkaniu.
          </p>
        </ArticleSection>

        <ArticleSection id="dzieci3" title="Możliwe powikłania">
          <p>
            Powikłania zagrażające życiu lub powodujące trwałe kalectwo są
            niezwykle rzadkie przy obecnie stosowanym sprzęcie i lekach. Pełne
            monitorowanie parametrów życiowych gwarantujących utrzymanie
            właściwych parametrów oddychania i krążenia, oraz wyeliminowanie
            leków mogących wywołać najgroźniejsze, niezwykle rzadkie powikłanie,
            jakim jest gorączka złośliwa, pozwala na skupienie się na
            niegroźnych i przemijających niespodziankach, z jakimi przy
            znieczuleniu dzieci zdarza się nam spotykać. U dzieci z
            nadwrażliwością możliwe jest wystąpienie przejściowego skurczu
            oskrzeli z przemijającą dusznością. Czasami zdarzają się krwawienia
            z miejsca operowanego wymagające podania leków lub dodatkowego
            zaopatrzenia chirurgicznego. Czasem zdarzają się alergiczne reakcje
            skórne (wysypka lub rumień). Objawy typowe po znieczuleniu to
            swędzenie nosa i oczu, drapanie w gardle. Często po zabiegu dziecko
            może czuć się źle, bo przez pewien czas jest zdezorientowane i
            pobudzone. Ważna w tym okresie jest współpraca rodziców z zespołem
            anestezjologicznym, mająca na celu stworzenie poczucia
            bezpieczeństwa dziecku.
          </p>
          <p>
            Dzieci, które przed ukończeniem trzeciego roku życia przechodzą
            wiele operacji w znieczuleniu ogólnym, mają podwyższone ryzyko
            trudności z nauką w późniejszym okresie życia – informują naukowcy z
            USA na łamach pisma „Anesthesiology” w 2009 r. Już wcześniejsze
            badania na zwierzętach sugerowały, że leki znieczulające powodują
            zaburzenia w rozwoju mózgu młodych osobników. W swojej najnowszej
            pracy grupa doktora Roberta Wildera z Mayo Clinic dowiodła, że
            stosowanie znieczulenia ogólnego u bardzo małych dzieci może mieć
            podobne konsekwencje. Naukowcy wykorzystali w swojej pracy dane 5357
            dzieci urodzonych w latach 1976-1982 i na podstawie szczegółowej
            analizy historii poszczególnych pacjentów odkryli, że jednorazowe
            zastosowanie znieczulenia ogólnego u małego dziecka nie jest
            szkodliwe, natomiast podawanie środków znieczulających częściej u
            dzieci przed ukończeniem trzeciego roku życia zwiększa dwukrotnie
            ryzyko wystąpienia trudności w nauce przed ukończeniem przez nie 19
            lat. Nie można też wykluczyć, że wpływ na to mają nie same leki
            znieczulające, a choroby wymagające w tym wieku licznych zabiegów w
            znieczuleniu.
          </p>
          <p>
            Po zabiegu, od momentu powrotu wszystkich czynności życiowych,
            będziecie znowu przy budzącym się dziecku i bardzo wtedy
            potrzebujemy Waszej pomocy w opiece nad nim. Prosimy wtedy o
            zapewnienie poczucia bezpieczeństwa często jeszcze nie w pełni
            świadomemu dziecku, chronienie go przed możliwością urazu. Tym
            bardziej że ze świadomością narasta stopień rozżalenia i tylko
            Rodzice są w stanie to uczucie poskromić. Ze względu na stosowane
            leki i techniki znieczulenia dziecko szybko wraca do pełnej
            wydolności i często już po 30 minutach od zakończenia znieczulenia
            może wrócić do domu. A tam może dostać pić, dwie godziny później
            jeść i – jeżeli będzie wskazane – proste leki przeciwbólowe (np.
            paracetamol w dowolnej formie). Takie postępowanie pozwoli na dużo
            milszą atmosferę przy ewentualnym kolejnym spotkaniu.
          </p>
        </ArticleSection>

        <ArticleSection
          id="dzieci4"
          title="Zabiegi ambulatoryjne u dzieci - przeciwskazania"
        >
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <ContraindicationItem>
              Zwiększone ryzyko związane z obecnością niewyrównanych schorzeń.
              (ASA &gt;III)
            </ContraindicationItem>

            <ContraindicationItem>
              Dziecko ma &lt; 1 miesiąc lub jest wcześniakiem &lt; 1 roku życia.
            </ContraindicationItem>

            <ContraindicationItem>
              Dziecko bezpośrednio po szczepieniu; anestezja nie wcześniej niż:
              <SubList>
                <li>
                  di-per-te, Heine-Medina, Hemophilus – trzy dni po szczepieniu
                </li>
                <li>świnka, różyczka i odra – dwa tygodnie po szczepieniu.</li>
              </SubList>
            </ContraindicationItem>

            <ContraindicationItem>
              Przebyta choroba zakaźna; anestezja nie wcześniej niż:
              <SubList>
                <li>Ospa wietrzna – gdy wyschnie ostatni wykwit</li>
                <li>Świnka – 10 dni po stwierdzeniu powiększonych węzłów</li>
                <li>Odra – 5 dni po wystąpieniu zmian skórnych</li>
                <li>Różyczka – 7 dni po wystąpieniu zmian skórnych</li>
                <li>
                  Koklusz – 21 dni od pierwszych objawów lub 6 dni od
                  rozpoczęcia podawania antybiotyku.
                </li>
              </SubList>
            </ContraindicationItem>

            <ContraindicationItem>
              Ostry nieżyt górnych dróg oddechowych: duszność, duża ilość
              wydzieliny w drogach oddechowych, ew. podwyższona ciepłota ciała
              (&gt; 37,8OC).
            </ContraindicationItem>

            <ContraindicationItem>
              Duże ryzyko krwawienia po zabiegu, np. skazy krwotoczne
              (hemofilia).
            </ContraindicationItem>

            <ContraindicationItem>
              Dzieci, w których rodzinach występowały nagłe zgony niemowląt lub
              gorączka złośliwa.
            </ContraindicationItem>
          </ol>

          <p className="mt-6 text-gray-700">
            Nie wiem, czy te informacje odpowiedzą na wszystkie pytania
            dotyczące znieczulenia Waszego dziecka. Jeżeli zdecydujecie się na
            wykonanie zabiegu przy którym potrzebna będzie moja pomoc, wszystkie
            inne wątpliwości wyjaśnimy razem. Jestem pewien, że podjęte decyzje
            dobrze będą służyły Jego zdrowiu i bezpieczeństwu.
          </p>
        </ArticleSection>
      </div>
    </div>
  );
};

export default Anesthesia;
