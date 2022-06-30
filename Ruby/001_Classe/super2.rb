class Account
    attr_reader :accountNumber, :accountBalance;

    def initialize(accountNumber, accountBalance = 0)
        @accountNumber = accountNumber;
        @accountBalance = accountBalance;
    end
end

class SpecialAccount < Account
    attr_reader :overdraftLimit;

    def initialize(accountNumber, accountBalance, overdraftLimit)
        super(accountNumber, accountBalance);
        @overdraftLimit = overdraftLimit;
    end
end

newAccount = Account.new("001", 100.00);
puts newAccount.accountNumber; # 001
puts newAccount.accountBalance; # 100.0

newSpecialAccount = SpecialAccount.new("002", 150.00, 800.00);
puts newSpecialAccount.accountNumber; # 002
puts newSpecialAccount.accountBalance; # 150.0
puts newSpecialAccount.overdraftLimit; # 800.0