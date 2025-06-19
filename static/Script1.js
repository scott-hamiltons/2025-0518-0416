// JavaScript source code

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

const copyButtonF = document.getElementById('copyButtonF');
copyButtonF.addEventListener('click', () => {
    fetch('documents/2025-0511-1630.txt') // Replace 'your_text_file.txt' with the path to your file
        .then(response => response.text())
        .then(text => {
            navigator.clipboard.writeText(text)
                .then(() => {
                    alert('Code Copied!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        })
        .catch(err => {
            console.error('Failed to read the file: ', err);
        });
});
