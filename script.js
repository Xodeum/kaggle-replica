// Dataset upload and display
const datasetForm = document.getElementById('dataset-form');
const datasetList = document.getElementById('dataset-list');

datasetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = document.getElementById('dataset-upload').files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const dataset = reader.result;
        const li = document.createElement('li');
        li.textContent = file.name;
        datasetList.appendChild(li);
    };
    reader.readAsText(file);
});

// Competition creation and display
const competitionForm = document.getElementById('competition-form');
const competitionList = document.getElementById('competition-list');

competitionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('competition-name').value;
    const li = document.createElement('li');
    li.textContent = name;
    competitionList.appendChild(li);
});

// Kernel editor
const kernelEditor = document.getElementById('kernel-editor');

kernelEditor.addEventListener('input', () => {
    console.log(kernelEditor.value);
});