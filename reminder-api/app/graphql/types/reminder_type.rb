module Types
  class ReminderType < BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :deadline, String, null: false
    field :completed, Boolean, null: false
  end
end
