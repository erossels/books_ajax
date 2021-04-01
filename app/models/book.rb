class Book < ApplicationRecord
  belongs_to :user, optional: true
  scope :available,-> { where("status = 0") }
  enum status: [:created, :booked, :payed]

  def to_s
    name
  end
end
