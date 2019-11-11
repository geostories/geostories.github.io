var configg = {
    style: 'mapbox://styles/monabartling/ck2sb9xzb17tb1co1mf257lhr',
    accessToken: 'pk.eyJ1IjoibW9uYWJhcnRsaW5nIiwiYSI6ImNpeWQyMTUweDAwcTEyd3BlNGswMGtwMGoifQ.tM-yCumZHhlK0h-YTexAHw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'firstslide',
            title: 'TAG 1 | Zustieg - Materialtransport - Einführung und Übung',
            image: 'https://freiluftleben.at/assets/image-cache/images/2-programm/b-bergsteigen/hochtouren-basiskurs/hochtourenkurs-gletscherkurs-600.1f1b1da0.jpg',
            description: 'Treffpunkt ist am Morgen der Parkplatz hinter der Kirche in Krimml. Materialverladung und Transfer mit dem Hüttentaxi. ',
            location: {
                center: [12.17480, 47.22220],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
				
                // }
            ],
            onChapterExit: [
                {
                //     layer: 'layer-name',
                //     opacity: 0
                }
            ]
        },
		{
            id: 'second1slide',
            title: '',
            image: '',
            description: 'Zustieg ab Materialseilbahn bzw. Innere Keesalm Richtung Warnsdorfer Hütte (500 Hm ca. 1,5-2 h).',
            location: {
                center: [12.22710, 47.09840],
                zoom: 13,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'secondslide',
            title: '',
            image: '',
            description: 'Lager- bzw. Zimmerbezug, kurze Rast sowie Programmbesprechung der Tage. Im nahegelegenen Klettergarten werden die ersten Seiltechnikübungen durchgemacht (Abseilen, Knotenkunde, Anseilmethoden, Gletscherseilschaft, Fixpunkte im Fels). Abends Orientierung, Gletscher- und Wetterkunde.',
            location: {
                center: [12.251611, 47.093250],
                zoom: 15,
                pitch: 40,
                bearing: 40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'thirdslide',
            title: 'TAG 2 | Übungstag',
            image: '',
            description: 'Heute steht die Technik und Taktik beim Begehen von Gletschern sowie die Spaltenbergung (Selbst- und Kameradenrettung) am Programm. Hintersichert versuchst du, den Sturz deiner Kollegin / deines Kollegen in die Gletscherspalte zu „halten“ sowie diese/n aus der Spalte mit Hilfe der Losen Rolle (eine spezielle Rettungstechnik) zu bergen.',
            location: {
                center: [12.27384, 47.08523],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'fourthslide',
            title: '',
            image: 'https://freiluftleben.at/assets/image-cache/images/2-programm/b-bergsteigen/hochtouren-basiskurs/gletscherspaltenbergung.1f1b1da0.jpg',
            description: 'Die eigene Rettung aus der Spalte mittels Prusik und Münchhausen wirst du ebenfalls üben.', 
            location: {
                center: [12.27384, 47.08523],
                zoom: 15,
                pitch: 60,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'fifthslide',
            title: '',
            image: '',
            description: 'Abends Wiederholung der Tagesinhalte, Seil- und Sicherungstheorie.',
            location: {
                center: [12.251611, 47.093250],
                zoom: 15,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'sixthslide',
            title: 'TAG 3 | Übungstag',
            image: '',
            description: 'Heute suchen wir uns einen Ort mit blanken Eisflächen, wo wir das Gehen mit Steigeisen und Pickel sowie das Erstellen von Fixpunkten in Eis und Firn üben werden. ',
            location: {
                center: [12.26767, 47.10084],
                zoom: 15,
                pitch: 60,
                bearing: 20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'seventhslide',
            title: '',
            image: '',
            description: 'Wenn noch Zeit bleibt, versuchen wir uns an einem Eisaufschwung im Eisklettern. Die Orientierung im Gelände sowie eine Wiederholung der Inhalte der letzten drei Tage ist allgegenwärtiger Inhalt dieses Tages. ',
            location: {
                center: [12.26987, 47.09813],
                zoom: 16,
                pitch: 90,
                bearing: 50
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'eightsslide',
            title: '',
            image: '',
            description: 'Abends selbständige Tourenplanung für den morgigen Tourentag.',
            location: {
                center: [12.251611, 47.093250],
                zoom: 15,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'ninethslide',
            title: 'TAG 4 | Tourentag - Abstieg - Heimreise',
            image: '',	
            description: 'Durchführung der selbst von dir geplanten Tour mit Unterstützung von uns.',
            location: {
                center: [12.27654, 47.09319],
                zoom: 15,
                pitch: 70,
                bearing: 50
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'tenthslide',
            title: '',
            image: '',	
            description: 'Gemeinsamer Abstieg und Hüttentaxitransfer. Zurück am Parkplatz um ca. 17 Uhr.',
            location: {
                center: [12.23649, 47.17780],
                zoom: 10,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
