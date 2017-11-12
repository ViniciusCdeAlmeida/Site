json.extract! site, :id, :title, :description, :imgpath, :category
json.url sites_url(site, format: :json)
