class Franchise
    def description
        return "Franquia!";
    end
end

class Franchisee < Franchise
    def description
        puts super;
        return "Franquiado";
    end
end

newFranchise = Franchise.new;
puts newFranchise.description;

newFranchisee = Franchisee.new;
puts newFranchisee.description; # Franquia\n Franquiado