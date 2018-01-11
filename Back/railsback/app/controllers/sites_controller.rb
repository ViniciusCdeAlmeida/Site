class SitesController < ApplicationController
    
    def new
        @site = Site.new
    end
    
    def create
        @site = Site.new(site_params)
        respond_to do |format|
            if @site.save
                format.json{render @site, status: :created, location: @site}
            else
                render 'new'
            end
        end
    end

    def index
        @sites = Site.all
        respond_to do |format|
            format.html
            format.json { render json: @sites }
        end
    end

    def show
        @site = Site.find(params[:id])
    end

    def update
        @site = Site.find(params[:id])
        respond_to do |format|
            if @site.update(site_params)
                format.json { render :show, status: :created, location: @site }
            else
                render 'edit'
            end
        end
    end

    def destroy
        @site = Site.find(params[:id])
        @site.destroy
        respond_to do |format|
            format.json {head :no_content}
            redirect_to sites_path
        end
    end

    private 
    def site_params 
        params.require(:site).permit(:description, :title, :category, :picture)
    end
end