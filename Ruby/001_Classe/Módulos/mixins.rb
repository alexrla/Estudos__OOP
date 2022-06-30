# Mixins

require_relative 'myModuleOne';
require_relative 'myModuleTwo';

class Example
    # O include deve ser dentro da classe
    include MyModuleOne;
    include MyModuleTwo;

    def my_method_app
        return "My method APP!";
    end
end