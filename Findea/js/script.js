const pinterestImg = document.getElementById("pinterest");
const facebookImg = document.getElementById("facebook");
const instagramImg = document.getElementById("instagram");
const emailImg = document.getElementById("email");

pinterestImg.addEventListener("mouseenter", () => {
  pinterestImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-a.svg";
});

pinterestImg.addEventListener("mouseleave", () => {
  pinterestImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-n.svg";
});

facebookImg.addEventListener("mouseenter", () => {
    facebookImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-a.svg";
});

facebookImg.addEventListener("mouseleave", () => {
    facebookImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-n.svg";
});

instagramImg.addEventListener("mouseenter", () => {
    instagramImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-a.svg";
});

instagramImg.addEventListener("mouseleave", () => {
    instagramImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-n.svg";
});

emailImg.addEventListener("mouseenter", () => {
    emailImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-a.svg";
  });

emailImg.addEventListener("mouseleave", () => {
    emailImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-n.svg";
  });