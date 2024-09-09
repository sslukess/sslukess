import { IPreviousJob } from "../components/previous-job/previousJob"

const flgDev: IPreviousJob = {
    title: "Software Engineer",
    employer: "Fitness and Lifestyle Group",
    yearFrom: "Aug, 2022",
    yearTo: "Feb, 2024",
    description: "After leading product requirements and planning at FLG Digital (see below), I moved to a development role, using my technical skills along side my analytical skills to deliver great solutions within the Scrum team."    
};

const flgBA: IPreviousJob = {
    title: "Technical Analyst",
    employer: "Fitness and Lifestyle Group",
    yearFrom: "Dec, 2021",
    yearTo: "Aug, 2022",
    description: "I joined Fitness and Lifestyle Group as the lead Technical Analyst in their Digital Product team. Leveraging my technical expertise and business stakeholder collaboration skillset, I delivered top-notch digital solutions with the Scrum team."
};

const instandaTechLead: IPreviousJob = {
    title: "Implementation Lead",
    employer: "INSTANDA",
    yearFrom: "Nov, 2019",
    yearTo: "Dec, 2021",
    description: "I took the opportunity of a leadership role at INSTANDA. This role required me to manage a skilled resource team to implement web-based insurance technology solutions."
};

const instandaConfigAnalyst: IPreviousJob = {
    title: "Analyst Engineer",
    employer: "INSTANDA",
    yearFrom: "Aug, 2018",
    yearTo: "Nov, 2019",
    description: "During this role, I worked as part of a small team to deliver bespoke solutions for clients. I was responsible for documenting product requirements and building applications/features using open web technologies and the INSTANDA platform."
};

const instandaPreSales: IPreviousJob = { 
    title: "Sales Engineer (Technical Presales Manager)",
    employer: "INSTANDA", 
    yearFrom: "March, 2024", 
    yearTo: "Present",
    description: "In this role I lead the Technical Pre-Sales (TPS) team within the EMEA region. Using my deep technical knowledge of web applications and commercial software, my team of Sales Engineers and I support the sales operations of the business and maintain the demo products. In addition to this, I manage multiple people within my team to ensure we meet deadlines and maintain sustainable workloads."
}

export const previousJobs: IPreviousJob[] = [
    instandaPreSales,
    flgDev,
    flgBA,
    instandaTechLead,
    instandaConfigAnalyst, 
]