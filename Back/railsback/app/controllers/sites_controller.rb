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
        params.require(:site).permit(:description, :title, :picture, :category)
    end
end


# class LibrariesController < ApplicationController
    
#         # before_action :set_library, only: [:edit, :update, :show, :destroy]
        
#         def new
#             @library = Library.new        
#         end
    
#         def create
    
#             @library = Library.new(library_params)
    
#             respond_to do |format|
#                 if @library.save
#                     format.json { render @library, 
# status: :created, location: @library }
#                 else
#                     render 'new'
#                 end
#             end
#         end
    
#         def index
    
#             @libraries = Library.all
#             respond_to do |format|
#                 format.html
#                 format.json { render json: @libraries }
#             end
#         end
    
#         def show
    
#             @library = Library.find(params[:id])
    
#         end
    
#         def edit
#             @library = Library.find(params[:id])
#         end
    
#         def update
                     
#             @library = Library.find(params[:id])
#             respond_to do |format|
#                 if @library.update(library_params)
#                     format.json { render :show, status: :created, location: @library }
#                 else
#                     render 'edit'
#                 end
#             end       
#         end
    
#         def destroy
#             @library = Library.find(params[:id])
#             @library.destroy
#             respond_to do |format|
#                 format.json { head :no_content }
#                 redirect_to libraries_path
#             end
#         end
        
#         private
#             def library_params
#                 params.require(:library).permit(:title, :description, :author, :body)
#                 # params.require(:library).permit!
    
#             end
    
        
#     end
    