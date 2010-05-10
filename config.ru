require 'rubygems'
require 'sinatra'
require 'zwear'

set :environment, :production
# Optionally set other variables here like :root or :views

run Sinatra.application


# --------------------------------------------
# The Apache 2 module was successfully installed.
# 
# Please edit your Apache configuration file, and add these lines:
# 
#    LoadModule passenger_module /var/lib/gems/1.8/gems/passenger-2.2.11/ext/apache2/mod_passenger.so
#    PassengerRoot /var/lib/gems/1.8/gems/passenger-2.2.11
#    PassengerRuby /usr/bin/ruby1.8
# 
# After you restart Apache, you are ready to deploy any number of Ruby on Rails
# applications on Apache, without any further Ruby on Rails-specific
# configuration!
# 
# Press ENTER to continue.
# --------------------------------------------
# Deploying a Ruby on Rails application: an example
# 
# Suppose you have a Rails application in /somewhere. Add a virtual host to your
# Apache configuration file and set its DocumentRoot to /somewhere/public:
# 
#    <VirtualHost *:80>
#       ServerName www.yourhost.com
#       DocumentRoot /somewhere/public    # <-- be sure to point to 'public'!
#       <Directory /somewhere/public>
#          AllowOverride all              # <-- relax Apache security settings
#          Options -MultiViews            # <-- MultiViews must be turned off
#       </Directory>
#    </VirtualHost>
# 
# And that's it! You may also want to check the Users Guide for security and
# optimization tips, troubleshooting and other useful information:
# 
#   /var/lib/gems/1.8/gems/passenger-2.2.11/doc/Users guide Apache.html
# 
# Enjoy Phusion Passenger, a product of Phusion (www.phusion.nl) :-)
# http://www.modrails.com/
# 
# Phusion Passenger is a trademark of Hongli Lai & Ninh Bui.
