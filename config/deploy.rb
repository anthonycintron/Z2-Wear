set :application, "z2wear.com"
set :repository,  "git@github.com:anthonycintron/Z2-Wear.git"
set :deploy_to, "/sites/z2wear.com/httpdocs/#{application}"
set :branch, "master"
set :user, "root"
set :use_sudo, false
set :password, "San.franciSCo!!"
set :scm, :git

role :web, "74.55.138.26"                          # Your HTTP server, Apache/etc
role :app, "74.55.138.26"

namespace :deploy do
 task :start do ; end
 task :stop do ; end
 task :restart, :roles => :app, :except => { :no_release => true } do
   run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
 end
end
