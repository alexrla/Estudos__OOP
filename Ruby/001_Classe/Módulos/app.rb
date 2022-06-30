# Usando o módulo Payment

# requaire_relative, pega o arquivo estando no mesmo diretório do arquivo app.rb (não é necessário o ".rb") - semelhante a uma importação
require_relative 'pagamento';

# Incluindo o módulo Payment no arquivo app.rb
# A palavra include é utilizada somente para módulos
include Payment;

# Classe
newPay = Visa.new; # Ou newPay = Payment::Visa.new;
puts newPay.paying; # pagando...

# Constante
puts PI; #3.14
puts Payment::PI; #3.14

puts "Digite a bandeira do cartão:";
flag = gets.chomp;

puts "Digite o número do cartão:";
number = gets.chomp;

puts "Digite o valor da compra:";
value = gets.chomp.to_i;

# Método
puts Payment.pay(flag, number, value); # Ex.: Pagando com o cartão MasterCard [Número: 123456789.0] o valor de R$ 1000...
puts pay(flag, number, value); # Ex.: Pagando com o cartão MasterCard [Número: 123456789.0] o valor de R$ 1000...