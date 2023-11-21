class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.float :beds, null: false
      t.float :baths, null: false
      t.string :location, null: false
      t.float :rating, null: false
      t.string :image_url1, null: false
      t.string :image_url2, null: false
      t.string :image_url3, null: false
      t.string :image_url4, null: false
      t.timestamps
    end

    add_index :listings, :title, unique: true
  end
end
