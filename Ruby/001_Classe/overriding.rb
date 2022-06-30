class Calculator
    def sum(operatingOne, operatingTwo)
        return operatingOne + operatingTwo;
    end
end

class CalculatorFashion < Calculator
    # Overriding
    def sum(operatingOne, operatingTwo)
        return "O resultado da soma é #{operatingOne + operatingTwo}";
    end
end

newCalculator = Calculator.new;

puts newCalculator.sum(2, 3); # 5

newCalculatorFashion = CalculatorFashion.new;

puts newCalculatorFashion.sum(2, 3); # O resultado da soma é 5