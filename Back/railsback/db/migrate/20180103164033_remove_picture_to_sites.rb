class RemovePictureToSites < ActiveRecord::Migration[5.1]
  def change
    remove_column :sites, :picture, :string
  end
end
