/**
OPERACIONES CRUD

Create -> Post Model.create({name: "Johny"})
Read -> Get Model.findById("65399ec2a826776c9d39b4ba") || Model.find({propiedad: valor}) || Model.find({}) -> Trae todos los docs
Update -> Put Model.findByIdAndUpdate("65399ec2a826776c9d39b4ba", {propiedad: valor})
Delete -> Delete Model.deleteMany() Model.deleteOne()

Usuario
 {
    mail
    userName
    password
 }

 Album
 {
    name
    lanzamiento
    canciones []
    info
 }

 Cancion
 {
    duracion
    album
    lanzamiento
 }

 QUE ES UNA PROMESA Y SUS ESTADOS
  Es un objeto que representa la eventual finalizacion de una función.
  Una promesa puede tener 3 estados:

  Pendiente (pending): Ejecutándose...

  Cumplida (fullfilled): Sigue el camino esperado
  Rechazada (rejected): Sigue el camino en caso de error
 */
