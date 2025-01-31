export class Article {
    issn: string;
    openaccessType: string;
    url: string;
    title: string;
    publisher: string;
    citeScoreCurrentMetric: string;
    citeScoreCurrentMetricYear: string;
    citeScoreTracker: string;
    citeScoreTrackerYear: string;
    citeScoreYearInfo: string;

    constructor(
        issn: string = "",
        openaccessType: string = "",
        url: string = "",
        title: string = "",
        publisher: string = "",
        citeScoreCurrentMetric: string = "",
        citeScoreCurrentMetricYear: string = "",
        citeScoreTracker: string = "",
        citeScoreTrackerYear: string = "",
        citeScoreYearInfo: string = "",
    ) {
        this.issn = issn;
        this.openaccessType = openaccessType;
        this.url = url;
        this.title = title;
        this.publisher = publisher;
        this.citeScoreCurrentMetric = citeScoreCurrentMetric;
        this.citeScoreCurrentMetricYear = citeScoreCurrentMetricYear;
        this.citeScoreTracker = citeScoreTracker;
        this.citeScoreTrackerYear = citeScoreTrackerYear;
        this.citeScoreYearInfo = citeScoreYearInfo;
    }

}

