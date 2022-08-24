const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

let input = document.getElementById("name");

const checkReservation = function () {
  console.log(input.value);
  if (input.value in reservations) {
    if (reservations[input.value].claimed === false) {
      console.log(`welcome ${input.value}`);
    } else {
      console.log(`Hi ${input.value}, U already claimed`);
    }
  } else {
    console.log(`sorry ${input.value}, there is nothing under that name`);
  }
};
