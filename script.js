let getInfo = document.getElementById('btn')
getInfo.addEventListener('click' , getUserInfo)

function getUserInfo(){
    let userName = document.getElementById('inputData').value
    let url = 'https://api.github.com/users/'+userName
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let result = document.getElementById('result')
        result.innerHTML = `
        <img src="${res.avatar_url}">
        <h1>Name : ${res.login}</h1>
        <p>Bio : ${res.bio}</p>
        <a href=" https://github.com/username=repositories"> public Repo : ${res.public_repos}</a>
        `
    })
}