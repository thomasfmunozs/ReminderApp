module Mutations
  class RemoveReminder < BaseMutation
    argument :id, ID, required: true

    type Types::ReminderType

    def resolve(id: nil)
      reminder = Reminder.find(id)
      reminder.destroy!
    end
  end
end
