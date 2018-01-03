class Multipic < ApplicationRecord
  belongs_to :site
  mount_base64_uploader :multipic
end
