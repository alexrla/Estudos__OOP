# Criando um módulo (palavra reservada module e nome com inicial em maiúsculo)
module Payment
    PI = 3.14;

    def pay(flag, number, value) 
        return "Pagando com o cartão #{flag} [Número: #{number}] o valor de R$ #{value}...";
    end

    class Visa
        def paying
            return "pagando...";
        end
    end
end