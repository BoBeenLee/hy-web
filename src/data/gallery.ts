interface IGallery {
    id: string;
    thumbnail: string;
    images?: string[];
}

const PREFIX = (id: string) => `hyweb/${id}`;

const PREFIX_THUMBNAIL = (id: string) => `${PREFIX(id)}/${id}_T.png`;

// tslint:disable:object-literal-sort-keys
const galleryData: IGallery[] = [
    {
        id: "P1",
        thumbnail: PREFIX_THUMBNAIL("P1"),
        images: [
            `${PREFIX("P1")}/1.png`,
            `${PREFIX("P1")}/2.gif`,
            `${PREFIX("P1")}/3.gif`,
            `${PREFIX("P1")}/4.gif`,
            `${PREFIX("P1")}/5.gif`
        ]
    },
    {
        id: "P2",
        thumbnail: PREFIX_THUMBNAIL("P2"),
        images: [
            `${PREFIX("P2")}/1.png`,
            `${PREFIX("P2")}/2.png`,
            `${PREFIX("P2")}/3.png`
        ]
    },
    {
        id: "P4",
        thumbnail: PREFIX_THUMBNAIL("P4"),
        images: [
            `${PREFIX("P4")}/1.png`
        ]
    },
    {
        id: "P5",
        thumbnail: PREFIX_THUMBNAIL("P5"),
        images: [
            `${PREFIX("P5")}/1.png`,
            `${PREFIX("P5")}/2.gif`,
            `${PREFIX("P5")}/3.gif`,
            `${PREFIX("P5")}/4.gif`,
            `${PREFIX("P5")}/5.gif`,
            `${PREFIX("P5")}/6.gif`,
            `${PREFIX("P5")}/7.png`,
            `${PREFIX("P5")}/8.png`
        ]
    },
    {
        id: "P7",
        thumbnail: PREFIX_THUMBNAIL("P7"),
        images: [
            `${PREFIX("P7")}/1.png`,
            `${PREFIX("P7")}/2.gif`,
            `${PREFIX("P7")}/3.png`,
            `${PREFIX("P7")}/4.gif`,
            `${PREFIX("P7")}/5.png`,
            `${PREFIX("P7")}/6.png`
        ]
    },
    {
        id: "P8",
        thumbnail: PREFIX_THUMBNAIL("P8"),
        images: [
            `${PREFIX("P8")}/1.png`
        ]
    },
    {
        id: "P9",
        thumbnail: PREFIX_THUMBNAIL("P9"),
        images: [
            `${PREFIX("P9")}/1.png`
        ]
    },
    {
        id: "P11",
        thumbnail: PREFIX_THUMBNAIL("P11"),
        images: [
            `${PREFIX("P11")}/1.png`
        ]
    },
    {
        id: "P13",
        thumbnail: PREFIX_THUMBNAIL("P13"),
        images: [
            `${PREFIX("P13")}/1.png`
        ]
    },
    {
        id: "P14",
        thumbnail: PREFIX_THUMBNAIL("P14"),
        images: [
            `${PREFIX("P14")}/1.png`
        ]
    },
    {
        id: "P15",
        thumbnail: PREFIX_THUMBNAIL("P15"),
        images: [
            `${PREFIX("P15")}/1.png`
        ]
    },
    {
        id: "P16",
        thumbnail: PREFIX_THUMBNAIL("P16"),
        images: [
            `${PREFIX("P16")}/1.png`,
            `${PREFIX("P16")}/2.png`
        ]
    },
    {
        id: "P17",
        thumbnail: PREFIX_THUMBNAIL("P17"),
        images: [
            `${PREFIX("P17")}/1.png`,
            `${PREFIX("P17")}/2.png`,
            `${PREFIX("P17")}/3.png`,
            `${PREFIX("P17")}/4.png`
        ]
    },
    {
        id: "P18",
        thumbnail: PREFIX_THUMBNAIL("P18"),
        images: [
            `${PREFIX("P18")}/1.png`
        ]
    },
    {
        id: "P21",
        thumbnail: PREFIX_THUMBNAIL("P21"),
        images: [
            `${PREFIX("P21")}/1.png`
        ]
    },
    {
        id: "P22",
        thumbnail: PREFIX_THUMBNAIL("P22"),
        images: [
            `${PREFIX("P22")}/1.png`
        ]
    },
    {
        id: "P24",
        thumbnail: PREFIX_THUMBNAIL("P24"),
        images: [
            `${PREFIX("P24")}/1.png`
        ]
    },
    {
        id: "P25",
        thumbnail: PREFIX_THUMBNAIL("P25"),
        images: [
            `${PREFIX("P25")}/1.png`,
            `${PREFIX("P25")}/2.png`,
            `${PREFIX("P25")}/3.png`,
            `${PREFIX("P25")}/4.png`
        ]
    },
    {
        id: "P26",
        thumbnail: PREFIX_THUMBNAIL("P26"),
        images: [
            `${PREFIX("P26")}/1.png`,
            `${PREFIX("P26")}/2.png`,
            `${PREFIX("P26")}/3.png`,
            `${PREFIX("P26")}/4.png`
        ]
    },
    {
        id: "P27",
        thumbnail: PREFIX_THUMBNAIL("P27"),
        images: [
            `${PREFIX("P27")}/1.png`,
            `${PREFIX("P27")}/2.png`
        ]
    },
    {
        id: "P28",
        thumbnail: PREFIX_THUMBNAIL("P28"),
        images: [
            `${PREFIX("P28")}/1.png`,
            `${PREFIX("P28")}/2.png`,
            `${PREFIX("P28")}/3.png`,
            `${PREFIX("P28")}/4.png`,
            `${PREFIX("P28")}/5.png`
        ]
    },
    {
        id: "P29",
        thumbnail: PREFIX_THUMBNAIL("P29"),
        images: [
            `${PREFIX("P29")}/1.png`
        ]
    },
    {
        id: "P31",
        thumbnail: PREFIX_THUMBNAIL("P31"),
        images: [
            `${PREFIX("P31")}/1.png`
        ]
    },
    {
        id: "P33",
        thumbnail: PREFIX_THUMBNAIL("P33"),
        images: [
            `${PREFIX("P33")}/1.png`
        ]
    },
    {
        id: "P34",
        thumbnail: PREFIX_THUMBNAIL("P34"),
        images: [
            `${PREFIX("P34")}/1.png`,
            `${PREFIX("P34")}/2.png`
        ]
    },
    {
        id: "P35",
        thumbnail: PREFIX_THUMBNAIL("P35"),
        images: [
            `${PREFIX("P35")}/1.png`,
            `${PREFIX("P35")}/2.png`,
            `${PREFIX("P35")}/3.png`,
            `${PREFIX("P35")}/4.png`,
            `${PREFIX("P35")}/5.png`,
            `${PREFIX("P35")}/6.png`,
            `${PREFIX("P35")}/7.png`
        ]
    },
    {
        id: "P36",
        thumbnail: PREFIX_THUMBNAIL("P36"),
        images: [
            `${PREFIX("P36")}/1.png`,
            `${PREFIX("P36")}/2.png`
        ]
    },
    {
        id: "P37",
        thumbnail: PREFIX_THUMBNAIL("P37"),
        images: [
            `${PREFIX("P37")}/1.png`,
            `${PREFIX("P37")}/2.png`,
            `${PREFIX("P37")}/3.png`,
            `${PREFIX("P37")}/4.png`
        ]
    },
    {
        id: "P38",
        thumbnail: PREFIX_THUMBNAIL("P38"),
        images: [
            `${PREFIX("P38")}/1.png`,
            `${PREFIX("P38")}/2.png`
        ]
    },
    {
        id: "P40",
        thumbnail: PREFIX_THUMBNAIL("P40"),
        images: [
            `${PREFIX("P40")}/1.png`,
            `${PREFIX("P40")}/2.gif`,
            `${PREFIX("P40")}/3.png`,
            `${PREFIX("P40")}/4.png`,
            `${PREFIX("P40")}/5.png`,
            `${PREFIX("P40")}/6.png`,
            `${PREFIX("P40")}/7.png`,
        ]
    },
    {
        id: "P41",
        thumbnail: PREFIX_THUMBNAIL("P41"),
        images: [
            `${PREFIX("P41")}/1.png`
        ]
    },
    {
        id: "P43",
        thumbnail: PREFIX_THUMBNAIL("P43"),
        images: [
            `${PREFIX("P43")}/1.png`,
            `${PREFIX("P43")}/2.png`,
            `${PREFIX("P43")}/3.png`,
            `${PREFIX("P43")}/4.png`
        ]
    },
    {
        id: "P44",
        thumbnail: PREFIX_THUMBNAIL("P44"),
        images: [
            `${PREFIX("P44")}/1.png`,
            `${PREFIX("P44")}/2.png`,
            `${PREFIX("P44")}/3.png`,
            `${PREFIX("P44")}/4.png`,
            `${PREFIX("P44")}/5.png`,
            `${PREFIX("P44")}/6.png`
        ]
    },
    {
        id: "P45",
        thumbnail: PREFIX_THUMBNAIL("P45"),
        images: [
            `${PREFIX("P45")}/1.png`,
            `${PREFIX("P45")}/2.png`
        ]
    },
    {
        id: "P46",
        thumbnail: PREFIX_THUMBNAIL("P46"),
        images: [
            `${PREFIX("P46")}/1.png`,
            `${PREFIX("P46")}/2.png`,
            `${PREFIX("P46")}/3.png`,
            `${PREFIX("P46")}/4.png`
        ]
    },
    {
        id: "P47",
        thumbnail: PREFIX_THUMBNAIL("P47"),
        images: [
            `${PREFIX("P47")}/1.png`
        ]
    },
    {
        id: "P48",
        thumbnail: PREFIX_THUMBNAIL("P48"),
        images: [
            `${PREFIX("P48")}/1.png`
        ]
    }
];

export { IGallery };
export default galleryData;
