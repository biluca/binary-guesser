import os
from card_generator import CardGenerator


class Guesser:
    def generate_card_set(self):
        card_generator = CardGenerator()
        card_set = card_generator.generate_cards()
        return card_set

    def print_card_set(self, card_set):
        counter = 0
        line = ""
        for number in card_set:
            line = line + str(number).zfill(2) + " "
            counter = counter + 1

            if counter % 4 == 0:
                print(line)
                line = ""

    def process_answer(self, gamer_answer):
        guess = 0
        for i in range(0, 6):
            if gamer_answer[i] == "S" or gamer_answer[i] == "s":
                part = pow(2, i)
                guess = guess + part
        
        return guess

    def start_guess(self):
        gamer_answer = []
        cards_set = self.generate_card_set()

        input("Pense em um número de 1 a 60! Pensou? S ou N: ")
        for card_set in cards_set:
            self.print_card_set(card_set)
            answer = input("Seu número aparece na coleção de números acima? S ou N: ")
            gamer_answer.append(answer)
            os.system("clear")

        ##print(gamer_answer)
        guess = self.process_answer(gamer_answer)
        print("Seu número é o ", guess)


guesser = Guesser()
guesser.start_guess()
