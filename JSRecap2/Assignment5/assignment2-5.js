
        function sortArray(numbers, order) {
            if (order === "asc") {
                numbers.sort((a, b) => a - b);
            }
            else if (order === "desc") {
                numbers.sort((a,b) => b- a);
            }

            return numbers;
        }

        const numbers = [5, 2, 8, 1, 9]; // original array

        console.log(`Ascending order: ${sortArray(numbers, "asc")}`); // Output should be [1, 2, 5, 8, 9]
        console.log(`Descending order: ${sortArray(numbers, "desc")}`); // Output should be [9, 8, 5, 2, 1]

