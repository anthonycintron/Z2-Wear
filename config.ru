require 'rubygems'
require 'sinatra'
require 'zwear'

set :environment, :production
# Optionally set other variables here like :root or :views

run Sinatra::Application