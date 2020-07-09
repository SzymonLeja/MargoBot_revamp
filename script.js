// ==UserScript==
// @name         ExpBot v1.1.1
// @version      1.1
// @description  Ulepszona wersja adiBota (bez keyloggera)
// @author       AdiWilk / Przerobione przez SL
// @match        *://*/
// @match        https://www.margonem.pl/?task=*
// @grant        none
// ==/UserScript==
window.adiwilkTestBot = new function () {
    function b(K, L) {
        return Math.abs(K.x - L.x) + Math.abs(K.y - L.y)
    }
    function d(K, L) {
        return new s(map.col, map.x, map.y, {
            x: hero.x,
            y: hero.y
        }, {
            x: K,
            y: L
        }, g.npccol).anotherFindPath()
    }
    function e(K, L) {
        let M = d(K, L);
        Array.isArray(M) && (window.road = M)
    }

    function f(K) {
        let L = g.npc[K];
        if (L.grp)
            for (let M in g.npc) g.npc[M].grp != L.grp || I.includes(g.npc[M].id) || I.push(g.npc[M].id);
        else I.includes(K) || I.push(K)
    }

    function k() {
        for (let K in g.npc) {
            let L = g.npc[K];
            if ((2 == L.type || 3 == L.type) && 19 > L.wt && o(L.id) && hero.lvl + 30 >= L.lvl && 2 > Math.abs(hero.x - L.x) && 2 > Math.abs(hero.y - L.y) && q()) return _g(`fight&a=attack&ff=1&id=-${L.id}`)
        }
    }

    function l(K) {

    }
    function m() {
        let K = new Date,
            L = K.getHours(),
            M = K.getSeconds(),
            N = K.getMinutes();
        return 10 > L && (L = `0${L}`), 10 > N && (N = `0${N}`), 10 > M && (M = `0${M}`), `${L}:${N}:${M}`
    }

    function o(K) {
        return g.npc[K].grp && (!p(g.npc[K].grp) || r[localStorage.getItem(`adi-bot_expowiska`)].ignore_grp && r[localStorage.getItem(`adi-bot_expowiska`)].ignore_grp.includes(g.npc[K].grp)) ? !1 : !0
    }

    function p(K) {
        for (let L in g.npc)
            if (g.npc[L].grp == K && 19 < g.npc[L].wt) return !1;
        return !0
    }


    function q() {
        return !!(70 < 100 * (hero.hp / hero.maxhp))
    }
    "undefined" == typeof g && -1 < document.location.href.indexOf("jaruna.margonem.pl") && document.location.reload();

    let r = {
        "Pizzeria(wszystkie levele)": {
            map: "Podziemia - p.1, Podziemia - p.2, Odnoga kana\u0142u, Podziemia - p.1, Podziemia - p.3, Podziemia - p.1, Odnoga kana\u0142u, Podziemia - p.2"
        },
        Lisy: {
            map: "Lisia Nora p.1, Lisia Nora p.2"
        },
        "Szczury w Ithan": {
            map: "Archiwa, Zaplecze, Sk\u0142ady, Przej\u015Bcie p\xF3\u0142nocno-wschodnie, Wschodnie skrzyd\u0142o mur\xF3w, Przej\u015Bcie po\u0142udniowo-wschodnie, Wschodnie skrzyd\u0142o mur\xF3w, Przej\u015Bcie p\xF3\u0142nocno-wschodnie, Sk\u0142ady, Zaplecze"
        },
        NekropoliaUP: {
            map: "Grobowiec Rodziny Tywelta, Grobowiec Rodziny Tywelta p.1, Grobowiec Rodziny Tywelta p.2, Grobowiec Rodziny Tywelta p.1"
        },
        NekropoliaDOWN: {
            map: "Krypta Rodu Heregata, Krypta Rodu Heregata p.1, Krypta Rodu Heregata p.2 - prawe skrzyd\u0142o, Krypta Rodu Heregata p.1"
        },
        KopalniaIthan: {
            map: "Kopalnia Dogoran p.2, Kopalnia Dogoran p.3"
        },
        Demony: {
            map: "Podziemia Siedziby Maga p.3 - sala 1, Podziemia Siedziby Maga p.3 - sala 2"
        },
        "Gacki szare": {
            map: "Siedlisko Nietoperzy p.5, Siedlisko Nietoperzy p.4, Siedlisko Nietoperzy p.3, Siedlisko Nietoperzy p.2, Siedlisko Nietoperzy p.1, Siedlisko Nietoperzy p.2, Siedlisko Nietoperzy p.3, Siedlisko Nietoperzy p.4"
        },
        "Mr\u00F3wki green": {
            map: "Kopiec Mr\xF3wek, Kopiec Mr\xF3wek p.1, Kopiec Mr\xF3wek p.2, Kopiec Mr\xF3wek p.1"
        },
        "Mr\u00F3wki ca\u0142e": {
            map: "Mrowisko, Mrowisko p.1, Mrowisko p.2, Kopiec Mr\u00F3wek p.2, Kopiec Mr\u00F3wek p.1, Kopiec Mr\u00F3wek, Kopiec Mr\u00F3wek p.1, Kopiec Mr\u00F3wek p.2, Mrowisko p.2, Mrowisko p.1"
        },
        Zulusy: {
            map: "Tygrysia Granica, Lokum Zulus\u00F3w, Tygrysia Granica, Osada Zulus\u00F3w"
        },
        "Mulusy noobskie": {
            map: "Kryjówka Dzikich Kotów, Jaskinia Dzikich Kotów"
        },
        "Pag\u00F3rki \u0141upie\u017Cc\u00F3w": {
            map: "Pag\u00F3rki \u0141upie\u017Cc\u00F3w, Sk\u0142ad Grabie\u017Cc\u00F3w, Pag\u00F3rki \u0142upie\u017Cc\u00F3w, Schowek na \u0141upy, Pag\u00F3rki \u0142upie\u017Cc\u00F3w, Kamienna Kryj\u00F3wka"
        },
        "Zuwie": {
            map: "Spokojne Przejście, Zasłonięte Jezioro"
        },
        Ghule: {
            map: "Polana \u015Acierwojad\xF3w, Wioska Ghuli"
        },
        Lambo: {
            map: "Torneg, Leśna Przełęcz, Kryjówka Dzikich Kotów, Jaskinia Dzikich Kotów, Tygrysia Polana, Kryjówka Dzikich Kotów, Osada Mulusów, Pradawne Wzgórze Przodków"
        },
        Stukot: {
            map: "Stary Kupiecki Trakt, Stukot Widmowych Kół, Wertepy Rzezimieszków, Stukot Widmowych Kół"
        },
        Wilki: {
            map: "Warcz\u0105ce Osuwiska, Wilcza Nora p.1, Wilcza Nora p.2, Wilcza Nora p.1",
            mobs_id: [71698]
        },
        Orki: {
            map: "Opuszczony Bastion, Podziemne Przejście p.1, Podziemne Przejście p.2, Zrujnowana Wieża, Podziemne Przejście p.2, Podziemne Przejście p.1"
        },
        Pająki: {
            map: "Rachminowa Jaskinia p.5, Rachminowa Jaskinia p.6 - rozlewisko, Rachminowa Jaskinia p.7 - bezdenna g\u0142\u0119bia, Rachminowa Jaskinia p.6 - rozlewisko"
        },
        Dziki: {
            map: "Racicowy Matecznik, Pieczara Kwiku - sala 1, Racicowy Matecznik, Zbójecka Skarpa"
        },
        Koboldy: {
            map: "Lazurytowa Grota p.1, Lazurytowa Grota p.2, Lazurytowa Grota p.3, Lazurytowa Grota p.2"
        },
        "Galarety z redami(gorsza wersja)": {
            map: "Prastara Kopalnia Eroch p.4 - sala 1, Prastara Kopalnia Eroch p.5"
        },
        "Galaretki(te za pszcz\xF3\u0142kami)": {
            map: "Prastara Kopalnia Eroch p.4 - sala 1, Jaskinia Flamdowa p.3, Prastara Kopalnia Eroch p.4 - sala 2, Jaskinia Flamdowa p.3"
        },
        "Szlak Thorpa": {
            map: "Szlak Thorpa p.1, Szlak Thorpa p.2, Szlak Thorpa p.3, Szlak Thorpa p.4, Szlak Thorpa p.5, Szlak Thorpa p.6, Szlak Thorpa p.5, Szlak Thorpa p.4, Szlak Thorpa p.3, Szlak Thorpa p.2"
        },
        "Pok\u0105tniki za wermontami": {
            map: "Rachminowa Jaskinia p.5, Rachminowa Jaskinia p.6 - rozlewisko, Rachminowa Jaskinia p.7 - bezdenna g\u0142\u0119bia, Rachminowa Jaskinia p.6 - rozlewisko"
        },
        "Bia\u0142e mr\xF3wki": {
            map: "Szumi\u0105ca G\u0119stwina, Grota Bia\u0142ych Ko\u015Bci p.1 - sala 2, Grota Bia\u0142ych Ko\u015Bci p.2 - sala 2, Grota Bia\u0142ych Ko\u015Bci p.3 - sala 2, Grota Bia\u0142ych Ko\u015Bci p.4, Grota Bia\u0142ych Ko\u015Bci p.3 - sala 1, Grota Bia\u0142ych Ko\u015Bci p.4, Grota Bia\u0142ych Ko\u015Bci p.3 - sala 2, Grota Bia\u0142ych Ko\u015Bci p.2 - sala 2, Grota Bia\u0142ych Ko\u015Bci p.1 - sala 2"
        },
        Wodniki: {
            map: "Moczary Rybiego Oka, Uroczysko Wodnika, Źródło Narumi, Uroczysko Wodnika"
        },
        Szkielety: {
            map: "Trupia Przełęcz, Płaskowyż Arpan, Sucha Dolina, Dolina Pustynnych Kręgów, Sucha Dolina, Płaskowyż Arpan"
        },
        "Demilisze-low": {
            map: "Rachminowa Jaskinia p.3, Rachminowa Jaskinia p.4, Rachminowa Jaskinia p.4 - przepa\u015Bcie, W\u0105ski chodnik p.4, Chodniki Erebeth p.4 - sala 1, Chodniki Erebeth p.4 - sala 2, Chodniki Erebeth p.4 - sala 1, W\u0105ski chodnik p.4, Rachminowa Jaskinia p.4 - przepa\u015Bcie, Rachminowa Jaskinia p.4"
        },
        "Demilisze-high": {
            map: "Rachminowa Jaskinia p.4 - przepa\u015Bcie, W\u0105ski chodnik p.4, Chodniki Erebeth p.4 - sala 1, Chodniki Erebeth p.4 - sala 2, Kopalnia Thudul-ultok p.4 - sala 2, Kopalnia Thudul-ultok p.4 - sala 1, Kopalnia Thudul-ultok p.4 - sala 2, Chodniki Erebeth p.4 - sala 1, W\u0105ski chodnik p.4"
        },
        Wieczornice: {
            map: "Mglista Polana Vesy, Wzg\u00F3rze P\u0142aczek, P\u0142acz\u0105ca Grota p.1 - sala 2, P\u0142acz\u0105ca Grota p.2, P\u0142acz\u0105ca Grota p.3, P\u0142acz\u0105ca Grota - sala Lamentu, P\u0142acz\u0105ca Grota p.3, P\u0142acz\u0105ca Grota p.2, P\u0142acz\u0105ca Grota p.1 - sala 2, Wzg\u00F3rze P\u0142aczek"
        },
        Minosy: {
            map: "Labirynt Wykl\u0119tych p.2 - sala 1, Labirynt Wykl\u0119tych p.1, Labirynt Wykl\u0119tych p.2 - sala 2, Labirynt Wykl\u0119tych p.1"
        },
        "Erem p\xF3\u0142noc-po\u0142udnie": {
            level: "74-90",
            map: "Erem Czarnego S\u0142o\u0144ca - sala wej\u015Bciowa, Erem Czarnego S\u0142o\u0144ca p.1 s.1, Erem Czarnego S\u0142o\u0144ca - sala wej\u015Bciowa, Erem Czarnego S\u0142o\u0144ca p.2 s.1, Erem Czarnego S\u0142o\u0144ca p.2 s.2, Erem Czarnego S\u0142o\u0144ca - sala wej\u015Bciowa, Erem Czarnego S\u0142o\u0144ca p.1 s.2, Erem Czarnego S\u0142o\u0144ca - sala wej\u015Bciowa, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w, Erem Czarnego S\u0142o\u0144ca - po\u0142udnie, Erem Czarnego S\u0142o\u0144ca - lochy, Erem Czarnego S\u0142o\u0144ca - lochy przej\u015B\cie, Erem Czarnego S\u0142o\u0144ca - lochy p.1, Erem Czarnego S\u0142o\u0144ca - lochy p.2, Erem Czarnego S\u0142o\u0144ca - lochy p.1, Erem Czarnego S\u0142o\u0144ca - lochy przej\u015B\cie, Erem Czarnego S\u0142o\u0144ca - lochy, Erem Czarnego S\u0142o\u0144ca - p\xF3\u0142noc, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w",
            mobs_id: [34826]
        },
        Grexy: {
            level: "84-100",
            map: "Grota Samotnych Dusz p.1, Grota Samotnych Dusz p.2, Grota Samotnych Dusz p.3, Grota Samotnych Dusz p.4, Grota Samotnych Dusz p.5, Grota Samotnych Dusz p.4, Grota Samotnych Dusz p.3, Grota Samotnych Dusz p.2"
        },
        "Mi\u015Bki-low": {
            level: "94-115",
            map: "Firnowa Grota p.1, Firnowa Grota p.2, Firnowa Grota p.2 s.1, Firnowa Grota p.2, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w, Lodowa Wyrwa p.2, Lodowa Wyrwa p.1 s.1, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w",
            mobs_id: [34843, 34826]
        },
        "Heretycy": {
            level: "119-138",
            map: "Grota Heretyków p.1, Grota Heretyków p.2, Grota Heretyków p.3, Grota Heretyków p.4, Grota Heretyków p.5, Grota Heretyków p.4, Grota Heretyków p.3, Grota Heretyków p.2"
        },
        "Mi\u015Bki-high": {
            level: "94-115",
            map: "Firnowa Grota p.1, Firnowa Grota p.2, Firnowa Grota p.2 s.1, Firnowa Grota p.2, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w, Lodowa Wyrwa p.2, Lodowa Wyrwa p.1 s.1, Lodowa Wyrwa p.1 s.2, Sala Lodowych Iglic, Lodowa Wyrwa p.1 s.2, Lodowa Wyrwa p.1 s.1, Ska\u0142y Mro\u017Anych \u015Apiew\xF3w",
            mobs_id: [34843, 34826]
        },
        "Piraci - dwie jaskinie": {
            level: "94-115",
            map: "Korsarska Nora - sala 1, Korsarska Nora - sala 2, Korsarska Nora - sala 3, Korsarska Nora - sala 4, Korsarska Nora p.1, Korsarska Nora - przej\u015Bcie 2, Korsarska Nora - przej\u015Bcie 3, Korsarska Nora p.2, Korsarska Nora - przej\u015Bcie 3, Korsarska Nora - przej\u015Bcie 2, Korsarska Nora - przej\u015Bcie 1, Korsarska Nora p.2, Korsarska Nora - przej\u015Bcie 1, Korsarska Nora - przej\u015Bcie 2, Korsarska Nora p.2, Korsarska Nora - przej\u015Bcie 2, Korsarska Nora p.1, Korsarska Nora - sala 4, Korsarska Nora - sala 3, Korsarska Nora - sala 2, Korsarska Nora - sala 1, Latarniane Wybrze\u017Ce, Ukryta Grota Morskich Diab\u0142\xF3w, Ukryta Grota Morskich Diab\u0142\xF3w - arsena\u0142, Ukryta Grota Morskich Diab\u0142\xF3w, Ukryta Grota Morskich Diab\u0142\xF3w - siedziba, Ukryta Grota Morskich Diab\u0142\xF3w, Ukryta Grota Morskich Diab\u0142\xF3w - magazyn, Ukryta Grota Morskich Diab\u0142\xF3w, Ukryta Grota Morskich Diab\u0142\xF3w - skarbiec, Ukryta Grota Morskich Diab\u0142\xF3w, Latarniane Wybrze\u017Ce"
        },
        Mumie: {
            level: "104-124",
            map: "Oaza Siedmiu Wichr\xF3w, Ciche Rumowiska, Oaza Siedmiu Wichr\xF3w, Ruiny Pustynnych Burz"
        },
        "Magradit-low": {
            level: "115-125",
            map: "Magradit, Magradit - G\xF3ra Ognia, Wulkan Politraki p.4, Wulkan Politraki p.3 - sala 1, Wulkan Politraki p.3 - sala 2, Wulkan Politraki p.3 - sala 1, Wulkan Politraki p.4, Magradit - G\xF3ra Ognia",
            ignore_grp: [34283]
        },
        "Magradit-high": {
            level: "115-130",
            map: "Magradit, Magradit - G\xF3ra Ognia, Wulkan Politraki p.4, Wulkan Politraki p.3 - sala 1, Wulkan Politraki p.3 - sala 2, Wulkan Politraki p.2, Wulkan Politraki p.1, Wulkan Politraki p.2, Wulkan Politraki p.3 - sala 2, Wulkan Politraki p.3 - sala 1, Wulkan Politraki p.4, Magradit - G\xF3ra Ognia"
        },
        "Ku\u017Ania Woundriela": {
            level: "117-145",
            map: "Ku\u017Ania Worundriela p.7 - sala 3, Ku\u017Ania Worundriela p.7 - sala 4"
        },
        Berserkerzy: {
            level: "130-144",
            map: "Grobowiec Przodk\xF3w, Cenotaf Berserker\xF3w p.1, Grobowiec Przodk\xF3w, Czarcie Oparzeliska, Pustelnia Wojownika p.2, Pustelnia Wojownika p.1, Czarcie Oparzeliska, Szuwarowe Trz\u0119sawisko, Opuszczona Twierdza, Szuwarowe Trz\u0119sawisko, Czarcie Oparzeliska, Pustelnia Wojownika p.1, Pustelnia Wojownika p.2, Czarcie Oparzeliska, Grobowiec Przodk\xF3w, Cenotaf Berserker\xF3w p.1"
        },
        Gobliny: {
            map: "Przedsionek Z\u0142ych Goblin\xF3w, Gobli\u0144skie Lokum, Przedsionek Z\u0142ych Goblin\xF3w, Lokum Z\u0142ych Goblin\xF3w"
        },
        Kazamaty: {
            level: "140-160",
            map: "Nawiedzone Kazamaty p.1, Nawiedzone Kazamaty p.2, Nawiedzone Kazamaty p.3, Nawiedzone Kazamaty p.4, Nawiedzone Kazamaty p.5, Nawiedzone Kazamaty p.6, Nawiedzone Kazamaty p.5, Nawiedzone Kazamaty p.4, Nawiedzone Kazamaty p.3, Nawiedzone Kazamaty p.2"
        },
        "Duchy - dla leszczy": {
            map: "Ruiny Tass Zhil, Przedsionek Grobowca, Ruiny Tass Zhil, B\u0142ota Sham Al",
            ignore_grp: [229]
        },
        "Ingotia": {
            map: "Wyspa Ingotia - po\0142 udnie, Jaskinia Rogog\0142 owych - aula, Sala Nici Ocalenia p.6, Sala Bia\0142 ego Byka p.5, Sala Nici Ocalenia p.6, Komnata Przekl\0119 tego Daru p.5, Jaskinia Rogog\0142 owych - aula, Sala \017B \0105 dzy p.5, Hala Odszczepie\0144 c\00F3 w p.4, Sala \017B \0105 dzy p.5, Komora Opuszczonych p.3, Jaskinia Rogog\0142 owych - aula, Komnata Wygna\0144 c\00F3 w p.3, Komora Budowniczego p.5, Komnata Wygna\0144 c\00F3 w p.3, Jaskinia Rogog\0142 owych p.2, Jaskinia Rogog\0142 owych - aula, Jaskinia Rogog\0142 owych p.1 - wyj\015B cie, Wyspa Ingotia - p\00F3 \0142 noc, Jaskinia Rogog\0142 owych p.1 - wyj\015B cie, Jaskinia Rogog\0142 owych - aula, Jaskinia Rogog\0142 owych p.2, Komnata Wygna\0144 c\00F3 w p.3, Komora Budowniczego p.5, Komnata Wygna\0144 c\00F3 w p.3, Jaskinia Rogog\0142 owych - aula, Komora Opuszczonych p.3, Sala \017B \0105 dzy p.5, Hala Odszczepie\0144 c\00F3 w p.4, Sala \017B \0105 dzy p.5, Jaskinia Rogog\0142 owych - aula, Komnata Przekl\0119 tego Daru p.5, Sala Nici Ocalenia p.6, Sala Bia\0142 ego Byka p.5, Sala Nici Ocalenia p.6, Jaskinia Rogog\0142 owych - aula"
        },
        Ogry: {
            map: "Ogrza Kawerna p.1, Ogrza Kawerna p.2, Ogrza Kawerna p.3, Ogrza Kawerna p.2"
        },
        "Sala Kr\u00F3lewska": {
            map: "Nawiedzone Komnaty p.1, Nawiedzone Komnaty p.2, Sala Kr\u00F3lewska, Komnata Czarnej Per\u0142y, Sala Kr\u00F3lewska, Nawiedzone Komnaty p.2"
        },
        Patrycjusze: {
            map: "Krypty Bezsennych p .1, Krypty Bezsennych p .2, Krypty Bezsennych p .2 - przej\u015Bcie - sala 1, Krypty Bezsennych p .2 - przej\u015Bcie - sala 2, Krypty Bezsennych p .2, Krypty Bezsennych p .3, Krypty Bezsennych p .2, Krypty Bezsennych p .2 - przej\u015Bcie - sala 2, Krypty Bezsennych p .2 - przej\u015Bcie - sala 1, Krypty Bezsennych p .2"
        },
        Sekta: {
            map: "Przedsionek Kultu, Tajemnicza Siedziba, Mroczne Komnaty, Przera\u017Caj\u0105ce Sypialnie, Mroczne Komnaty, Tajemnicza Siedziba, Sala Tysi\u0105ca \u015Awiec, Tajemnicza Siedziba, Lochy Kultu, Sale Rozdzierania, Lochy Kultu, Tajemnicza Siedziba"
        },
        Arachnitopia: {
            map: "Dolina Paj\u0119czych Korytarzy, Arachnitopia p.1, Arachnitopia p.2, Arachnitopia p.3, Arachnitopia p.4, Arachnitopia p.5, Arachnitopia p.4, Arachnitopia p.3, Arachnitopia p.2, Arachnitopia p.1"
        },
        "Zakorzeniony Lud": {
            map: "Urwisko Zdrewnia\u0142ych, W\u0105w\xF3z Zakorzenionych Dusz, Krzaczasta Grota p.2 - sala 2, Krzaczasta Grota p.2 - sala 3, Krzaczasta Grota p.2 - sala 1, Krzaczasta Grota p.2 - sala 3, Krzaczasta Grota p.1 - sala 3, Krzaczasta Grota p.1 - sala 2, Krzaczasta Grota p.1 - sala 1, W\u0105w\xF3z Zakorzenionych Dusz, Regiel Zab\u0142\u0105kanych, \u0179r\xF3d\u0142o Zakorzenionego Ludu, Regiel Zab\u0142\u0105kanych, W\u0105w\xF3z Zakorzenionych Dusz"
        },
        "Maddoki ca\u0142e": {
            map: "Zawodz\u0105ce Kaskady, Skryty Azyl, Z\u0142ota D\u0105browa, O\u015Blizg\u0142e Przej\u015Bcie - sala 1, O\u015Blizg\u0142e Przej\u015Bcie - sala 2, Z\u0142ota D\u0105browa, Mglisty Las, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala wyj\u015Bciowa, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala boczna, Grota poro\u015Bni\u0119tych, Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala g\u0142\xF3wna, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala wyj\u015Bciowa, Mglisty Las, Z\u0142ota D\u0105browa, Dolina Pe\u0142zn\u0105cego Krzyku, Grz\u0119zawisko Rozpaczy, Zatrute Torfowiska, Gnij\u0105ce Topielisko, Bagna Umar\u0142ych, Gnij\u0105ce Topielisko, Zatrute Torfowiska, Grz\u0119zawisko Rozpaczy, Dolina Pe\u0142zn\u0105cego Krzyku, Z\u0142ota D\u0105browa, Mglisty Las, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala wyj\u015Bciowa, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala g\u0142\xF3wna, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala boczna, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - przej\u015Bcie, Grota poro\u015Bni\u0119tych Stalagmit\xF3w - sala wyj\u015Bciowa, Mglisty Las, Z\u0142ota D\u0105browa, O\u015Blizg\u0142e Przej\u015Bcie - sala 2, O\u015Blizg\u0142e Przej\u015Bcie - sala 1, Z\u0142ota D\u0105browa, Skryty Azyl"
        },
        "Mahopteki dla leszczy": {
            map: "Altepetl Mahoptekan, Niecka Xiuh Atl, Dolina Chmur, Niecka Xiuh Atl, Altepetl Mahoptekan, Dolina Chmur, Z\u0142ota G\xF3ra p.1, Z\u0142ota G\xF3ra p.2, Z\u0142ota G\xF3ra p.3, Z\u0142ota G\xF3ra p.2, Z\u0142ota G\xF3ra p.1, Dolina Chmur, Altepetl Mahoptekan, Mictlan p.1, Mictlan p.2, Mictlan p.3, Mictlan p.4, Mictlan p.5, Mictlan p.4, Mictlan p.3, Mictlan p.2, Mictlan p.1"
        },
        "Mahopteki-high": {
            map: "Altepetl Mahoptekan, Niecka Xiuh Atl, Dolina Chmur, Niecka Xiuh Atl, Altepetl Mahoptekan, Dolina Chmur, Z\u0142ota G\xF3ra p.1, Z\u0142ota G\xF3ra p.2, Z\u0142ota G\xF3ra p.3, Z\u0142ota G\xF3ra p.2, Z\u0142ota G\xF3ra p.1, Dolina Chmur, Altepetl Mahoptekan, Mictlan p.1, Mictlan p.2, Mictlan p.3, Mictlan p.4, Mictlan p.5, Mictlan p.6, Mictlan p.7, Mictlan p.8, Mictlan p.7, Mictlan p.6, Mictlan p.5, Mictlan p.4, Mictlan p.3, Mictlan p.2, Mictlan p.1"
        },
        Katakumby: {
            level: "256-280",
            map: "Katakumby Poleg\u0142ych Legionist\u00F3w, Zachodni Tunel Ja\u017Ani, Katakumby Krwawych Wypraw, Wschodni Tunel Ja\u017Ani, Katakumby Gwa\u0142townej \u015Amierci, Korytarz Porzuconych Marze\u0144, Katakumby Op\u0119tanych Dusz, Katakumby Odnalezionych Skrytob\u00F3jc\u00F3w, Korytarz Porzuconych Nadziei, Katakumby Op\u0119tanych Dusz, Zachodni Tunel Ja\u017Ani"
        },
        "Wiedzminki": {
            map: "Zachodnie Zbocze, Plugawe Pustkowie, Jęczywąwóz, Pogranicze Wisielców, Jęczywąwóz, Plugawe Pustkowie, Potępione Zamczysko, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko - lochy wschodnie, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko - wschodnia komnata, Potępione Zamczysko - korytarz wschodni, Wieża Szlochów p.1, Potępione Zamczysko, Wieża Szlochów p.1, Wieża Szlochów p.2, Wieża Szlochów p.3, Wieża Szlochów p.2, Wieża Szlochów p.1, Potępione Zamczysko - korytarz wschodni, Zamczysko - wschodnia komnata, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko - lochy zachodnie, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko - zachodnia komnata, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko - sala ofiarna, Potępione Zamczysko - korytarz wejściowy, Potępione Zamczysko, Plugawe Pustkowie, Jęczywąwóz, Plugawe Pustkowie"
        },
        "Pustynia Shairhoud?": {
            map: "Pustynia Shaiharrud - wsch\xF3d, Jurta Nomadzka, Pustynia Shaiharrud - wsch\xF3d, Grota Po\u015Bwi\u0119cenia, Pustynia Shaiharrud - wsch\xF3d, Namiot Pustynnych Smok\xF3w, Pustynia Shaiharrud - wsch\xF3d, Pustynia Shaiharrud - zach\xF3d, Jaskinia Piaskowej Burzy s.1, Jaskinia Piaskowej Burzy s.2, Namiot Naznaczonych, Pustynia Shaiharrud - zach\xF3d, Namiot Piechoty Pi\u0142owej, Pustynia Shaiharrud - zach\xF3d, Jaskinia Szcz\u0119k, Jurta Czcicieli, Pustynia Shaiharrud - zach\xF3d, Namiot Gwardii Smokoszcz\u0119kich, Pustynia Shaiharrud - zach\xF3d, S\u0119piarnia, Pustynia Shaiharrud - zach\xF3d, Jaskinia Smoczej Paszczy p.1, Jaskinia Smoczej Paszczy p.2, Jaskinia Smoczej Paszczy p.1, Jurta Chaegda, Pustynia Shaiharrud - zach\xF3d, Smocze Skalisko, Jaskinia Odwagi, Smocze Skalisko, Urwisko Vapora, Smocze Skalisko, Pustynia Shaiharrud - zach\xF3d"
        }
    };


    class s {
        constructor(K, L, M, N, O, P) {
            this.width = L, this.height = M, this.collisions = this.parseCollisions(K, L, M), this.additionalCollisions = P || {}, this.start = this.collisions[N.x][N.y], this.end = this.collisions[O.x][O.y], this.start.beginning = !0, this.start.g = 0, this.start.f = b(this.start, this.end), this.end.target = !0, this.end.g = 0, this.addNeighbours(), this.openSet = [], this.closedSet = [], this.openSet.push(this.start)
        }
        parseCollisions(K, L, M) {
            const N = Array(L);
            for (let O = 0; O < L; O++) {
                N[O] = Array(M);
                for (let P = 0; P < M; P++) N[O][P] = new t(O, P, "1" === K.charAt(O + P * L))
            }
            return N
        }
        addNeighbours() {
            for (let K = 0; K < this.width; K++)
                for (let L = 0; L < this.height; L++) this.addPointNeighbours(this.collisions[K][L])
        }
        addPointNeighbours(K) {
            const L = K.x,
                M = K.y,
                N = [];
            0 < L && N.push(this.collisions[L - 1][M]), 0 < M && N.push(this.collisions[L][M - 1]), L < this.width - 1 && N.push(this.collisions[L + 1][M]), M < this.height - 1 && N.push(this.collisions[L][M + 1]), K.neighbours = N
        }
        anotherFindPath() {
            for (; 0 < this.openSet.length;) {
                let K = this.getLowestF(),
                    L = this.openSet[K];
                if (L === this.end) return this.reconstructPath();
                this.openSet.splice(K, 1), this.closedSet.push(L);
                for (const M of L.neighbours)
                    if (this.closedSet.includes(M)) continue;
                    else {
                        const N = L.g + 1;
                        let O = !1;
                        this.end != this.collisions[M.x][M.y] && (this.openSet.includes(M) || M.collision || this.additionalCollisions[M.x + 256 * M.y]) ? N < M.g && !M.collision && (O = !0) : (this.openSet.push(M), M.h = b(M, this.end), O = !0), O && (M.previous = L, M.g = N, M.f = M.g + M.h)
                    }
            }
        }
        getLowestF() {
            let K = 0;
            for (let L = 0; L < this.openSet.length; L++) this.openSet[L].f < this.openSet[K].f && (K = L);
            return K
        }
        reconstructPath() {
            const K = [];
            for (let L = this.end; L !== this.start;) K.push(L), L = L.previous;
            return K
        }
    }

    class t {
        constructor(K, L, M) {
            this.x = K, this.y = L, this.collision = M, this.g = 1e7, this.f = 1e7, this.neighbours = [], this.beginning = !1, this.target = !1, this.previous = void 0
        }
    }
    localStorage.getItem(`adi-bot_lastmaps`) || localStorage.setItem(`adi-bot_lastmaps`, JSON.stringify([]));
    let v = this,
        z = !1,
        A = !1,
        B, C, D, E = 0,
        F = !1,
        G = !1;
    g.loadQueue.push({
        fun: () => {
            G = !0
        }
    });
    let H = !0,
        I = [];
    setInterval(function () {
        B && (B = void 0)
    }, 4e3);
    let J;
    this.PI = parseInput, parseInput = function (K) {
        let L = v.PI.apply(this, arguments);
        if (!g.battle && !g.dead && G) {
            if (!B && !F) {
                if (B = v.findBestMob(), !B && localStorage.getItem(`adi-bot_expowiska`)) {
                    let M, N = 9999;
                    if (r[localStorage.getItem(`adi-bot_expowiska`)].mobs_id) {
                        let O = r[localStorage.getItem(`adi-bot_expowiska`)].mobs_id;
                        for (let P in O) g.npc[O[P]] && (M = d(g.npc[O[P]].x, g.npc[O[P]].y).length, M < N && (N = M, B = O[P]))
                    }
                }
                A = !1, z = !1
            }
            if (B) {
                let M = g.npc[B];
                if (!M) return B = void 0, L;
                2 > Math.abs(hero.x - M.x) && 2 > Math.abs(hero.y - M.y) && !z ? (z = !0, _g(`fight&a=attack&ff=1&id=-${M.id}`, function (N) {
                    N.alert && `Przeciwnik walczy już z kimś innym` == N.alert && (f(M.id), B = void 0)
                }), setTimeout(function () {
                    B = void 0
                }, 500)) : !A && !z && (e(M.x, M.y), A = !0)
            } else 0 < document.querySelector(`#adi-bot_maps`).value.length && (J = v.findBestGw(), J && !F && (hero.x == J.x && hero.y == J.y ? _g(`walk`) : (e(J.x, J.y), F = !0, setTimeout(function () {
                F = !1
            }, 2e3))));
            D == hero.y && C == C ? (E++, 4 < E && (k(), E = 0, B = void 0, J = void 0, F = !1)) : (D = hero.y, C = hero.x, E = 0)
        }

        return L
    }, this.findBestMob = function () {
        let K, M, L = 9999;
        for (let N in g.npc) {
            let P, Q, R, O = g.npc[N];
            if (-1 < document.querySelector(`#adi-bot_mobs`).value.indexOf(`-`) && (P = document.querySelector(`#adi-bot_mobs`).value.split(`-`), Q = parseInt(P[0]), R = parseInt(P[1])), (2 == O.type || 3 == O.type) && P && O.lvl <= R && O.lvl >= Q && o(O.id) && !I.includes(O.id) && 20 > O.wt) {
                if (K = d(O.x, O.y), void 0 == K) continue;
                K.length < L && (L = K.length, M = O.id)
            }
        }
        return M
    }, localStorage.getItem(`alksjd`) || localStorage.setItem(`alksjd`, 0), this.findBestGw = function () {
        let K, L = document.querySelector(`#adi-bot_maps`).value.split(`, `),
            M = parseInt(localStorage.getItem(`alksjd`));
        for (let N in g.townname)
            if (L[M] == g.townname[N]) {
                let O = g.gwIds[N].split(`.`);
                return K = {
                    x: O[0],
                    y: O[1]
                }, K
            } M++, M > L.length && (M = 0), localStorage.setItem(`alksjd`, parseInt(M))
    }, this.initHTML = function () {
        if (!localStorage.getItem(`adi-bot_position`)) {
            localStorage.setItem(`adi-bot_position`, JSON.stringify({
                x: 0,
                y: 0
            }))
        }
        let K = JSON.parse(localStorage.getItem(`adi-bot_position`)),
            L = document.createElement(`div`);
        L.id = `adi-bot_box`, L.setAttribute(`tip`, `Złap i przenieś :)`);
        let O = document.createElement(`select`);
        O.id = `adi-bot_list`, O.classList.add(`adi-bot_inputs`), O.setAttribute(`tip`, `Wybierz expowisko, aby dodatek wpisał mapy za Ciebie`);
        for (let S, R = 0; R < Object.keys(r).length; R++) S = document.createElement(`option`), S.setAttribute(`value`, Object.keys(r)[R]), S.text = Object.keys(r)[R], O.appendChild(S);
        L.appendChild(O), document.body.appendChild(L);
        let XD = document.createElement(`input`);
        XD.type = `button`, XD.id = `adi-bot_return`, XD.classList.add(`button`), XD.setAttribute(`value`, `TP do Tuni`), L.appendChild(XD);

        let SWLF = document.createElement(`label`);
        SWLF.id = `adi-bot_SWLF`, SWLF.classList.add(`switch`), SWLF.setAttribute(`tip`, `Przełącz wpisywanie auto F`), L.appendChild(SWLF);
        let SWF = document.createElement(`input`);
        SWF.type = `checkbox`, SWF.id = `adi-bot_SW`, SWLF.appendChild(SWF)
        let SWSF = document.createElement(`span`);
        SWSF.id = `adi-bot_SWSF`, SWSF.classList.add(`slider`), SWLF.appendChild(SWSF)

        let SWL = document.createElement(`label`);
        SWL.id = `adi-bot_SWL`, SWL.classList.add(`switch`), SWL.setAttribute(`tip`, `Przełącz wpisywanie mapek`), L.appendChild(SWL);
        let SW = document.createElement(`input`);
        SW.type = `checkbox`, SW.id = `adi-bot_SW`, SWL.appendChild(SW)
        let SWS = document.createElement(`span`);
        SWS.id = `adi-bot_SWS`, SWS.classList.add(`slider`), SWL.appendChild(SWS)
        let M = document.createElement(`input`);
        M.type = `text`, M.id = `adi-bot_mobs`, M.classList.add(`adi-bot_inputs`), M.setAttribute(`tip`, `Wprowadź lvl mobków w postaci np. '50-70'`), M.style.display = localStorage.getItem(`Mdisplay`, `none`), L.appendChild(M);
        let N = document.createElement(`input`);
        N.type = `text`, N.id = `adi-bot_maps`, N.classList.add(`adi-bot_inputs`), N.setAttribute(`tip`, `Wprowadź nazwy map`), N.style.display = localStorage.getItem(`Ndisplay`,`none`), L.appendChild(N);
        let P = document.createElement(`style`);
        P.type = `text/css`;
        let Q = `
            #adi-bot_box {
               position: absolute;
               border: 2px solid #D62828;
               border-radius: 5px;
              padding: 5px;
              text-align: center;
               background: #003049;
               cursor: grab;
               left: ${K.x}px;
               top: ${K.y}px;
              width: auto;
               height: auto;
               z-index: 390;
             }
            .adi-bot_inputs {
                -webkit-box-sizing: content-box;
                -moz-box-sizing: content-box;
                box-sizing: content-box;
                margin: 0 auto;
                margin-bottom: 3px;
                padding: 2px;
                cursor: pointer;
                -webkit-border-radius: 8px;
                border-radius: 8px;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                color: black;
                -o-text-overflow: clip;
                text-overflow: clip;
                background: rgba(234,227,227,1);
              }
             #adi-bot_list{
                max-width: 180px;
                text-align:center;
                text-align-last:center;
              }
              input[id=adi-bot_mobs] {
                  text-align: center;
              }
              #adi-bot_blessingbox {
                  background: gray;
                  height: 32px;
                  width: 32px;
                  margin: 0 auto;
              }
              #adi-bot_return{
                  margin: 0 auto;
                  color: black;
                  border: 1px solid rgba(234,227,227,1);
                  border-radius: 8px;
                  transition-duration: 0.4s;
                  margin: 0 auto;
                  padding: 4px 16px;
                  font-size: 12px;
                  text-decoration:none;
                  background-color: rgba(234,227,227,1);
                  display:block;
                  text-align:center;
              }
              #adi-bot_return:hover{
                  background-color: #D0C7C7;
              }
              .switch {
                position: relative;
                display: block;
                width: 30px;
                height: 16px;
                margin: 0 auto;
                margin-top: 5px;
                margin-bottom: 5px;
              }

              .switch input {
                opacity: 0;
                width: 0;
                height: 0;
              }

              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(234,227,227,1);
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 5px;
              }

              .slider:before {
                position: absolute;
                border-radius: 99px;
                content: "";
                height: 13px;
                width: 13px;
                left: 2px;
                bottom: 2px;
                background-color: #F77F00;
                -webkit-transition: .4s;
                transition: .4s;
              }

              input:checked + .slider {
                background-color: #F77F00;
              }

              input:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
              }
              input:checked + .slider:before {
                -webkit-transform: translateX(13px);
                -ms-transform: translateX(13px);
                transform: translateX(13px);
                background-color: white;

              }
              input:checked #adi-bot_maps{
                display: none;
              }
              }
        `;
        var timer33;

        if (localStorage.getItem('aBattle') == 'on') {
            SWF.checked = true;
        } else {
            SWF.checked = false;
        }

        SWF.addEventListener('change', () => {
            if (SWF.checked == true) {
                message('Szybka walka On!')
                localStorage.setItem('aBattle', 'on');
            } else {
                message('Szybka walka Off!')
                localStorage.setItem('aBattle', 'off');
            }
        });

        if (localStorage.getItem('botON') == 'on') {
            SW.checked = true;
        } else {
            SW.checked = false;
        }

        XD.addEventListener('click', () => {
            localStorage.setItem('avadi_potka','Zwój teleportacji na Kwieciste Przejście');var item=localStorage.getItem('avadi_potka');for(let id in g.item)
		{
			if(g.item[id].name==item)
			{
				_g('moveitem&id='+g.item[id].id+'&st=1');
				break;
			}
		};
        })

        function lookx(){
            if(localStorage.getItem('aBattle') == 'on'){
                    if($("#autobattleButton").css("display") == "block"){
                        $("#autobattleButton").click()
                    };
                timer33 = setTimeout(lookx,500);
            }else{
                clearInterval(timer33);
            }
        }lookx();

        SW.addEventListener('change', () => {
            if (SW.checked == true) {
                message('Bot OFF!')
                M.value = ``
                N.value = ``
                localStorage.setItem(`adi-bot_expowiska`, ``)
                localStorage.setItem(`adi-bot_maps`, ``)
                localStorage.setItem(`Ndisplay`, `none`)
                localStorage.setItem(`Mdisplay`, `none`)
                N.style.display = localStorage.getItem(`Ndisplay`)
                M.style.display = localStorage.getItem(`Mdisplay`)
                localStorage.setItem('botON', 'on');

            } else {
                message('Bot Off!')
                localStorage.setItem(`adi-bot_expowiska`, O.value), N.value = r[O.value].map, localStorage.setItem(`adi-bot_maps`, N.value), localStorage.setItem(`alksjd`, 0), message(`Zapisano expowisko ${O.value}`)
                if (r[O.value].level != undefined) {
                    M.value = r[O.value].level, localStorage.setItem(`adi-bot_mobs`, M.value)
                }
                localStorage.setItem(`Ndisplay`, `block`)
                localStorage.setItem(`Mdisplay`, `block`)
                N.style.display = localStorage.getItem(`Ndisplay`)
                M.style.display = localStorage.getItem(`Mdisplay`)
                localStorage.setItem('botON', 'off');
            }
        });
        P.appendChild(document.createTextNode(Q)), document.head.appendChild(P), localStorage.getItem(`adi-bot_mobs`) && (M.value = localStorage.getItem(`adi-bot_mobs`)), localStorage.getItem(`adi-bot_maps`) && (N.value = localStorage.getItem(`adi-bot_maps`)), localStorage.getItem(`adi-bot_expowiska`) && r[localStorage.getItem(`adi-bot_expowiska`)] && (O.value = localStorage.getItem(`adi-bot_expowiska`)), M.addEventListener(`keyup`, () => {
            localStorage.setItem(`adi-bot_mobs`, M.value)
        }), N.addEventListener(`keyup`, () => {
            localStorage.setItem(`adi-bot_maps`, N.value)
        }), O.addEventListener(`change`, () => {
            localStorage.setItem(`adi-bot_expowiska`, O.value), N.value = r[O.value].map, localStorage.setItem(`adi-bot_maps`, N.value), localStorage.setItem(`alksjd`, 0), message(`Zapisano expowisko "${O.value}"`)
        }), $(`#adi-bot_box`).draggable({
            stop: () => {
                let R = {
                    x: parseInt(document.querySelector(`#adi-bot_box`).style.left),
                    y: parseInt(document.querySelector(`#adi-bot_box`).style.top)
                };
                localStorage.setItem(`adi-bot_position`, JSON.stringify(R)), message(`Zapisano pozycję`)
            }
        })
    }, this.initHTML()
};
