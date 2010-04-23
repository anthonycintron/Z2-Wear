require 'rubygems'
require 'sinatra'
require 'dm-core'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/zwear.db")

class Product
  
  include DataMapper::Resource
  
  property  :id,            Serial
  property  :title,         String
  property  :thumb,         String
  property  :large,         String
  property  :description,   Text
  property  :created_at,    DateTime
  property  :updated_at,    DateTime
  property  :content_type,  String
  property  :price,         Float
  property  :is_active,     Boolean
  property  :url,           String
  
end

# Create or upgrade all tables at once, like magic
DataMapper.auto_upgrade!
  

# set utf-8 for outgoing 
before do
  headers "Content-Type" => "text/html; charset=utf-8"
end

get '/' do
  @title = "Z Square Homepage"
  erb :home
end

# retrieve list of products
get '/list' do
end

get '/new' do
end

get '/create' do
end

get '/delete' do
end

get '/product/:name' do
end



