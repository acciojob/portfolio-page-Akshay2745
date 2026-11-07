//your code here
   console.log({
     image: document.querySelector("img")?.getAttribute("src"),
     name: document.querySelector("h1")?.textContent,
     linkedin: document.querySelector("a")?.href,
     skillsText: document.querySelector("#skills")?.textContent.trim().length > 0,
     projects: document.querySelectorAll("#projects ul li").length
   })