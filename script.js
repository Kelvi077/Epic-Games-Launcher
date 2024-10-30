// hover on discover
$(".discover-text").hover(
  function () {
    $(".discover-text-2").css("position", "relative");
    $(".discover-text-2").css("left", "0.5em");
  },
  function () {
    $(".discover-text-2").css("position", "relative");
    $(".discover-text-2").css("left", "0em");
  }
);

// hover on spotlight-text
$(".spotlight-text").hover(
  function () {
    $(".spotlight-text-2").css("position", "relative");
    $(".spotlight-text-2").css("left", "0.5em");
  },
  function () {
    $(".spotlight-text-2").css("position", "relative");
    $(".spotlight-text-2").css("left", "0em");
  }
);

//change pictures in main content

// Img 1 change Halloween sale
$(".div-game-sale-1").on("click", openImg1);
let x1 = true;
function openImg1() {
  if (x1) {
    $(".Halloween-sale").hide();
    $(".main-img-div").append(
      '<img src="https://cdn2.unrealengine.com/epic-games-halloween-sale-2021-1920x1080-1de3a1cb7009.png" alt="Description" class="Halloween-sale">'
    );
  }
}

// Img 2 change wukong
$(".div-game-sale-2").on("click", openImg2);
let x2 = true;
function openImg2() {
  if (x2) {
    $(".Halloween-sale").hide();
    $(".main-img-div").append(
      '<img src="https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-1l4n1.png" alt="Description" class="Halloween-sale">'
    );
  }
}

// Img 3 change Fortnite
$(".div-game-sale-3").on("click", openImg3);
let x3 = true;
function openImg3() {
  if (x3) {
    $(".Halloween-sale").hide();
    $(".main-img-div").append(
      '<img src="https://img.nvidiagrid.net/apps/101138111/ZZ/TV_BANNER_01_6c203356-2658-47f1-be08-3c04cef077ad.jpg" alt="Description" class="Halloween-sale">'
    );
  }
}

// Img 4 change Hogwarts Legacy
$(".div-game-sale-4").on("click", openImg4);
let x4 = true;
function openImg4() {
  if (x4) {
    $(".Halloween-sale").hide();
    $(".main-img-div").append(
      '<img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacyDigitalDeluxeEdition_AvalancheSoftware_Editions_S1_2560x1440-65f2cce001ab1893cca57f48aeb25196" alt="Description" class="Halloween-sale">'
    );
  }
}

// Img 5 change Assassins Creed Odyssay
$(".div-game-sale-5").on("click", openImg5);
let x5 = true;
function openImg5() {
  if (x5) {
    $(".Halloween-sale").hide();
    $(".main-img-div").append(
      '<img src="https://cdn.geeksandgamers.com/wp-content/uploads/2018/10/Assassin-s-Creed-Odyssey-2018-game-Ubisoft_2560x1440.jpg" alt="Description" class="Halloween-sale">'
    );
  }
}
