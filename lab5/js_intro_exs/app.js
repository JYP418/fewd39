var response = prompt("What was your best marathon time?");

if (response > 4 && response <= 5) {
  alert("Your time was just average...");
} else if (response > 2 && response <=4) {
  alert("Your time is excellent!");
} else if (response > 5) {
  alert("Tick Tock, you might need to speed up!");
} else {
  alert("REALLY???");
}
