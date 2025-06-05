

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

   

    const applyingVerbs = [
        "Adapt", "Apply", "Calculate", "Change", "Compute", "Demonstrate",
        "Dramatize", "Draw", "Experiment", "Illustrate", "List", "Make", 
        "Manipulate", "Practice", "Produce", "Sequence", "Show", "Teach", "Use"
    ];

    const understandingVerbs = [
        "Ask", "Calculate", "Convert", "Describe", "Discuss", "Explain", "Give examples",
        "Identify", "Locate", "Observe", "Recognize", "Report", "Research", "Retell",
        "Review", "Summarize", "Tell"
    ];

    const rememberingVerbs = [
        "Choose", "Cite", "Define", "Describe", "Give example", "Group", "Know",
        "Label", "List", "Listen", "Locate", "Match", "Memorize", "Name", "Quote",
        "Recall", "Recite", "Record", "Repeat", "Select", "State", "Underline"
    ];
