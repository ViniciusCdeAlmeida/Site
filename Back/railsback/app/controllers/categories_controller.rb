class CategoriesController < ApplicationController

    def new
        @cate = Category.new
    end

    def create
        @cate = Category.new(category_params)
        @cate.save
        redirect_to categories_path
    end

    def index
        @cate = Category.all
    end

    private 
    def category_params 
        params.require(:category).permit(:title)
    end

end
