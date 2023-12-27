export interface IProject {
    title: string;
    appUrl: string;
    codeUrl: string;
    description: string;
}

// new class for project generation. 
export class Project {

    constructor({title, appUrl, codeUrl, description}: IProject) {
        this._title = title;
        this._appUrl = appUrl; 
        this._codeUrl = codeUrl; 
        this._description = description
    };

    // class properties
    _title: string;
    _appUrl: string;
    _codeUrl: string;
    _description: string;

    get title() {
        return this._title
    };

    set title(val) {
        this._title = val;
        return;
    };

    get appUrl() {
        return this._appUrl
    };

    set appUrl(val) {
        this._appUrl = val; 
        return;
    };

    get codeUrl() {
        return this._codeUrl
    };

    set codeUrl(val) {
        this._codeUrl = val; 
        return;
    };

    get description() {
        return this._description
    };

    set description(val) {
        this._description = val; 
        return;
    };
}

// --- PROJECTS --- 

const newsWeb = new Project({
    title: "News Web",
    appUrl: "https://newsweb-v1.netlify.app",
    codeUrl: "https://github.com/sslukess/NewsWeb-V1",
    description: `A modern news site, designed for use by a small-to-medium newspaper.
    This app is a exercise in content management and display, including a categorisation and search function. 
    This project is built using NextJS 13 and a content integration with Contentful to source news articles.`
});

const kwikMaffs = new Project({
    title: "kwikMaffs NPM Package",
    appUrl: "htts://www.google.com",
    codeUrl: "htts://www.google.com",
    description: `This NPM package is a solution to JavaScript's inability to handle certain mathematical concepts.
    The underlying concepts is to address these issues via a string literal based solution and manual handling of numbers.
    The solution is intentionally verbose and performance is not considered. It is simply a study of logic.`
});

const autoTrip = new Project({
    title: "AutoTrip Travel Bot",
    appUrl: "htts://www.google.com",
    codeUrl: "htts://www.google.com",
    description: `This application is a fun little chatbot born out of OpenAI's chat-gpt craze.
    It is built using NextJS and will hopefully give you good ideas about where to travel.
    Note: One of the major learnings while building this application is the unpredicible nature of the gpt engine. If it says something odd, apologies.`
})

export const projects: Project[] = [
    newsWeb, 
    kwikMaffs,
    autoTrip
]