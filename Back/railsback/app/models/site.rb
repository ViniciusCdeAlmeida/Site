class Site < ApplicationRecord

    # logger.debug :picture
    mount_base64_uploader :picture, PictureUploader
    # mount_uploaders :picture, PictureUploader
    # mount_uploader :picture, PictureUploader
    # has_many :multipics
    # attr_accessor :document_data
    # attr_accessor :multipic_data
    # serialize :picture, JSON
end
