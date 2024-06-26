 function generateBingoCards() {
        var numCards = document.getElementById("numCards").value;
        var bingoCardsContainer = document.getElementById("bingoCardsContainer");
        bingoCardsContainer.innerHTML = ""; // Clear previous cards

        var generatedCards = [];

        for (var k = 0; k < numCards; k++) {
            var numbers = generateUniqueNumbers();

            // Create a new container for each bingo card
            var cardContainer = document.createElement("div");
            cardContainer.classList.add("printable");

            // Create a new table for each bingo card
            var table = document.createElement("table");
            table.classList.add("bingo-card");

            // Add extra row for "BINGO"
            var headerRow = document.createElement("tr");
            headerRow.classList.add("header");
            var headerCell = document.createElement("th");
            var topLeft = document.createElement("img");
            topLeft.src="images/rainbowLogo.png";
            headerRow.appendChild(topLeft);
            headerCell.setAttribute("colspan", "5");
            headerCell.textContent = "B I N G O";
            headerRow.appendChild(headerCell);
            var topRight = document.createElement("img");
            topRight.src="images/rainbowLogo.png";
            headerRow.appendChild(topRight);
            cardContainer.appendChild(headerRow);

            

            var cellIndex = 0;

            // ...

		for (var i = 0; i < 5; i++) {
    		var row = document.createElement("tr");

    		for (var j = 0; j < 5; j++) {
        		var cell = document.createElement("td");

        		// Center cell is an image
        		if (i === 2 && j === 2) {
            		var imgElement = document.createElement("img");
           			imgElement.src = "images/rainbowCenter.jpg"; // Replace with your image URL or Base64 data
            		imgElement.style.maxWidth = "100%";
            		imgElement.style.maxHeight = "90%";
           		 	cell.appendChild(imgElement);
        		} else {
            		cell.textContent = numbers[cellIndex++];
                    
        }

        row.appendChild(cell);


        
    }

    table.appendChild(row);

    
}

// ...


            cardContainer.appendChild(table);
            bingoCardsContainer.appendChild(cardContainer);
        }

        function generateUniqueNumbers() {
            var numbers = [];

            // Generate random numbers from 1 to 75
            for (var i = 1; i <= 75; i++) {
                numbers.push(i);
            }

            // Shuffle the numbers
            for (var i = numbers.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }

            // Check uniqueness
            for (var i = 0; i < generatedCards.length; i++) {
                var isUnique = true;

                for (var j = 0; j < 24; j++) { // Excluding the "FREE" center cell
                    if (generatedCards[i][j] !== numbers[j]) {
                        isUnique = false;
                        break;
                    }
                }

                if (isUnique) {
                    return generateUniqueNumbers(); // If not unique, generate new numbers
                }
            }

            generatedCards.push(numbers);
            return numbers;
        }
        var footerRow = document.createElement("tr");
            var footerCell = document.createElement("th");
            footerRow.classList.add("adhc-footer");
            footerCell.setAttribute("colspan", "1");
            footerCell.textContext = "RAINBOW ADULT DAY HEALTH";
            footerRow.appendChild(footerCell);
            cardContainer.appendChild(footerRow);
    }


document.getElementById('numCards').addEventListener('keyup', function(event){
    if (event.key==="Enter"){
        console.log("hi :)");
        generateBingoCards();
    }
});