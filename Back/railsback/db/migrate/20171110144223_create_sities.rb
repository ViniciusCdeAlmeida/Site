class CreateSities < ActiveRecord::Migration[5.1]
  def change
    create_table :sities do |t|
      t.string :title
      t.text :description
      t.string :imgpath
      t.string :category

      t.timestamps
    end
  end
end
