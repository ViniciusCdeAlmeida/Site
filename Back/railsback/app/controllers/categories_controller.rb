class CategoriesController < ApplicationController

    def new
        @category = Category.new
    end

    def create
        @category = Category.new(category_params)
        
        respond_to do |format|
            if @category.save
                format.json{render @category, status: :created, location: @category}
            else
                render 'new'
            end
        end
    end

    def index
        @category = Category.all
        respond_to do |format|
            format.json {render json: @category}
        end
    end

    def show
        @category = Category.find(params[:id])
    end

    def update
        @category = Category.find(params[:id])
        respond_to do |format|
            if @category.update(category_params)
                format.json { render :show, status: :created, location: @category }
            else
                render 'edit'
            end
        end
    end

    def destroy
        @category = Category.find(params[:id])
        @category.destroy
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
