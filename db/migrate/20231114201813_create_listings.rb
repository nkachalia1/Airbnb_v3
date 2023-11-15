class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.float :beds, null: false
      t.float :baths, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end

    add_index :users, :title, unique: true
  end
end
