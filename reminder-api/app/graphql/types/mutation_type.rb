module Types
  class MutationType < BaseObject
    field :removeReminder, mutation: Mutations::RemoveReminder
    field :createReminder, mutation: Mutations::CreateReminder
    field :updateReminder, mutation: Mutations::UpdateReminder
  end
end
