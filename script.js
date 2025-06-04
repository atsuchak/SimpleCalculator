const display = document.getElementById("display");
        let memoryValue = 0;

        function appendToDisplay(input) {
            if (input === 'M+') {
                memoryPlus();
            } else {
                display.value += input;
            }
        }

        function memoryPlus() {
            const current = parseFloat(display.value);
            if (!isNaN(current)) {
                memoryValue += current;
                display.value = '';
            } else {
                display.value = "ERROR";
            }
        }

        function memoryRecall() {
            display.value += memoryValue.toString();
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "ERROR";
            }
        }

        // Keyboard support
        document.addEventListener("keydown", function (event) {
            const key = event.key;

            if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
                appendToDisplay(key);
            } else if (key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculate();
            } else if (key === 'Backspace') {
                display.value = display.value.slice(0, -1);
            } else if (key.toLowerCase() === 'c') {
                clearDisplay();
            } else if (key.toLowerCase() === 'm') {
                memoryPlus();
            } else if (key.toLowerCase() === 'r') {
                memoryRecall();
            }
        });