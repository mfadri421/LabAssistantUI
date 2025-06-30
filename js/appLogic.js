document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('protocol-container');
  const stepDisplay = document.getElementById('step-details');
  const nextBtn = document.getElementById('next-step');
  const protocol = await loadProtocol('./protocols/default_protocol.json');

  container.innerHTML = `<h2>${protocol.title}</h2>`;
  let current = 0;

  function showStep(index) {
    const step = protocol.steps[index];
    stepDisplay.innerHTML = `<p>Step ${index + 1}: ${step.step}</p>`;
    nextBtn.disabled = false;
  }

  nextBtn.addEventListener('click', () => {
    current += 1;
    if (current < protocol.steps.length) {
      showStep(current);
    } else {
      stepDisplay.innerHTML = "<p>✅ Protocol complete!</p>";
      nextBtn.disabled = true;
    }
  });

  showStep(current);
});