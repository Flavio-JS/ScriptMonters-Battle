/*Controle de escolha de ScriptMonsters*/
let maxArrowClicks = 0;

function arrowRight() {
  maxArrowClicks++;
  document.querySelector(".arrow.left").style.setProperty("opacity", "100%");
  document.querySelector(".name-monster").style.setProperty("opacity", "100%");
  document.querySelector(".h2-container").innerHTML = "<h2>STATUS</h2>";
  if (maxArrowClicks == 3) {
    document.querySelector(".arrow.right").style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == 4) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 3;
  }

  console.log(`maxArrowLeft ${maxArrowClicks}`);

  if (maxArrowClicks == 0) {
    //remove Monster
    document.querySelector(".name-monster").style.setProperty("opacity", "50%");
    document.querySelector(".name-monster").innerHTML = "";
    document.querySelector(".main-info").innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 3 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li><li>Esquivar (aumenta esquiva 50%)</li></ul></li><li>Durante o jogo escolha uma das 4 ações</li></ul>";
    document.querySelector(".h2-container").innerHTML = "<h2>Como Jogar</h2>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    document.querySelector(".name-monster").innerHTML = "FireMonster";
    document.querySelector(".main-info").innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 10% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    document.querySelector(".name-monster").innerHTML = "AquaMonster";
    document.querySelector(".main-info").innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 10% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    document.querySelector(".name-monster").innerHTML = "IceMonster";
    document.querySelector(".main-info").innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }
}

function arrowLeft() {
  maxArrowClicks--;
  document.querySelector(".arrow.right").style.setProperty("opacity", "100%");
  if (maxArrowClicks == 0) {
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == -1) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 0;
  }

  console.log(`maxArrowLeft ${maxArrowClicks}`);

  if (maxArrowClicks == 0) {
    //remove Monster
    document.querySelector(".name-monster").style.setProperty("opacity", "50%");
    document.querySelector(".name-monster").innerHTML = "";
    document.querySelector(".main-info").innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 4 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li><li>Esquivar (aumenta esquiva 50%)</li></ul></li><li>Durante o jogo escolha uma das 4 ações</li></ul>";
    document.querySelector(".h2-container").innerHTML = "<h2>Como Jogar</h2>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    document.querySelector(".name-monster").innerHTML = "FireMonster";
    document.querySelector(".main-info").innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 10% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    document.querySelector(".name-monster").innerHTML = "AquaMonster";
    document.querySelector(".main-info").innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 10% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    document.querySelector(".name-monster").innerHTML = "IceMonster";
    document.querySelector(".main-info").innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }
}

//Definindo monster do Player

let monsterID = 0;

let fireMonsterStatus = {
  ID: 1,
  HP: 2000,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 10,
  CritChance: 50,
};

let aquaMonsterStatus = {
  ID: 2,
  HP: 2000,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 100,
  EsquivaChance: 10,
  CritChance: 40,
};

let iceMonsterStatus = {
  ID: 3,
  HP: 2000,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 15,
  CritChance: 40,
};

var player1 = {
  ID: 0,
  HP: 0,
  SkillAtk: 0,
  NormalAtk: 0,
  Cura: 0,
  EsquivaChance: 0,
  CritChance: 0,
};
var player2 = {
  ID: 0,
  HP: 0,
  SkillAtk: 0,
  NormalAtk: 0,
  Cura: 0,
  EsquivaChance: 0,
  CritChance: 0,
};

function escolherMonster1() {
  monsterID = maxArrowClicks;
  if (monsterID == 0) {
    alert("Escolha um script monster");
    return 0;
  }
  if (monsterID == fireMonsterStatus.ID) {
    player1 = { fireMonsterStatus };
    maxArrowClicks = 0;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == aquaMonsterStatus.ID) {
    maxArrowClicks = 0;
    player1 = { aquaMonsterStatus };
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == iceMonsterStatus.ID) {
    maxArrowClicks = 0;
    player1 = { iceMonsterStatus };
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  }

  alert(
    `Monster Escolhido com sucesso ! Antes do Player2 Escolher o monster, clique em "OK" para que ele não veja o Monster esolhido`
  );

  document
    .querySelector(".action-button.player1")
    .style.setProperty("display", "none");

  document
    .querySelector(".action-button.player2")
    .style.setProperty("display", "inline");
}

function escolherMonster2() {
  monsterID = maxArrowClicks;
  if (monsterID == 0) {
    alert("Escolha um script monster");
    return 0;
  }
  if (monsterID == fireMonsterStatus.ID) {
    player2 = { fireMonsterStatus };
    maxArrowClicks = 0;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == aquaMonsterStatus.ID) {
    maxArrowClicks = 0;
    player2 = { aquaMonsterStatus };
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == iceMonsterStatus.ID) {
    maxArrowClicks = 0;
    player2 = { iceMonsterStatus };
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  }

  alert(`Monster Escolhido com sucesso ! Que vença o melhor ScriptMaster`);

  document
    .querySelector(".action-button.player1")
    .style.setProperty("display", "none");

  document
    .querySelector(".action-button.player2")
    .style.setProperty("display", "none");

  document.querySelector(".player1View").innerHTML = "";
  document.querySelector(".player2View").innerHTML = "";

  //parei na parte de criar o layout de batalha
}
