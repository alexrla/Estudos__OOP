require_relative 'mixins';

myExample = Example.new;

# Módulo 1
puts myExample.methodeOne_one; # Módulo 1 - Método 1
puts myExample.methodeOne_two; # Módulo 1 - Método 2

# Módulo 2
puts myExample.methodeTwo_one; # Módulo 2 - Método 1
puts myExample.methodeTwo_two; # Módulo 2 - Método 2

# Classe Example
puts myExample.my_method_app; # My method APP!