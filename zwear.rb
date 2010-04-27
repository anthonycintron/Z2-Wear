require 'rubygems'
require 'sinatra'
require 'dm-core'
require 'lib/authorization'
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/db/zwear.db")

class Product
  
  include DataMapper::Resource
  
  property  :id,            Serial
  property  :title,         String
  property  :thumb,         String
  property  :large,         String
  property  :description,   Text
  property  :largeImgName,  String
  property  :thumbImgName,  String
  property  :filename,      String
  property  :size,          Integer
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
  @product = "List Products"
  @product = Product.all(:order => [:created_at.desc])
  erb :list, :layout => false
end

get '/new' do
  #require_admin
  @title = "Create A New Product"
  erb :new
end



post '/create' do
  @product = Product.new(params[:product])
  @product.largeImgName = params[:product][:large][:filename]
  @product.thumbImgName = params[:product][:thumb][:filename]
  if @product.save
    # upload thumb image
    thumbPath = File.join(Dir.pwd, "/public/products", @product.thumbImgName)
    File.open(thumbPath, "wb") do |f|
      f.write(params[:product][:thumb][:tempfile].read)
    end
    # upload large image
    largePath = File.join(Dir.pwd, "/public/products", @product.largeImgName)
    File.open(largePath, "wb") do |f|
      f.write(params[:product][:large][:tempfile].read)
    end
    redirect "/show/#{@product.id}"
  else
    redirect('/list')
  end
end



get '/delete/:id' do
  product = Product.get(params[:id])
  unless product.nil?
    thumbImgPath = File.join(Dir.pwd, "/public/products", product.thumbImgName)
    largeImgPath = File.join(Dir.pwd, "/public/products", product.largeImgName)
    File.delete(thumbImgPath)
    File.delete(largeImgPath)
    product.delete
  end
  redirect('/list')
end

get '/show/:id' do
  @product = Product.get(params[:id])
  if @product
    erb :show, :layout => false
  else
    redirect('/list')
  end
end