const addGameToGamesList = (games) => {
    games.forEach((game) => {
        var gameBox = document.createElement("div")
        var gameImage = document.createElement("img")
        var gameTitle = document.createElement("div")
            
        gameBox.className = "game"
        gameTitle.className = "game-title"
            
        gameImage.src = baseUrl+game.logo
        gameTitle.textContent = game.title
        gameBox.onclick = () => {openGameView(game.id)}
        
        gameBox.appendChild(gameImage)
        gameBox.appendChild(gameTitle)
        gamesList.appendChild(gameBox)
    })
}

const openGameView = (game_id) => {
    sessionStorage.setItem("open_game_id", game_id)
    location.replace("game-view.html")
    /*
    fetch(baseUrl+"/games?game_id="+game_id)
    .then(res => res.json())
    .then(data => {
        sessionStorage.setItem("open_game_id", data.id)
        location.replace("game-view.html")
    })
    */
}

// const checkUserToken = () => {
//     var accessToken = localStorage.getItem("accessToken")
//     if (accessToken == null) {location.replace("auth/login.html"); return {"status": false, "message": "accessToken not found"}}
//     else {
//         fetch(baseUrl+"/user/check-token/", {
//             method: "GET",
//             headers: {"Content-Type": "application/json", "authorization": `Bearer ${accessToken}`}
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             return {"status": data.status, "backend-message": data}
//         })
//     }
// }

// console.log(checkUserToken())