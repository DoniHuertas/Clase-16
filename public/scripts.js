const btn = document.querySelector("#request");
const lista = document.querySelector("#lista");

const agregarElemento = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users/consulta");

    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < response.data.length; i++) {
      const objetoUsuario = response.data[i];

      const li = document.createElement("li");
      li.textContent = objetoUsuario.userName;
      lista.appendChild(li);
    }
  } catch (e) {
    console.error(e);
  }
};

btn.addEventListener("click", agregarElemento);
