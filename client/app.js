const body = $(`body`);

// const div = $(`<div></div>`);

// body.prepend(div);
// div.html(`
// `);

let chirps = [];

$.get("api/chirps", json => {
  $.map(json, obj => {
    let card = `
    <div class="col-md-7 mx-auto">    
        <div class="card my-2 mx-auto">
            <div class="card-body">
                <h5 class="card-title">Chirp</h5>
                <p class="card-text">${obj.text}</p>
                <a href="#" class="card-link">Edit Chirp</a>
                <a href="#" class="card-link">X</a>
            </div>
        </div>
    </div>
        `;
    chirps.push(card);
    console.log("json = ", json);
    console.log("obj = ", obj);
  });
  chirps.pop();

  chirps.map(chirp => {
    body.append(chirp);
    // console.log(chirp);
  });
  // console.log(chirps);
});

let submut = () => {
  chirp = $("#chirp_input").val();
  $.post("/api/chirps/", { text: chirp }, () => {
    location.href = "/";
  });
}

console.log(`app.js script end.`);
