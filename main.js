document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("skillForm");
  const matchesDiv = document.getElementById("matches");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const offer = document.getElementById("offerSkill").value;
      const learn = document.getElementById("learnSkill").value;

      const user = { name, offer, learn };
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Skill Posted!");
      form.reset();
    });
  }

  if (matchesDiv) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Can teach: ${user.offer}</p>
        <p>Wants to learn: ${user.learn}</p>
        <button class="btn">Connect</button>`;
      matchesDiv.appendChild(card);
    });
  }
});