require 'tty-cursor';
require 'tty-spinner';

class Initialization
    def self.initializing
        system("clear"); # Limpando a tela

        cursor = TTY::Cursor;
        print cursor.move_to(100, 25);

        spinner = TTY::Spinner.new;
        spinner = TTY::Spinner.new("[:spinner] Carregando ...", format: :pulse_2);
        spinner.auto_spin; # Automatic animation with default interval
        sleep(5); # Perform task
        spinner.stop("Carregado!"); # Stop animation

        print "Inicializando.";
        
        # sleep 1; # Aguardando um segundo
        # print "..";
        # sleep 1; # Aguardando um segundo
        # print "...";
        # sleep 1; # Aguardando um segundo
        # print "....";
        # sleep 1; # Aguardando um segundo
        #puts ".....";
        # sleep 1; # Aguardando um segundo

        myDots = ["..", "...", "....", "....."];

        4.times do |i|
            sleep 1;
            print myDots[i];
        end

        puts "......";

        system("clear"); # Limpando a tela
    end
end