class SiteController < ApplicationController

  def index
    @site = Site.all
  end

  def new
    @site = Site.new
  end

  def edit
    @site = Site.find(params[:id])
  end

  def show
    @site = Site.find(params[:id])
  end

  def create

    @site = Site.new(site_params)
    if @site.save
      flash[:notice] = "Successfully created..."
      redirect_to site_path(@site)
    else
      render 'new'
    end

  end

  def update

    @site = Site.find(params[:id])
    if @site.update(site_params)
      flash[:notice] = "Successfully created..."
      redirect_to site_path(@site)
    else
      render 'edit'
    end
  end

  private 
    def site_params
      
      params.require(:site).permit(:description, :title, :imgpath, :category)
    
    end


end
