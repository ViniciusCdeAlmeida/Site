class SitesController < ApplicationController
    
    def new
        @site = Site.new
    end

    def create
        @site = Site.new(site_params)
        @site.save
        redirect_to sites_path
    end

    def index
        @site = Site.all
    end

    private 
    def site_params 
        params.require(:site).permit(:description, :title, :imgpath, :category)
    end
end
