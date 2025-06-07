

// const createBtn = document.getElementById("createBtn");

// function generateRandomCreateWord(){
//     const randomIndex = Math.floor(Math.random() * creatingVerbs.length);
//     const randomWord = creatingVerbs [randomIndex];
//     document.querySelector("p").textContent = `${randomWord}`;

// }
// createBtn.addEventListener("click", generateRandomCreateWord);


//     const creatingVerbs = [
//         "Act", "Arrange", "Assemble", "Combine", "Compose", "Construct", "Create",
//         "Design", "Develop", "Devise", "Formulate", "Generate", "Improve", "Invent",
//         "Imagine", "Plan", "Predict", "Prepare", "Revise", "Show", "Write"
//     ];

    

function setupCreateButton() {
    const createBtn = document.getElementById("createBtn");
    const creatingVerbs = [
        "Act", "Arrange", "Assemble", "Combine", "Compose", "Construct", "Create",
        "Design", "Develop", "Devise", "Formulate", "Generate", "Improve", "Invent",
        "Imagine", "Plan", "Predict", "Prepare", "Revise", "Show", "Write"
    ];

    createBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * creatingVerbs.length);
        const randomWord = creatingVerbs[randomIndex];
        document.querySelector("p").textContent = `${randomWord}`;
    });
}

setupCreateButton();



function setupEvaluateButton() {
    const evaluateBtn = document.getElementById("evaluateBtn");
    const evaluatingVerbs = [
        "Argue", "Assess", "Choose", "Compare", "Conclude", "Criticize", "Debate",
        "Decide", "Defend", "Determine", "Evaluate", "Justify", "Prioritize", "Rate",
        "Recommend", "Support", "Tell why", "Value"
    ];

    evaluateBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * evaluatingVerbs.length);
        const randomWord = evaluatingVerbs[randomIndex];
        document.querySelector("p.evaluateBtn").textContent = `${randomWord}`;
    });
}

setupEvaluateButton();


function setupAnalyzeButton() {
    const analyzeBtn = document.getElementById("analyzeBtn");
    const analyzingVerbs = [
        "Calculate", "Categorize", "Classify", "Compare", "Contrast", "Diagram",
        "Differentiate", "Discover", "Distinguish", "Examine", "Experiment",
        "Group", "Interpret", "Investigate", "Order", "Organize", "Question", 
        "Relate", "Research", "Select", "Sequence", "Solve", "Survey"
    ];

    analyzeBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * analyzingVerbs.length);
        const randomWord = analyzingVerbs[randomIndex];
        document.querySelector("p.analyzeBtn").textContent = `${randomWord}`;
    });
}

setupAnalyzeButton();


function setupApplyButton() {
    const applyBtn = document.getElementById("applyBtn");
    const applyingVerbs = [
        "Adapt", "Apply", "Calculate", "Change", "Compute", "Demonstrate",
        "Dramatize", "Draw", "Experiment", "Illustrate", "List", "Make",
        "Manipulate", "Practice", "Produce", "Sequence", "Show", "Teach", "Use"
    ];

    applyBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * applyingVerbs.length);
        const randomWord = applyingVerbs[randomIndex];
        document.querySelector("p.applyBtn").textContent = randomWord;
    });
}
setupApplyButton();


function setupUnderstandButton() {
    const understandBtn = document.getElementById("understandBtn");
    const understandingVerbs = [
        "Ask", "Calculate", "Convert", "Describe", "Discuss", "Explain", "Give examples",
        "Identify", "Locate", "Observe", "Recognize", "Report", "Research", "Retell",
        "Review", "Summarize", "Tell"
    ];

    understandBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * understandingVerbs.length);
        const randomWord = understandingVerbs[randomIndex];
        document.querySelector("p.understandBtn").textContent = randomWord;
    });
}
setupUnderstandButton();


function setupRememberButton() {
    const rememberBtn = document.getElementById("rememberBtn");
    const rememberingVerbs = [
        "Choose", "Cite", "Define", "Describe", "Give example", "Group", "Know",
        "Label", "List", "Listen", "Locate", "Match", "Memorize", "Name", "Quote",
        "Recall", "Recite", "Record", "Repeat", "Select", "State", "Underline"
    ];

    rememberBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * rememberingVerbs.length);
        const randomWord = rememberingVerbs[randomIndex];
        document.querySelector("p.rememberBtn").textContent = randomWord;
    });
}
setupRememberButton();

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let displayMenu = false;
        const menu = document.getElementById("socialHide");
        const hamburgerMenu = document.getElementById("hamburger");
        hamburgerMenu.addEventListener("click", function () {
            displayMenu = !displayMenu;
            menu.style.display = displayMenu ? 'block' : 'none';
        });
    }
}