require 'sinatra'
require 'active_record'

ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(:development)

class App < Sinatra::Base
  get '/' do
    @tables = ActiveRecord::Base.connection.tables
    haml :index
  end
end
