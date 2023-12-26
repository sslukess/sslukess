import { IPreviousJob } from "../components/previous-job/previousJob"

const flgDev: IPreviousJob = {
    title: "Software Developer",
    employer: "Fitness and Lifestyle Group",
    yearFrom: "Nov, 2022",
    yearTo: "Present",
    description: "After leading product requirements and planning at FLG Digital (see below), I returned to a development role, co-leading the team, using my technical skills to deliver great solutions within a Scrum team."    
};

const flgBA: IPreviousJob = {
    title: "Lead Technical Analyst",
    employer: "Fitness and Lifestyle Group",
    yearFrom: "Dec, 2021",
    yearTo: "Nov, 2022",
    description: "I joined Fitness and Lifestyle Group as the lead Technical Analyst in their Digital Product team. Leveraging my technical expertise and business stakeholder collaboration skillset, I delivered top-notch digital solutions with the Scrum team."
};

const instandaTechLead: IPreviousJob = {
    title: "Implementation Lead",
    employer: "INSTANDA",
    yearFrom: "Nov, 2019",
    yearTo: "Dec, 2021",
    description: "I was afforded the opportunity to take a leadership role at INSTANDA. This role required me to manage a skilled resource team to implement web-based insurance technology solutions."
};

const instandaConfigAnalyst: IPreviousJob = {
    title: "Product Engineer",
    employer: "INSTANDA",
    yearFrom: "Aug, 2018",
    yearTo: "Nov, 2019",
    description: "During this role, I worked as part of a small team to deliver bespoke solutions for clients. I was responsible for documenting product requirements and building applications/features using open web technologies and the INSTANDA platform."
};

export const previousJobs: IPreviousJob[] = [
    flgDev,
    flgBA,
    instandaTechLead,
    instandaConfigAnalyst
]