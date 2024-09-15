// JavaScript Object for Data
const profileData = {
    about: "Hello, I'm ALliha Tariq, a Computer scientist. Immersed in computer science, I've crafted many projects. These experiences ignited my passion for coding, problem-solving, and algorithmic design. Eager to expand my horizons, I'm ready to embrace challenges, innovate solutions, and contribute to the ever-evolving tech sector. This profile showcases my skills, projects, and professional experiences.",
    videoUrl: "your-video.mp4",
    skills: {
        soft: ["Leadership", "Communication", "Time Management,'Problem Solving'"],
        hard: ["Programming: Python,HTML/CSS, JavaScript, C++ (PF, OOP, DSA)", "Data Analysis"]
    },
    projects: [
        { name: "Games",date:"2022-23", description: "Shogi, Snake Game, Chess, Ludo" },
        { name: "Application",date:"semster II project", description: "MIcrosoft paint application console base(using OOP concept in python)" },
        { name :"Recipe Management system",date:"semster IV project", description :"HTML/CSS,Javascript,Nodejs (A recipe system that shows the recipes of different country"}
    ],
    certifications: [
        { title: "Codsoft (C++ Programming)", year :"September 2023 - October 2023" },
        { title: "Short Course: Data Science", year: "2023" }
    ],
    education: [
        { degree: "Fsc pre engineering", institution: "Punjab Group of college", year: "2020-2022" },
        { degree: "Bachelor's Degree in Computer Science", institution: "Information technology unversity lahre pakistan", year: "2022-2026" }
        
    ],
    contact: {
        email: "im.aliha.tariq@gmail.com",
        phone: "+923268703003", 
        linkedin: "https://www.linkedin.com/in/aliha-tariq/"
    }
};

// Function to Populate About Section
function populateAbout() {
    document.getElementById("about-content").textContent = profileData.about;
    
    document.getElementById("profile-video").src = profileData.videoUrl;
}

// Function to Populate Skills Section
function populateSkills() {
    const skillsContent = document.getElementById("skills-content");
    const softSkills = document.createElement("h3");
    softSkills.textContent = "Soft Skills";
    skillsContent.appendChild(softSkills);

    const softSkillsList = document.createElement("ul");
    profileData.skills.soft.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        softSkillsList.appendChild(li);
    });
    skillsContent.appendChild(softSkillsList);

    const hardSkills = document.createElement("h3");
    hardSkills.textContent = "Hard Skills";
    skillsContent.appendChild(hardSkills);

    const hardSkillsList = document.createElement("ul");
    profileData.skills.hard.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        hardSkillsList.appendChild(li);
    });
    skillsContent.appendChild(hardSkillsList);
}

// Function to Populate Projects Section
function populateProjects() {
    const projectsList = document.getElementById("projects-list");
    profileData.projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `${project.name} - <time datetime="${project.date}">${project.date}</time><p>${project.description}</p>`;
        projectsList.appendChild(li);
    });
}

// Function to Populate Certifications Section
function populateCertifications() {
    const certificationsList = document.getElementById("certifications-list");
    profileData.certifications.forEach(cert => {
        const li = document.createElement("li");
        li.textContent = `${cert.title} (${cert.year})`;
        certificationsList.appendChild(li);
    });
}

// Function to Populate Education Section
function populateEducation() {
    const educationList = document.getElementById("education-list");
    profileData.education.forEach(edu => {
        const li = document.createElement("li");
        li.textContent = `${edu.degree} - ${edu.institution} (${edu.year})`;
        educationList.appendChild(li);
    });
}

// Function to Populate Contact Section
function populateContact() {
    const contactInfo = document.getElementById("contact-info");
    contactInfo.innerHTML = `Email: ${profileData.contact.email}<br>
    phone: ${profileData.contact.phone}<br>
    LinkedIn: <a href="${profileData.contact.linkedin}">MY Profile</a>`;
}

// Initialize All Sections
function initializeProfile() {
    populateAbout();
    populateSkills();
    populateProjects();
    populateCertifications();
    populateEducation();
    populateContact();
}

// Run Initialization on Page Load
document.addEventListener("DOMContentLoaded", initializeProfile);

function changeLanguage(lang) {
    alert("Language changed to: " + lang);
}
