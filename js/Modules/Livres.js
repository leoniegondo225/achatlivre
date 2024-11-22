//Ajouter un livre
export const AddLivre = () => {
     let userID = localStorage.getItem("userID")
     
     let LivreSubmit = document.getElementById("addLivre")

    LivreSubmit.addEventListener('submit', (e) => {
        e.preventDefault()

        let message = document.getElementById("message")
     let btnSubmit = document.getElementById("btnSubmit")

     let designation = document.getElementById("Designation").value
     let auteur = document.getElementById("Auteur").value
     let annee = document.getElementById("Annee").value
        
    let datepublication = document.getElementById("Datepublication").value
     let price = document.getElementById("Price").value
     let quantite = document.getElementById("Quantite").value
     let brefdescription = document.getElementById("Bref-description").value
     let image = document.getElementById("image")

     let database = JSON.parse(localStorage.getItem("Livres")) || []

     btnSubmit.classList.replace("btn-primary", "btn-warning")
        btnSubmit.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Traitement en cours...`

        message.innerHTML = "" //On vide d'abord le message d'erreur
        message.style.display = "none"


        //Créons l'url de l'image du livre
        let imageUrl = null
        const file = image.files[0]
        if(file && file.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = (e) => {

                //On continue le traitement si l'url de l'image a été générée
                database.push({
                    id: Math.random().toString(30), userID,
                    designation, auteur, annee, datepublication, price, quantite, brefdescription, image: e.target.result
                })
        
                localStorage.setItem("Livres", JSON.stringify(database))
        
                if(database.length > 0 ) {
                    setTimeout(() => {
                        message.innerHTML = "Livre ajouter avec success"
                        message.style.display = "block"
                        btnSubmit.classList.replace("btn-warning", "btn-primary")
                        btnSubmit.innerHTML = "Ajouter"
                        LivreSubmit.reset()
        
                        let booklist = document.getElementById("book-list")
                        
                        //On filtre pour ne afficher que les livres de l'utilisateur connecter
                        let tableHtml = database.filter(index => index.userID === userID)
                        
                        if(tableHtml && tableHtml.length > 0) {
                            let i = 1
                            booklist.innerHTML = ""
                            tableHtml.forEach(index => {
                                let {designation, auteur, annee, datepublication, price, quantite, brefdescription, image, id} = index
        
                                booklist.innerHTML += `
                                    <tr>
                                        <td>${i}</td>
                                        <td>${designation}</td>
                                        <td>${auteur}</td>
                                        <td>${annee}</td>
                                        <td>${price}</td>
                                        <td>${quantite}</td>
                                        <td>${datepublication}</td>
                                        <td>
                                            <img src="${image}" class="img-fluid rounded-3" width="150" alt="">
                                        </td>
                                        <td class="d-flex">
                                            <button class="btn btn-warning btn-sm me-2" data-id="${id}">Modifier</button>
                                            <button class="btn btn-danger btn-sm me-2" data-id="${id}">Supprimer</button>
                                        </td>
                                    </tr>
                                `
                            });
                        }
        
                    }, 1000);
        
                } else {
                    setTimeout(() => {
                        message.innerHTML = "Une erreure s'est produit, reessayer plus tard"
                        message.style.display = "block"
                        btnSubmit.classList.replace("btn-warning", "btn-primary")
                        btnSubmit.innerHTML = "Ajouter"
                    }, 1000);
                }
            } 
            reader.readAsDataURL(file)      
        } else {
            imageUrl = "Image non trouvé"
        }
    })



     
    
     
} 

//Modifier un livre
export const UpdteLivre = (id) => {
    
} 

//Supprimer un livre
export const DeleteLivre = (id) => {
    
} 

//Afficher les livres dans la page livre.html
export const ShowLivre = () => {
    
} 