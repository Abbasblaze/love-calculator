function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert(
      "Ager Partner nahi hai to yaha kyun aia ho? jao kam karo apna, Fazool ma Time waste kia hai  "
    );
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2} 's love percentage: ${lovePercentage} `;

    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a Great Mathch. Keeping Looking";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML += "<br> There is pontential. Give it a try!";
    } else {
      result.innerHTML += "<br> Great Match! Love is in the Air";
    }
  }
}
