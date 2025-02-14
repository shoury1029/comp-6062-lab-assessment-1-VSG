const studentFullName = 'Varun Shoury Golluru';
const studentNumber = 11998157;
console.log(`${studentFullName} ~ ${studentNumber}`);
const headerContent = document.querySelector('h1') ;
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
headerContent.classList.add(`headingPrimary`);