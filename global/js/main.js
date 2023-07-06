

const wrap = document.querySelector('.wrap')

for(let i = 0; i <= 25; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add('block');
  wrap.appendChild(blocks);
}

function animateBlocks () {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-900, 800);
    },
    translateY: function() {
      return anime.random(-600,600);
    },
    scale: function () {
      return anime.random(0.7,2)
    },
    duration: 2500,
    complete: animateBlocks,
  });
}

animateBlocks();

VanillaTilt.init(document.querySelectorAll(".works-card"), {
  max: 8,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".works-card"));












