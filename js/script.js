calculateTime = () => {
    let data = new Date();
    let numeroDia = data.getDay();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let ampm = hora >= 12 ? "PM" : "AM";
    let nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    hora = hora % 24;
    hora = hora ? hora : "24";
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;

    document.querySelector("#dia").textContent = nomesDias[numeroDia];
    document.querySelector("#hora").textContent = hora;
    document.querySelector("#minuto").textContent = minuto;
    document.querySelector("#segundos").textContent = segundos;
    document.querySelector("#ampm").textContent = ampm;

    setTimeout(calculateTime, 200);

    
};

window.addEventListener("load", calculateTime);
