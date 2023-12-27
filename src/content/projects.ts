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
    This app is an exercise in content management and display, including categorisation and a search function. 
    This project is built using NextJS (App router) and a content integration with Contentful to source news articles.`
});

// TODO Make this feature exposed, then uncomment this out. 
// const kwikMaffs = new Project({
//     title: "kwikMaffs NPM Package",
//     appUrl: "htts://www.google.com",
//     codeUrl: "htts://www.google.com",
//     description: `This NPM package is a solution to JavaScript's inability to handle certain mathematical concepts.
//     The core concept is to address these issues via a string literal based solution and manual handling of numbers.
//     The solution is intentionally verbose and performance is not considered. It is simply a study of logic.`
// });

const autoTrip = new Project({
    title: "AutoTrip Travel Bot",
    appUrl: "https://autotrip.netlify.app",
    codeUrl: "https://github.com/sslukess/AutoTrip",
    description: `This application is a fun little chatbot born out of the OpenAI chat-gpt craze.
    This app is a dive into chat technology, network streaming and working with a ML model. 
    It is built using NextJS (App router) and will hopefully give you good ideas about where to travel.`
})

const sslukess = new Project({
    title: "Luke's Web Page",
    appUrl: "/",
    codeUrl: "https://github.com/sslukess/sslukess",
    description: `This webpage! This is my dedicated personal webapp, designed to showcase my professional portfolio. 
    The core requirement is a simple presentation of information, while still conveying my passion for UI design. 
    The application is built with Vite, React and TypeScript.`
})


export const projects: Project[] = [
    newsWeb, 
    autoTrip,
    sslukess
]