class AddImgpathToSites < ActiveRecord::Migration[5.1]
  def change
    add_column :sites, :imgpath, :string
  end
end
