window.addEventListener("load", function () {
  console.log("Script loaded");

  init();
});

function init() {
  console.log("in init()");
  console.log("in init()2");
  console.log("We made it");
  
  console.log("made it here");
  console.log("We made it");
  fetchArtists();
  console.log("We made it");
    // deleteArtist();
    document.newArtistForm.submit.addEventListener('click', function(evt){
      evt.preventDefault();
      postNewArtist(evt);
    });
  }
  console.log("made it here too");

function showArtists(artists){
        var dataDiv = document.getElementById('artistData');
        dataDiv.textContent = '';
    for(let i =0; i < artists.length; i++){

        let h1 = document.createElement('h1');
        h1.textContent = artists[i].name;
        dataDiv.appendChild(h1);
        let bq = document.createElement('blockquote');
        bq.textContent = artists[i].listOfWork;
        dataDiv.appendChild(bq);
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = artists[i].birthYear;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = artists[i].deathYear;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = artists[i].artStyle;
        ul.appendChild(li);
      
        dataDiv.appendChild(ul);
      
      
      
    }
      }
      function fetchArtists() {
          console.log('fetch');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `api/artists/`);
        xhr.onreadystatechange = function(){
            console.log(xhr);
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              let artistsJson = xhr.responseText;
              let artists = JSON.parse(artistsJson);
              showArtists(artists);
            }
          }
        };
        xhr.send();
      }
      function updateArtist(e) {
        console.log('ok, you got here');
        let artistDiv = document.getElementById('artistData');
         document.getElementById('name').value;
         document.getElementById('birthYear').value;
         document.getElementById('deathYear').value;
         document.getElementById('deathYear').value;
         document.getElementById('artStyle').value;
         document.getElementById('listOfWork').value;
         console.log(artistDiv);
        //  let json = JSON.stringify(updateArtist);
       }

       let json 
       function update() {
        console.log('update');
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', `api/artists/`);
      xhr.onreadystatechange = function(){
          console.log(xhr);
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            let artistsJson = xhr.responseText;
            let artists = JSON.parse(artistsJson);
            updateArtist(artists);
          }
        }
      };xhr.setRequestHeader('Content-type','application/json')
      xhr.send(JSON.stringify(updateArtist));
      console.log('artist:');
      xhr.send();
    }  
  
 
 
 
 
 
//     let artist = [];
//     artist = [{}, {}, ...{}];
//    artist[i] = 
//       {
//     id = 0,
//     name = '',
//     birthYear = number,
//     deathYear = number,
//     artStyle = '',
//     listOfWork = ''
//     }
//    {
//        name: form.name.value,
//          birthYear: form.birthYear.value,
//          deathYear: form.deathYear.value,
//          artStyle: form.artStyle.value,
//        //   imageUrl: form.imageUrl.value,
//          listOfWork: form.listOfWork.value
//    }
//    console.log(artist);
//    let xhr = new XMLHttpRequest();
//    xhr.open('GET', 'api/artists/');
//    xhr.onreadystatechange = function(){
//      if (xhr.readyState === 4) {
//        if (xhr.status === 201 || xhr.status === 200) {
//          let savedArtist = JSON.parse(xhr.responseText);
//          displayArtists(artist);
//        }
//        else {
//          console.error('Error creating artist, status=' + xhr.status);
//          console.error(xhr.responseText);
//          displayError('Invalid artist data.');
//        }
//      }
//    };
//    xhr.setRequestHeader('Content-type','application/json')
//    xhr.send(JSON.stringify(artist));
//  }


//     let artistDiv = document.addEventListener('keyup', function(event){

// });
// }
  function displayArtists(artists) {
    // console.log(artists);
    let artistDiv = document.getElementById('artistData');
    artistDiv.textContent = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Artists';
    artistDiv.appendChild(h3);
    let ul = document.createElement('ul');
    for (var i = 0; i < artists.length; i++) {
      let li = document.createElement('li');
      li.textContent = artists[i].name + " " + artists[i].name;
      ul.appendChild(li);
    }
    artistDiv.appendChild(ul)
 }

 function postNewArtist(e) {
    let form = document.newArtistForm;
    let newArtist = {
      name: form.name.value,
      birthYear: form.birthYear.value,
      deathYear: form.deathYear.value,
      artStyle: form.artStyle.value,
    //   imageUrl: form.imageUrl.value,
      listOfWork: form.listOfWork.value
    };
    console.log(newArtist);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/artists/');
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 201 || xhr.status === 200) {
          let savedArtist = JSON.parse(xhr.responseText);
          displayArtists(savedArtist);
        }
        else {
          console.error('Error creating artist, status=' + xhr.status);
          console.error(xhr.responseText);
          displayError('Invalid artist data.');
        }
      }
    };
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send(JSON.stringify(newArtist));
    console.log('artist:');
  }

// function deleteArtist(e){
//     let deletedArtist = postNewArtist.newArtist;
//     console.log('artist:' + deletedArtist);

    // let xhr = new XMLHttpRequest();
    // xhr.open('DELETE', `api/{id}}/`);
    // xhr.onreadystatechange = function(){
    //       let savedArtist = JSON.parse(xhr.responseText);
    //       displayArtists(savedArtist);
    //     };
    // xhr.setRequestHeader('Content-type','application/json')
    // xhr.send(JSON.stringify(artistDiv));

// }

// xhr.open('PUT', 'api/artists/' + artistId);
// xhr.send(JSON.stringify(updatedArtist));

// xhr.open('Delete', 'api/artists/' + artistId);



// ROB SOLUTION
  // window.addEventListener('load', function(e) {
  //   console.log('document loaded');
  //   init();
  // });
//   function init() {
//     document.filmForm.lookup.addEventListener('click', function(event) {
//       event.preventDefault();
//       var filmId = document.filmForm.filmId.value;
//       if (!isNaN(filmId) && filmId > 0) {
//         getFilm(filmId);
//       }
//     });
//     document.newFilmForm.submit.addEventListener('click', function(evt){
//       evt.preventDefault();
//       postNewFilm(evt);
//     });
//   }
//   function getFilm(filmId) {
//     console.log('getFilm(): filmId=' + filmId);
//     // TODO:
//     // * Use XMLHttpRequest to perform a GET request to "api/films/"
//     //   with the filmId appended.
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'api/films/' + filmId);
//     xhr.onreadystatechange = function() {
//     	if ( xhr.readyState === 4 ) {
//     		if ( xhr.status === 200 ) {
//   		    // * On success, if a response was received parse the film data
//   		  	//   and pass the film object to displayFilm().
//   		  	let film = JSON.parse(xhr.responseText);
//   		  	console.log(xhr.responseText);
//           console.log(film);
//           displayFilm(film);
//   	  	}
//   	  	else {
//   		  	// * On failure, or if no response text was received, put "Film not found"
//   		  	//   in the filmData div.
//           console.error('Film not found.');
//           // TODO display film not found in div.
//           displayError('Film not found.')
//   	  	}
//     	}
//     };
//     xhr.send();
//   }
//   function displayError(msg) {
//     let div = document.getElementById('filmData');
//     div.textContent = msg;
//   }
//   function displayFilm(film) {
//     var dataDiv = document.getElementById('filmData');
//     dataDiv.textContent = '';
//     let h1 = document.createElement('h1');
//     h1.textContent = film.title;
//     dataDiv.appendChild(h1);
//     let bq = document.createElement('blockquote');
//     bq.textContent = film.description;
//     dataDiv.appendChild(bq);
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     li.textContent = film.rating;
//     ul.appendChild(li);
//     li = document.createElement('li');
//     li.textContent = film.releaseYear;
//     ul.appendChild(li);
//     li = document.createElement('li');
//     li.textContent = film.length;
//     ul.appendChild(li);
//     dataDiv.appendChild(ul);
//     // TODO: pass film.id to a displayActors(filmId) function
//     //       that will XHR to retrieve /api/films/{filmId}/actors
//     //       to get an array of actors, then list them in the actorData
//     //       div.
//     fetchActors(film.id);
//   }
//   function fetchActors(filmId) {
//     //TODO: AJAX call to /api/films/{filmId}/actors
//     // then pass actors list to displayActors()
//     let xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'api/films/' + filmId + '/actors');
//     xhr.open('GET', `api/films/${filmId}/actors`);
//     xhr.onreadystatechange = function() {
//        if (xhr.readyState === 4) {
//          if (xhr.status === 200) {
//            let actorsJson = xhr.responseText;
//            let actors = JSON.parse(actorsJson);
//            displayActors(actors);
//          }
//        }
//     };
//     xhr.send();
//   }
//   function displayActors(actors) {
//      // console.log(actors);
//      let actorsDiv = document.getElementById('actorData');
//      actorsDiv.textContent = '';
//      let h3 = document.createElement('h3');
//      h3.textContent = 'Cast';
//      actorsDiv.appendChild(h3);
//      let ul = document.createElement('ul');
//      for (var i = 0; i < actors.length; i++) {
//        let li = document.createElement('li');
//        li.textContent = actors[i].firstName + " " + actors[i].lastName;
//        ul.appendChild(li);
//      }
//      actorsDiv.appendChild(ul)
//   }
//   function postNewFilm(e) {
//     let form = document.newFilmForm;
//     let newFilm = {
//       title: form.title.value,
//       description: form.description.value,
//       releaseYear: form.releaseYear.value,
//       rating: form.rating.value,
//       length: form.length.value
//     };
//     console.log(newFilm);
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'api/films');
//     xhr.onreadystatechange = function(){
//       if (xhr.readyState === 4) {
//         if (xhr.status === 201 || xhr.status === 200) {
//           let savedFilm = JSON.parse(xhr.responseText);
//           displayFilm(savedFilm);
//         }
//         else {
//           console.error('Error creating film, status=' + xhr.status);
//           console.error(xhr.responseText);
//           displayError('Invalid film data.');
//         }
//       }
//     };
//     xhr.setRequestHeader('Content-type','application/json')
//     xhr.send(JSON.stringify(newFilm));
//   }