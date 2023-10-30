const consultarUsuarios = async () => {
  const response = await axios.get("http://localhost:3000/users/consulta");
  console.log(response.data);
};

const crearUsuario = async () => {
  try {
    const body = {
      userName: "Doni",
      password: "otraContraseña",
      email: "doni@p5.com",
      age: 17,
    };

    body.age = Number(body.age);

    const response = await axios.post(
      "http://localhost:3000/users/crear",
      body
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};

const editarUsuario = async () => {
  try {
    const cambios = {
      age: 15,
    };

    const response = await axios.put(
      "http://localhost:3000/users/editar/654032fc807ac06f107321aa",
      cambios
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};

const eliminarUsuario = async () => {
  try {
    const response = await axios.delete(
      "http://localhost:3000/users/eliminar/654032fc807ac06f107321aa"
    );

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};

const formulario = document.querySelector("form");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const userName = document.getElementById("userName").value;
  const password = document.getElementById("pass").value;
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value;

  const body = { userName, password, age, email };

  //   const crearUsuario = {
  //     userName: userName,
  //     password: password,
  //     age: age,
  //     email: email,
  //   };

  try {
    const response = await axios.post(
      "http://localhost:3000/users/crear",
      body
    );

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
});
