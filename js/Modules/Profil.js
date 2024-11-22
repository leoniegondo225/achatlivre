//Profil user
export const AfficheProfil = () => {
    let userID = (localStorage.getItem("userID")) || "Non connecter"
    if(userID === "Non connecter") location.href ="/"
    else {
        let profil = document.getElementById("profil")

        //On commence par recupérer les éléments de la base de données
        let database = JSON.parse(localStorage.getItem("utilisateurs")) || []

        if (database && database.length > 0) {

                //La base n'étant pas vide, on recherche l'utilisateur par son id
                let infoUsers = database.find(index => index.id === userID)
                
                //On destructure notre objet pour recupérer les infos essentiels
                let {nom, prenom, email, photo} = infoUsers 

                let profil = document.getElementById("profil")

               // photo = (photo && photo !== undefined && photo !== "") ? photo : "./images/user.png" 

                profil.innerHTML = `
                        <div class="photo" >
                            <img src=${photo !== undefined ? photo : "./images/user.png"} class="img-fluid rounded-circle" width="150" alt="">
                        </div>
                        
                        <h2 class="card-title pt-3">Mon profil</h2>
                        <p class="pt-3"><strong>Nom :</strong> ${nom} </p>
                        <p><strong>PRENOM :</strong> ${prenom}</p>
                        <p><strong>Email :</strong> ${email}</p>
                        <div class="d-flex pt-3 align-content-center justify-content-center">
                                <a href="/update-profil.html" class="btn btn-primary  btn-sm me-2"> Mettre à jour</a>
                                <a href="#a" class="btn btn-danger btn-sm" id="deconnexion">Se deconnecter</a>
                        </div>
                `
        } else {
            location.href ="/"
        }
    }
}

//On deconnecte notre user
export const Deconnexion = () => {
    let btnDeconnect = document.getElementById("deconnexion")
    btnDeconnect.addEventListener("click", () => {
        localStorage.removeItem("userID") //On supprime l'id de l'utilisateur pour empecher qu'il ai accès au profil sans se connecter d'ab
        location.href = "/"
    })
}