document.getElementById('resumeForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = new FormData(this);
  const data = {};
  form.forEach((value, key) => (data[key] = value));

  const resumeHTML = `
    <h2 class='text-xl font-bold mb-2'>${data.name}</h2>
    <p><strong>Email:</strong> ${data.email} | <strong>Phone:</strong> ${data.phone}</p>
    <p class='mt-4'><strong>Professional Summary</strong><br>${data.summary}</p>
    <p class='mt-4'><strong>Education</strong><br>${data.education}</p>
    <p class='mt-4'><strong>Experience</strong><br>${data.experience}</p>
    <p class='mt-4'><strong>Skills</strong><br>${data.skills}</p>
  `;
  document.getElementById('resumeOutput').innerHTML = resumeHTML;
  document.getElementById('outputSection').classList.remove('hidden');
});

function downloadPDF() {
  const content = document.getElementById('resumeOutput').innerHTML;
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Resume</title></head><body>${content}</body></html>`);
  win.document.close();
  win.print();
}
