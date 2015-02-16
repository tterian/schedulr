class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :title
      t.text :body
      t.string :status
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :orders, :users
  end
end
