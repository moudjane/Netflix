window.onload = function () {
  console.log(Math.floor(Math.random() * 10));
  var imagesStudioGhibli = ['Arrietty.jpg', 'KikiLaPetiteSorciere.jpg', 'LaCollineAuxCoquelicots.jpg', 'LeChateauAmbulant.jpg', 'LeChateauDansLeCiel.jpg', 'LeVentSeLeve.jpg', 'LeVoyageDeChihiro.jpg', 'MonVoisinTotoro.jpg', 'Nausicaa.jpg', 'Ponyo.jpg', 'PrincesseMononoke.jpg', 'SiTuTendsLoreille.jpg', 'SouvenirsDeMarnie.jpg',];
  var imagesAnimes = ['Arcane.jpg', 'Baki.jpg', 'GreatPretender.jpg', 'JeVeuxMangerTonPancreas.jpg', 'Jojos.jpg', 'Toradora.jpg', 'YourName.jpg'];
  var imagesViolentMovie = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
  var imagesSciFi = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
  let i= 0;

    // STUDIO GHIBLI
    var MyList = document.getElementById("Studio_Ghibli")
    while (i < imagesStudioGhibli.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="./assets/img/StudioGhibli/' + imagesStudioGhibli[Math.floor(Math.random() * imagesStudioGhibli.length)] + '" class="rounded"></a></div></div>')
    }
    i=0;

    // ANIMES
    var MyList = document.getElementById("Animes")
    while (i < imagesAnimes.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="./assets/img/Animes/' + imagesAnimes[Math.floor(Math.random() * imagesAnimes.length)] + '" class="rounded"></a></div></div>')
    }
    i=0;

    // VIOLENT MOVIE
    var MyList = document.getElementById("Violent_Movie")
    while (i < imagesViolentMovie.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="./assets/img/ViolentMovie/' + imagesViolentMovie[Math.floor(Math.random() * imagesViolentMovie.length)] + '" class="rounded"></a></div></div>')
    }
    i=0;

    // SCI-FI
    var MyList = document.getElementById("Sci-Fi")
    while (i < imagesSciFi.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="./assets/img/Sci-Fi/' + imagesSciFi[Math.floor(Math.random() * imagesSciFi.length)] + '" class="rounded"></a></div></div>')
    }
    i=0;  
  }