// Simulated job data for Bangladeshi companies
const allJobs = [
    { title: "Web Developer", company: "Tech Corp Bangladesh", location: "Dhaka", description: "Full-stack development" },
    { title: "Web Developer", company: "WebWorks Bangladesh", location: "Chittagong", description: "Frontend Developer" },
    { title: "UI/UX Designer", company: "Design Studio BD", location: "Dhaka", description: "UI/UX Design" },
    { title: "Software Engineer", company: "Dev Solutions BD", location: "Dhaka", description: "Backend Developer" },
    { title: "Project Manager", company: "BuildNow BD", location: "Rajshahi", description: "Managing Projects" },
    { title: "Data Scientist", company: "Data Labs Bangladesh", location: "Sylhet", description: "Data Analysis & Modeling" }
];

let filteredJobs = [];
let jobIndex = 0;
const jobLimit = 3; // Number of jobs to show per search

// Function to search for jobs based on the title
function searchJob() {
    const jobTitle = document.getElementById('jobTitleInput').value.toLowerCase();
    filteredJobs = allJobs.filter(job => job.title.toLowerCase().includes(jobTitle));
    jobIndex = 0; // Reset job index on new search
    displayJobs();
}

// Function to display filtered jobs
function displayJobs() {
    const jobResultsDiv = document.getElementById('jobResults');
    jobResultsDiv.innerHTML = ""; // Clear previous results

    if (filteredJobs.length === 0) {
        jobResultsDiv.innerHTML = "<p>No jobs found for the given title.</p>";
        document.getElementById('showMoreBtn').style.display = "none";
        return;
    }

    const jobsToDisplay = filteredJobs.slice(jobIndex, jobIndex + jobLimit);
    
    jobsToDisplay.forEach(job => {
        jobResultsDiv.innerHTML += `
            <div class="job-card">
                <strong>${job.title}</strong><br>
                <span>${job.company} - ${job.location}</span><br>
                <p>${job.description}</p>
                <a href="https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(job.title)}%20${encodeURIComponent(job.company)}" target="_blank">Apply Now</a>
            </div>
        `;
    });

    jobIndex += jobLimit;

    // Show or hide the "Show More Jobs" button
    document.getElementById('showMoreBtn').style.display = jobIndex < filteredJobs.length ? "block" : "none";
}

// Function to show more jobs on button click
function showMoreJobs() {
    displayJobs();
}

// Function to simulate job application
function applyJob() {
    const jobTitle = document.getElementById('jobTitleInput').value;
    const linkedinURL = document.getElementById('linkedinInput').value;

    if (jobTitle && linkedinURL) {
        document.getElementById('jobTitleDisplay').textContent = `Applied for: ${jobTitle}`;
        document.getElementById('linkedinDisplay').textContent = `LinkedIn Profile: ${linkedinURL}`;
    } else {
        alert("Please enter both job title and LinkedIn URL to apply.");
    }
}

// Optional: Dynamic animation text updates (Bonus for interactivity)
const movingTitleElement = document.getElementById('movingTitle');
const movingTitles = ["You Looking Job"];
let titleIndex = 0;

setInterval(() => {
    movingTitleElement.textContent = movingTitles[titleIndex];
    titleIndex = (titleIndex + 1) % movingTitles.length;
}, 3000); // Changes title every 3 seconds
