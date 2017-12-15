class RemoveImgpathToSites < ActiveRecord::Migration[5.1]
  def change
    remove_column :sites, :imgpath, :string
  end
end
