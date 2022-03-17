import Personajes from "./Consulta.js"

document.querySelector('#buttonImages').addEventListener('click', async () => {
    const { personajes } = await Personajes.getData()
    console.log(personajes)
    const pj = document.querySelector('#nombre').value // Esto para buscar el nombre, luego abajo guardamos las imagenes en un array que busca las que conincidan con el nombre
    // Luego devolvemos esos valores como un array de textos
    const imagenesPJTemplate = personajes.find((p) => p.name == pj).imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}"/>`).join("") //TODO: modificar esto por triple ===

    document.querySelector('.personajes')[0].innerHTML = imagenesPJTemplate

     
})
