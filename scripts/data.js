const VERSION = {
    en: "version 1.0",
    de: "Version 1.0",
    ru: "Версия 1.0"
};

const TOOLTIP = {
    
    projects: {
        en: "PROJECTS",
        de: "PROJEKTE",
        ru: "ПРОЕКТЫ"
    },
    
    rightClickTooltip: {
        en: "TRY RIGHT CLICK",
        de: "RECHTSKLICKEN",
        ru: "ЩЁЛКНИТЕ ПРАВОЙ КНОПКОЙ"
    },

    tapHoldTooltip: {
        en: "TAP",
        de: "TIPPEN",
        ru: "НАЖМИТЕ"
    }
}


const PROJECT_DESC = { //in descending display order
    easter: {
        title: "EASTER-EGGS",
        en: " 3D printed scannable vouchers for local bubble tea store",
        de: " 3D-gedruckte scannbare Gutscheine für einen lokalen Bubble Tea Store",
        ru: " 3D-печатные купоны для бабли ти. Они можно сканировать.",
        hrefLink: "https://easter-egg.vercel.app/",
        srcImg: "./img/easter-egg.png", //TODO: add images
        WIP: false
    },

    zebras: {
        title: "ZEBRAS",
        en: " full stack web app + NFT collections",
        de: " Full-Stack-Web-Applikation + NFT-Kollektionen",
        ru: " веб-приложение полного стека + коллекция NFT токенов",
        hrefLink: "https://www.zebras.at/",
        srcImg: "./img/zebra-pioneers.png",
        WIP: false
    },


    threads: {
        title: "THREAD-SCRAPER",
        en: " to analyze different kinds of tweets",
        de: " zur Untersuchung verschiedener Arten von Tweets",
        ru: " для осмотра различных типов твитов",
        hrefLink: "https://github.com/philparzer/twitter-thread-analysis",
        srcImg: "./img/thread-scraper.png",
        WIP: false
    },


    hemnes: {
        title: "HEMNES-UPGRADES",
        en: " 3D printable upgrades for IKEA Hemnes beds",
        de: " 3D-gedruckte Erweiterungen für IKEA Hemnes Betten",
        ru: " 3D-печатные модификации для кровати «IKEA Hemnes»",
        hrefLink: "https://github.com/philparzer/ikea-hemnes-upgrades",
        srcImg: "./img/hemnes-upgrades.png",
        WIP: false
    },

    buoy: {
        title: "BUOY",
        en: " a desktop productivity app",
        de: " Produktivität für den Desktop",
        ru: " помогает сосредоточиться при работе за компьютером",
        hrefLink: "https://buoy-productivity.com/",
        srcImg: "./img/buoy.png",
        WIP: false
    },

    spi: {
        title: "SPI",
        en: " a translation of Victor Pelevin's short story 'Spi' into German",
        de: ' Übersetzung von Wiktor Pelewins Kurzgeschichte "Spi" ins Deutsche',
        ru: " перевод рассказа Виктора Пелевина «Спи» на немецкий",
        hrefLink: "./pdfs/SPI_Probeübersetzung_PhilippParzer.pdf",
        srcImg: "./img/spi.png",
        WIP: false
    },

    reimhard: {
        title: "REIMHARD",
        en: " a rap battle discord bot",
        de: " ein Discord-Bot für Rap-Battles",
        ru: " бот-организатор рэп-баттлов на дискорде",
        hrefLink: "https://github.com/philparzer/reimhard",
        srcImg: "./img/reimhard.png",
        WIP: true
    },


    wip1: {
        title: "TBA",
        en: " a new way to show off digital art",
        de: " ein Weg, digitale Kunst greifbar zu machen",
        ru: " способ похвастаться цифровыми искусствами",
        hrefLink: "#",
        srcImg: "./img/wip1.png",
        WIP: true
    },

    wip2: {
        title: "TBA",
        en: " a 3D rogue-like set in Eastern Europe",
        de: " 3D-Rogue-like mit Setting in Osteuropa",
        ru: " 3D игра «рогалик», события которой происходят в бывшом советском государстве",
        hrefLink: "#",
        srcImg: "./img/wip2.png",
        WIP: true
    },

    wip3: {
        title: "TBA",
        en: " a 3D environment for distance learning and working from home",
        de: " 3D-Plattform für Homeoffice und Distance Learning",
        ru: " 3D платформа, позволяющая работать и учиться из дома",
        hrefLink: "#",
        srcImg: "./img/wip3.png",
        WIP: true
    }
}


const I_AM = {
    en: ["eager to learn.", "a developer.", "a linguist.", "a translator.", "a creator.", "overthinking.", "23.", "in a hurry.", "a designer."],
    de: ["wissbegierig.", "Entwickler.", "Linguist.", "Übersetzer.", "Creator.", "am Grübeln.", "23.", "in Eile.", "Designer."],
    ru: ["— любопытный.", "— разработчик.", "— лингвист.","— переводчик.","— создатель.","— мечтатель.","— 23-летний студент.","— в спешке.", "— дизайнер."]
}