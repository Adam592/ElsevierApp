export class Journal {
    issn: number;
    doi: string;
    title: string;
    citedbyCount: string;
    creator: string;
    pageRange: string;
    publicationName: string;
    url: string;
    volume: string;

    constructor(
        issn: number = 0,
        doi: string = "",
        title: string = "",
        citedbyCount: string = "",
        creator: string = "",
        pageRange: string = "",
        publicationName: string = "",
        url: string = "",
        volume: string = "",
    ) {
        this.issn = issn;
        this.doi = doi;
        this.title = title;
        this.citedbyCount = citedbyCount;
        this.creator = creator;
        this.pageRange = pageRange;
        this.publicationName = publicationName;
        this.url = url;
        this.volume = volume;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
