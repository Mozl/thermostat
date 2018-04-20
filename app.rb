require 'sinatra/base'
require 'pry'
require 'sinatra/flash'
require 'uri'

class Thermostat < Sinatra::Base
  configure do
    enable :sessions
  end

  run! if app_file == $0

  get '/index' do
    erb :index
  end

end
