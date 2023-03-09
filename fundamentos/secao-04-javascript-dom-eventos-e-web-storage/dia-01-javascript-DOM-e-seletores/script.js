const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'pink';

const headersEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < headersEmergencyTasks.length; index += 1) {
    headersEmergencyTasks[index].style.backgroundColor = 'purple';
};

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'yellow';

const headersNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; headersNoEmergencyTasks.length; index += 1) {
    headersNoEmergencyTasks[index].style.backgroundColor = 'black';
};

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'green';

// o footer não alterou o background via goLive apesar de ter a mesmo estrutura do headerContainer; alterando direto no DevTools do browser funciona; reiniciei várias vezes o GoLive mas só o footer não funcionou, mesmo tentando via Id,TagNAme,query's...
