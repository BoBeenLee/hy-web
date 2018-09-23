interface IGallery {
    id: string;
    role: string;
    thumbnail: any;
    images?: any[];
}

// tslint:disable:object-literal-sort-keys
const galleryData: IGallery[] = [
    {
        id: "P27",
        role: "UXUI",
        thumbnail: require("./image/gallery/P27/P27_T.png"),
        images: [
            require("./image/gallery/P27/1.png"),
            require("./image/gallery/P27/2.png")
        ]
    }
];

export { IGallery };
export default galleryData;
