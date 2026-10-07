document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("message-input");
  const checkButton = document.getElementById("check-button");
  const clearButton = document.getElementById("clear-button");
  const resultsSection = document.getElementById("results");
  const verdictElement = document.getElementById("verdict");
  const flagsList = document.getElementById("flags");
  const nextStepsList = document.getElementById("next-steps");

  function resetVerdictClasses() {
    verdictElement.classList.remove("verdict-high", "verdict-medium", "verdict-low");
  }

  function showFriendlyPrompt() {
    const trimmed = messageInput.value.trim();
    if (!trimmed) {
      messageInput.focus();
      messageInput.setCustomValidity("Please paste a message to check.");
      messageInput.reportValidity();
      return true;
    }

    messageInput.setCustomValidity("");
    return false;
  }

  function renderResults(score, matchedPatterns) {
    resetVerdictClasses();

    let verdictText = "No obvious red flags found";
    let verdictClass = "verdict-low";

    if (score >= 6) {
      verdictText = "This looks like a scam";
      verdictClass = "verdict-high";
    } else if (score >= 2) {
      verdictText = "This has warning signs. Be careful.";
      verdictClass = "verdict-medium";
    }

    verdictElement.classList.add(verdictClass);
    verdictElement.querySelector(".verdict-text").textContent = verdictText;

    if (matchedPatterns.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No specific warning signs detected.";
      flagsList.appendChild(li);
    } else {
      matchedPatterns.forEach((pattern) => {
        const li = document.createElement("li");
        li.textContent = pattern.label + ": " + pattern.explanation;
        flagsList.appendChild(li);
      });
    }

    const nextSteps = [
      "Don't click links or open attachments from the message.",
      "Don't reply, send money, or share codes, passwords, or personal details.",
      "Contact the real organization directly using a phone number or website you already trust.",
      "Block the sender and report it if needed."
    ];

    nextSteps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      nextStepsList.appendChild(li);
    });

    if (score < 2) {
      const verifySentence = document.createElement("li");
      verifySentence.textContent = "That doesn't mean it's safe. Before you click or reply, contact the company using a phone number or website you already trust, not one from this message.";
      nextStepsList.appendChild(verifySentence);
    }

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function runCheck() {
    const text = messageInput.value.trim();
    if (showFriendlyPrompt()) {
      return;
    }

    flagsList.innerHTML = "";
    nextStepsList.innerHTML = "";

    let score = 0;
    const matchedPatterns = [];

    if (window.PATTERNS && Array.isArray(window.PATTERNS)) {
      window.PATTERNS.forEach((pattern) => {
        if (pattern.regex.test(text)) {
          score += Number(pattern.weight) || 0;
          matchedPatterns.push(pattern);
        }
      });
    }

    renderResults(score, matchedPatterns);
  }

  checkButton.addEventListener("click", runCheck);

  clearButton.addEventListener("click", () => {
    messageInput.value = "";
    messageInput.setCustomValidity("");
    flagsList.innerHTML = "";
    nextStepsList.innerHTML = "";
    resultsSection.hidden = true;
    resetVerdictClasses();
    verdictElement.querySelector(".verdict-text").textContent = "Result";
    messageInput.focus();
  });

  messageInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      runCheck();
    }
  });
});
