let temporizador;
let sequenciaDeClicks = 0;

disintegrate.init();

document.onclick = (e) => {
  if (e.target.className === "pepe") {
    sequenciaDeClicks++;
    switch (sequenciaDeClicks) {
      case 1:
        Swal.fire({
          title: "Pare"
        });
        break;
      case 2:
        Swal.fire("Deixa eu codar");
        break;
      case 3:
        Swal.fire({
          title: "Se eu fosse voce nao faria isso!!!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#b293f9",
          cancelButtonColor: "#d33",
          confirmButtonText: "Não ligo",
          cancelButtonText: "Desculpe"
        }).then((result) => {
          if (result.isConfirmed) {
            disintegrate.init();

            const explode = document.querySelector(
              '[data-dis-type="simultaneous"]'
            );

            const disObj = disintegrate.getDisObj(explode);

            disintegrate.createSimultaneousParticles(disObj);
            explode.remove();

            setTimeout(function () {
              Swal.fire({
                title: "So estava brincando XD",
                showConfirmButton: false,
                showCancelButton: false,
              });
              setTimeout(function () {
                location.reload();
              }, 1500);
            }, 3000);
          } else {
            sequenciaDeClicks = 2;
          }
        });

        break;
    }
  }
};

// const animationSnap = function () {
//   this.name = "Snap";
//   this.animationDuration = 1000000000;
//   this.size = 3;
//   this.speedX = Math.random();
//   this.speedY = Math.random() * -1;
//   this.draw = (ctx, percentComplete) => {
//     ctx.beginPath();
//     ctz.fillReact(
//       this.startX - this.size / 2,
//       this.startY - this.seize / 2,
//       this.size,
//       this.size
//     );
//     const r = this.rgbArray[0];
//     const g = this.rgbArray[1];
//     const b = this.rgbArray[2];
//     const a = 1 - percentComplete;
//     ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
//     ctx.fill();
//     this.speedX *= 1.07;
//     this.speedY *= 1.07;
//     this.size *= 0.95;
//     this.startX += this.speedX;
//     this.startY += this.speedY;
//   };
// };

// disintegrate.addParticleType(animationSnap);
