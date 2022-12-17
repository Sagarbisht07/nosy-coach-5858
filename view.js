document.querySelector(".applybtn").addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Application has been sent successfully! ",
    showConfirmButton: false,
    timer: 2500,
  });
});
