class Employee
    attr_accessor :name, :cpf, :salary;

    def initialize(name, cpf, salary)
        @name = name;
        @cpf = cpf;
        @salary = salary;
    end
end

class Manager < Employee
    attr_accessor :password, :companyTime;

    def initialize(password, companyTime)
        @password = password;
        @companyTime= companyTime;
    end
end

newEmployee = Employee.new("Luan", "11122233300", 3500);
puts newEmployee.name; # Luan
puts newEmployee.cpf; # 11122233300
puts newEmployee.salary; # 3500

newManager = Manager.new("123456", 2);
newManager.name = "Mônica";
newManager.cpf = "55566677744";
newManager.salary = 3500;

puts newManager.name; # Mônica
puts newManager.cpf; # 55566677744
puts newManager.salary; # 3500
puts newManager.password; # 123456
puts newManager.companyTime; # 2