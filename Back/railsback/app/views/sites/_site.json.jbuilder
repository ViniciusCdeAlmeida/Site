json.extract! site, :id, :title, :description, :imgpath, :category
json.url site_url(site, format: :json)
