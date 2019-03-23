module Types
  class QueryType < BaseObject
    field :all_reminders, [ReminderType], null: false

    def all_reminders
      Reminder.all
    end
  end
end
# Types::QueryType = GraphQL::ObjectType.define do
#   name "Query"
#   field :all_reminders, types[Types::ReminderType] do
#     description 'asdg'
#     resolve ->(obj, args, ctx) {Reminder.all}
#   end
# end
