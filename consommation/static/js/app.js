function passeWorShow() {
  const showPassword = document.getElementById("showPassowrd");
  const password = document.querySelector('input[type="password"]');

  showPassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      showPassword.style.fill = "#002D74";
    } else {
      password.type = "password";
      showPassword.style.fill = "gray";
    }
  });
}


passeWorShow();


// Données de consommation électrique par endroit
    const consumptionData = {
      labels: [
        "Bureau Comptable",
        "Bureau Secrétariat",
        "Cuisine",
        "Salle de Fête",
        "Chambre 1",
        "Couloir",
        "Chambre 3"
      ],
      datasets: [{
        data: [50, 30, 20, 40, 15, 10, 25],
        backgroundColor: [
          "#FF5733",
          "#FFC300",
          "#FF5733",
          "#FFC300",
          "#FF5733",
          "#FFC300",
          "#FF5733"
        ]
      }]
    };

    // Configuration du graphique
    const chartOptions = {
      responsive: true
    };

    // Sélectionnez l'élément du champ de sélection
    const locationSelect = document.getElementById("location-select");
    
    // Sélectionnez l'élément du graphique
    const consumptionChart = document.getElementById("consumption-chart").getContext("2d");

    // Créez le graphique à secteurs
    const myPieChart = new Chart(consumptionChart, {
      type: "pie",
      data: consumptionData,
      options: chartOptions
    });

    // Écoutez les changements de sélection
    locationSelect.addEventListener("change", function() {
      // Mettez à jour le graphique en fonction de la sélection (vous devrez remplir les valeurs de consommation)
      myPieChart.data.datasets[0].data = [/* Insérez les nouvelles valeurs de consommation ici */];
      myPieChart.update();
    }); 