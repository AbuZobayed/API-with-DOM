const allplayers = () => {
  const searchValue = document.getElementById('search-box').value;

const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`

  // console.log(url);


  fetch(url)
  .then(Response => Response.json())
  .then(data => showPlayerDetails(data.player))
};

const showPlayerDetails = (players) => {
  for(const player of players){
    const parent = document.getElementById('player-container');
  const div = document.createElement('div')
  div.innerHTML = `
  <div class="card border p-5">
    <div class="pro-pic">
        <img class="w-25" src="" alt="">
    </div>
    <h2>Name:Zobayed </h2>
    <h5>Country:</h5>
    <p>Description :</p>
    <div class="allbutton">
        <button class="btn btn-danger">Remove</button>
        <button class="btn btn-success">Details</button>
    </div>
</div>
  `
  parent.appendChild(div);
  }
  console.log(player);
}