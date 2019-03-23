class CreateReminders < ActiveRecord::Migration[5.2]
  def change
    create_table :reminders do |t|
      t.string :title
      t.datetime :deadline
      t.boolean :completed

      t.timestamps
    end
  end
end
