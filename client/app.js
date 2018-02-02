const body = $(`body`);

// const div = $(`<div></div>`);

// body.prepend(div);
// div.html(`
// `);

let chirps = [];

$.get("api/chirps", json => {
  Object.keys(json).forEach(id => {
    let card = `
    <div class="col-md-7 mx-auto">    
        <div class="card my-2 mx-auto">
            <div class="card-body">
                <h5 class="card-title">Chirp ID: ${id}</h5>
                <p class="card-text">${json[id].text}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${id}">
                Edit Chirp
              </button>                
              <button class="btn btn-danger" onclick="deleteIt(${id})">X</button>
            </div>
        </div>
    </div>
<br />
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Edit Chirp ID: ${id}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <input type="text" class="form-control my-1" id="chirp_edit${id}" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onclick="put(${id})" data-dismiss="modal" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
        `;
    chirps.push(card);
    // console.log("json = ", json);
    // console.log("obj = ", obj);
  });
  chirps.pop();

  chirps.map(chirp => {
    body.append(chirp);
    // console.log(chirp);
  });
  // console.log(chirps);
});

let deleteIt = (id) => {
  $.ajax({
    type: "DELETE",
    url: `/api/chirps/${id}`,
    success: location.href = "/"
  })
  console.log(id);
};

let post = () => {
  chirp = $("#chirp_input").val();
  $.post("/api/chirps/", { text: chirp }, () => {
    location.href = "/";
  }
);
}

let put = (id) => {
  newChirp = $(`#chirp_edit${id}`).val();
  $.ajax({
    type: "PUT",
    url: `/api/chirps/${id}`,
    data: { text: newChirp },
    success: location.href = "/"
  })
}

console.log(`app.js script end.`);
