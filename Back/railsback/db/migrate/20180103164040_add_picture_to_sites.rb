class AddPictureToSites < ActiveRecord::Migration[5.1]
  def change
    add_column :sites, :picture, :string
  end
end
