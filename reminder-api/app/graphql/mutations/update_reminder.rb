module Mutations
  class UpdateReminder < BaseMutation
    # arguments passed to the `resolved` method
    argument :id, ID, required: true
    argument :completed, Boolean, required: true

    # return type from the mutation
    type Types::ReminderType

    def resolve(id: nil, completed: nil)
      reminder = Reminder.find(id)
      reminder.update_attribute(:completed, completed)
    end
  end
end
