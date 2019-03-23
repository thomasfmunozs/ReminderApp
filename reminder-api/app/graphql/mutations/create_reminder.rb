module Mutations
  class CreateReminder < BaseMutation
    # arguments passed to the `resolved` method
    argument :title, String, required: true
    argument :deadline, String, required: true
    argument :completed, String, required: false

    # return type from the mutation
    type Types::ReminderType

    def resolve(title: nil, deadline: nil, completed: nil)
      reminder = Reminder.create!(
        title: title,
        deadline: deadline,
        completed: false,
      )
      return reminder
    end
  end
end
