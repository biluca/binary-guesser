class CardGenerator:
    def generate_numbers(self):
        numbers = []
        for x in range(1, 64):
            binary_value = bin(x)
            normalized_value = binary_value.replace("0b", "").zfill(6)
            reversed_string = normalized_value[::-1]
            vectorized_value = list(reversed_string)
            vectorized_value.append(x)
            numbers.append(vectorized_value)

        return numbers

    def generate_cards(self):
        numbers = self.generate_numbers()
        cards = [[], [],[],[],[],[]]

        for number in numbers:
            for i in range(0, 6):
                if number[i] == "1":
                    cards[i].append(number[6])
        
        return cards

    

