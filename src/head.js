export default function headComponent(){
    const header = document.createElement("div"),
logo = document.createElement('p');
header.id = "head";
logo.id = "logo";

logo.innerText = "Restaurante";

header.appendChild(logo);

document.body.appendChild(header);
}