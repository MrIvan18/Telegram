let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

const buttons = document.querySelectorAll('.btn');

function resetButtons() {
    buttons.forEach(btn => btn.classList.remove('active'));
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const currentItem = btn.id.replace('btn', '');
        
        if (tg.MainButton.isVisible && item === currentItem) {
            tg.MainButton.hide();
            resetButtons();
            item = "";
        } else {
            tg.MainButton.setText(`Вы выбрали товар ${currentItem}!`);
            item = currentItem;
            tg.MainButton.show();
            resetButtons();
            btn.classList.add('active');
        }
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item); 
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`

usercard.appendChild(p);
