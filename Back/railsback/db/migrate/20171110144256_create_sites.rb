class CreateSites < ActiveRecord::Migration[5.1]
  def change
    create_table :sites do |t|
      t.string :title
      t.text :description
      t.string :imgpath
      t.string :category
      t.string :picture

      t.timestamps
    end
  end
end
