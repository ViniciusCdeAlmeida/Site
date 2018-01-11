class CategoriesController < ApplicationController

    def new
        @cate = Category.new
    end

    def create
        @cate = Category.new(category_params)
        
        respond_to do |format|
            if @cate.save
                format.json{render @cate, status: :created, location: @site}
            else
                render 'new'
            end
        end
    end

    def index
        @cate = Category.all
        respond_to do |format|
            format.json {render json: @cate}
        end
    end

    def show
        @cate = Category.find(params[:id])
    end

    def update
        @cate = Category.find(params[:id])
        respond_to do |format|
            if @site.update(category_params)
                format.json { render :show, status: :created, location: @cate }
            else
                render 'edit'
            end
        end
    end

    def destroy
        @cate = Category.find(params[:id])
        @cate.destroy
        respond_to do |format|
            format.json {head :no_content}
            redirect_to categories_path
        end
    end

    private 
    def category_params 
        params.require(:category).permit(:title)
    end

end
